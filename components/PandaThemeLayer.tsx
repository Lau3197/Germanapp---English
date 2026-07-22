import React, { useEffect, useRef, useState } from 'react';
import { PandaMascotMood, usePandaMascot } from '../contexts/PandaMascotContext';

interface PandaThemeLayerProps {
  showReward: boolean;
  onDismissReward: () => void;
}

interface BuddyOffset {
  x: number;
  y: number;
}

interface BuddyDragState {
  pointerId: number;
  startClientX: number;
  startClientY: number;
  startOffset: BuddyOffset;
  startRect: DOMRect;
}

const PANDA_BUDDY_OFFSET_STORAGE_KEY = 'deutschmeister-panda-buddy-offset';
const BUDDY_VIEWPORT_MARGIN = 12;
const MOBILE_BUDDY_MEDIA_QUERY = '(max-width: 640px)';

const defaultBuddyOffset: BuddyOffset = { x: 0, y: 0 };

const readStoredBuddyOffset = (): BuddyOffset => {
  if (typeof window === 'undefined') {
    return defaultBuddyOffset;
  }

  try {
    const storedOffset = window.localStorage.getItem(PANDA_BUDDY_OFFSET_STORAGE_KEY);

    if (!storedOffset) {
      return defaultBuddyOffset;
    }

    const parsedOffset = JSON.parse(storedOffset) as Partial<BuddyOffset>;

    if (Number.isFinite(parsedOffset.x) && Number.isFinite(parsedOffset.y)) {
      return { x: Number(parsedOffset.x), y: Number(parsedOffset.y) };
    }
  } catch {
    window.localStorage.removeItem(PANDA_BUDDY_OFFSET_STORAGE_KEY);
  }

  return defaultBuddyOffset;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const getVisibleViewportRect = () => {
  const visualViewport = window.visualViewport;
  const left = visualViewport?.offsetLeft ?? 0;
  const top = visualViewport?.offsetTop ?? 0;
  const width = visualViewport?.width ?? window.innerWidth;
  const height = visualViewport?.height ?? window.innerHeight;

  return {
    left,
    top,
    right: left + width,
    bottom: top + height
  };
};

const getMobileBuddyMinTop = () => {
  if (!window.matchMedia(MOBILE_BUDDY_MEDIA_QUERY).matches) {
    return BUDDY_VIEWPORT_MARGIN;
  }

  const header = document.querySelector<HTMLElement>('.app-header');
  const headerBottom = header?.getBoundingClientRect().bottom ?? 0;

  return Math.max(BUDDY_VIEWPORT_MARGIN, headerBottom + BUDDY_VIEWPORT_MARGIN);
};

const getBuddyViewportBounds = (buddyRect: DOMRect) => {
  const viewport = getVisibleViewportRect();
  const minLeft = viewport.left + BUDDY_VIEWPORT_MARGIN;
  const minTop = Math.max(viewport.top + BUDDY_VIEWPORT_MARGIN, getMobileBuddyMinTop());
  const maxLeft = Math.max(minLeft, viewport.right - buddyRect.width - BUDDY_VIEWPORT_MARGIN);
  const maxTop = Math.max(minTop, viewport.bottom - buddyRect.height - BUDDY_VIEWPORT_MARGIN);

  return { minLeft, maxLeft, minTop, maxTop };
};

const clampBuddyOffset = (
  startRect: DOMRect,
  startOffset: BuddyOffset,
  deltaX: number,
  deltaY: number
): BuddyOffset => {
  const bounds = getBuddyViewportBounds(startRect);
  const nextLeft = clamp(startRect.left + deltaX, bounds.minLeft, bounds.maxLeft);
  const nextTop = clamp(startRect.top + deltaY, bounds.minTop, bounds.maxTop);

  return {
    x: startOffset.x + nextLeft - startRect.left,
    y: startOffset.y + nextTop - startRect.top
  };
};

export const PandaThemeLayer: React.FC<PandaThemeLayerProps> = ({ showReward, onDismissReward }) => {
  const { mood } = usePandaMascot();
  const mascot = getMascotState(mood);
  const buddyRef = useRef<HTMLDivElement | null>(null);
  const dragStateRef = useRef<BuddyDragState | null>(null);
  const [buddyOffset, setBuddyOffset] = useState<BuddyOffset>(readStoredBuddyOffset);
  const [isDragging, setIsDragging] = useState(false);

  const updateBuddyDrag = (clientX: number, clientY: number, pointerId?: number) => {
    const dragState = dragStateRef.current;

    if (!dragState || (pointerId !== undefined && dragState.pointerId !== pointerId)) {
      return;
    }

    setBuddyOffset(clampBuddyOffset(
      dragState.startRect,
      dragState.startOffset,
      clientX - dragState.startClientX,
      clientY - dragState.startClientY
    ));
  };

  const endDragging = (pointerId?: number) => {
    const dragState = dragStateRef.current;

    if (!dragState || (pointerId !== undefined && dragState.pointerId !== pointerId)) {
      return;
    }

    const buddy = buddyRef.current;

    if (buddy?.hasPointerCapture(dragState.pointerId)) {
      buddy.releasePointerCapture(dragState.pointerId);
    }

    dragStateRef.current = null;
    setIsDragging(false);
  };

  useEffect(() => {
    window.localStorage.setItem(PANDA_BUDDY_OFFSET_STORAGE_KEY, JSON.stringify(buddyOffset));
  }, [buddyOffset]);

  useEffect(() => {
    if (!isDragging) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      event.preventDefault();
      updateBuddyDrag(event.clientX, event.clientY, event.pointerId);
    };

    const handleMouseMove = (event: MouseEvent) => {
      event.preventDefault();
      updateBuddyDrag(event.clientX, event.clientY);
    };

    const handlePointerEnd = (event: PointerEvent) => endDragging(event.pointerId);
    const handleMouseEnd = () => endDragging();

    window.addEventListener('pointermove', handlePointerMove, { passive: false });
    window.addEventListener('mousemove', handleMouseMove, { passive: false });
    window.addEventListener('pointerup', handlePointerEnd);
    window.addEventListener('pointercancel', handlePointerEnd);
    window.addEventListener('mouseup', handleMouseEnd);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('pointerup', handlePointerEnd);
      window.removeEventListener('pointercancel', handlePointerEnd);
      window.removeEventListener('mouseup', handleMouseEnd);
    };
  }, [isDragging]);

  useEffect(() => {
    const keepBuddyInViewport = () => {
      const buddy = buddyRef.current;

      if (!buddy) {
        return;
      }

      const rect = buddy.getBoundingClientRect();
      const bounds = getBuddyViewportBounds(rect);
      const nextLeft = clamp(rect.left, bounds.minLeft, bounds.maxLeft);
      const nextTop = clamp(rect.top, bounds.minTop, bounds.maxTop);
      const deltaX = nextLeft - rect.left;
      const deltaY = nextTop - rect.top;

      if (deltaX !== 0 || deltaY !== 0) {
        setBuddyOffset(currentOffset => ({
          x: currentOffset.x + deltaX,
          y: currentOffset.y + deltaY
        }));
      }
    };

    const visualViewport = window.visualViewport;

    keepBuddyInViewport();
    window.addEventListener('resize', keepBuddyInViewport);
    visualViewport?.addEventListener('resize', keepBuddyInViewport);
    visualViewport?.addEventListener('scroll', keepBuddyInViewport);

    return () => {
      window.removeEventListener('resize', keepBuddyInViewport);
      visualViewport?.removeEventListener('resize', keepBuddyInViewport);
      visualViewport?.removeEventListener('scroll', keepBuddyInViewport);
    };
  }, []);

  const nudgeBuddy = (deltaX: number, deltaY: number) => {
    const buddy = buddyRef.current;

    if (!buddy) {
      return;
    }

    const rect = buddy.getBoundingClientRect();
    setBuddyOffset(currentOffset => clampBuddyOffset(rect, currentOffset, deltaX, deltaY));
  };

  const buddyStyle = {
    '--panda-buddy-x': `${buddyOffset.x}px`,
    '--panda-buddy-y': `${buddyOffset.y}px`
  } as React.CSSProperties;

  return (
    <>
      <div className="panda-theme-layer" aria-hidden="true">
        <div className="panda-bamboo panda-bamboo-left" />
        <div className="panda-bamboo panda-bamboo-right" />
        <div className="panda-floating panda-float-one">🐼</div>
        <div className="panda-floating panda-float-two">🎋</div>
        <div className="panda-floating panda-float-three">🐾</div>
        <div className="panda-floating panda-float-four">🌿</div>
      </div>

      <div
        ref={buddyRef}
        className={`panda-study-buddy panda-study-buddy-${mood}${isDragging ? ' is-dragging' : ''}`}
        style={buddyStyle}
        tabIndex={0}
        aria-label="Pandachan study buddy"
        title="Drag to move Pandachan"
        onPointerDown={event => {
          if (event.button !== 0) {
            return;
          }

          const rect = event.currentTarget.getBoundingClientRect();
          dragStateRef.current = {
            pointerId: event.pointerId,
            startClientX: event.clientX,
            startClientY: event.clientY,
            startOffset: buddyOffset,
            startRect: rect
          };
          setIsDragging(true);
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={event => {
          event.preventDefault();
          updateBuddyDrag(event.clientX, event.clientY, event.pointerId);
        }}
        onPointerUp={event => endDragging(event.pointerId)}
        onPointerCancel={event => endDragging(event.pointerId)}
        onKeyDown={event => {
          const step = event.shiftKey ? 40 : 16;

          if (event.key === 'ArrowLeft') {
            event.preventDefault();
            nudgeBuddy(-step, 0);
          } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            nudgeBuddy(step, 0);
          } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            nudgeBuddy(0, -step);
          } else if (event.key === 'ArrowDown') {
            event.preventDefault();
            nudgeBuddy(0, step);
          }
        }}
      >
        <div className="panda-study-buddy-glow" />
        <div className="panda-study-buddy-character">
          <span className="panda-study-buddy-sparkle panda-study-buddy-sparkle-one" />
          <span className="panda-study-buddy-sparkle panda-study-buddy-sparkle-two" />
          <span className="panda-study-buddy-sparkle panda-study-buddy-sparkle-three" />
          <div className="panda-study-buddy-ear panda-study-buddy-ear-left" />
          <div className="panda-study-buddy-ear panda-study-buddy-ear-right" />
          <div className="panda-study-buddy-head">
            <div className="panda-study-buddy-eye panda-study-buddy-eye-left" />
            <div className="panda-study-buddy-eye panda-study-buddy-eye-right" />
            <div className="panda-study-buddy-cheek panda-study-buddy-cheek-left" />
            <div className="panda-study-buddy-cheek panda-study-buddy-cheek-right" />
            <div className="panda-study-buddy-muzzle">
              <span />
            </div>
          </div>
          <div className="panda-study-buddy-body">
            <div className="panda-study-buddy-arm panda-study-buddy-arm-left" />
            <div className="panda-study-buddy-arm panda-study-buddy-arm-right" />
            <div className="panda-study-buddy-belly" />
            <div className="panda-study-buddy-scarf" />
          </div>
          <div className="panda-study-buddy-foot panda-study-buddy-foot-left" />
          <div className="panda-study-buddy-foot panda-study-buddy-foot-right" />
          {mood === 'sleeping' && <span className="panda-sleep-z">Zzz</span>}
        </div>
        <div className="panda-study-buddy-panel">
          <div className="panda-study-buddy-bubble">
            <span>Pandachan is with you</span>
            <strong>{mascot.message}</strong>
            <em>{mascot.hint}</em>
          </div>
        </div>
      </div>

      {showReward && (
        <div className="panda-theme-toast" role="status" aria-live="polite">
          <div className="panda-theme-toast-icon">🐼</div>
          <div className="min-w-0">
            <p className="panda-theme-toast-title">Pandachan is here</p>
            <p className="panda-theme-toast-text">Your study buddy is ready.</p>
          </div>
          <button type="button" onClick={onDismissReward} aria-label="Close notification">
            ×
          </button>
        </div>
      )}
    </>
  );
};

const getMascotState = (mood: PandaMascotMood) => {
  switch (mood) {
    case 'sleeping':
      return { prop: '☁️', message: "I'm still here.", hint: 'Ready when you are.' };
    case 'applauding':
      return { prop: '✨', message: 'Nice answer!', hint: 'Keep going.' };
    case 'encouraging':
      return { prop: '💚', message: "Let's try again.", hint: 'One step at a time.' };
    case 'celebrating':
      return { prop: '🏆', message: 'Session complete!', hint: 'Good work today.' };
    case 'dancing':
      return { prop: '🎶', message: 'Great streak!', hint: 'That one was clean.' };
    default:
      return { prop: '🎋', message: "I'm with you.", hint: 'One word, one card, one step.' };
  }
};
