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
const PANDA_ANIMATION_STORAGE_KEY = 'deutschmeister-panda-animation';
const BUDDY_VIEWPORT_MARGIN = 12;
const MOBILE_BUDDY_MEDIA_QUERY = '(max-width: 640px)';

type PandaAnimationChoice = 'auto' | PandaMascotMood;

const PANDA_ANIMATION_OPTIONS: { value: PandaAnimationChoice; label: string; icon: string }[] = [
  { value: 'auto', label: 'Automatique', icon: '✨' },
  { value: 'study', label: 'Mange', icon: '🎋' },
  { value: 'sleeping', label: 'Dort', icon: '💤' },
  { value: 'applauding', label: 'Applaudit', icon: '👏' },
  { value: 'encouraging', label: 'Encourage', icon: '💚' },
  { value: 'celebrating', label: 'Célèbre', icon: '⭐' },
  { value: 'dancing', label: 'Danse', icon: '🎶' }
];

const loadFrames = (modules: Record<string, string>, prefix: string) => Object.keys(modules)
  .filter(path => new RegExp(`/${prefix}-\\d{2}\\.png$`).test(path))
  .sort()
  .map(path => modules[path]);

const EATING_FRAMES = loadFrames(import.meta.glob('../assets/panda/frames/eating-*.png', {
  eager: true,
  query: '?url',
  import: 'default'
}), 'eating');

const SLEEPING_FRAMES = loadFrames(import.meta.glob('../assets/panda/frames/sleeping-*.png', {
  eager: true,
  query: '?url',
  import: 'default'
}), 'sleeping');

const APPLAUDING_FRAMES = loadFrames(import.meta.glob('../assets/panda/frames/applauding-*.png', {
  eager: true,
  query: '?url',
  import: 'default'
}), 'applauding');

const ENCOURAGING_FRAMES = loadFrames(import.meta.glob('../assets/panda/frames/encouraging-*.png', {
  eager: true,
  query: '?url',
  import: 'default'
}), 'encouraging');

const CELEBRATING_FRAMES = loadFrames(import.meta.glob('../assets/panda/frames/celebrating-*.png', {
  eager: true,
  query: '?url',
  import: 'default'
}), 'celebrating');

const DANCING_FRAMES = loadFrames(import.meta.glob('../assets/panda/frames/dancing-*.png', {
  eager: true,
  query: '?url',
  import: 'default'
}), 'dancing');

const SLEEPING_FRAME_SEQUENCE = [0, 1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7] as const;

const MOOD_ANIMATIONS: Record<PandaMascotMood, { frames: string[]; sequence?: readonly number[]; duration: number }> = {
  study: { frames: EATING_FRAMES, duration: 1040 },
  sleeping: { frames: SLEEPING_FRAMES, sequence: SLEEPING_FRAME_SEQUENCE, duration: 840 },
  applauding: { frames: APPLAUDING_FRAMES, duration: 380 },
  encouraging: { frames: ENCOURAGING_FRAMES, duration: 520 },
  celebrating: { frames: CELEBRATING_FRAMES, duration: 440 },
  dancing: { frames: DANCING_FRAMES, duration: 360 }
};

const defaultBuddyOffset: BuddyOffset = { x: 0, y: 0 };

const readStoredAnimation = (): PandaAnimationChoice => {
  if (typeof window === 'undefined') {
    return 'auto';
  }

  const storedAnimation = window.localStorage.getItem(PANDA_ANIMATION_STORAGE_KEY);
  return PANDA_ANIMATION_OPTIONS.some(option => option.value === storedAnimation)
    ? storedAnimation as PandaAnimationChoice
    : 'auto';
};

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
  const { mood, isMascotHidden, setMascotHidden } = usePandaMascot();
  const [animationChoice, setAnimationChoice] = useState<PandaAnimationChoice>(readStoredAnimation);
  const [isAnimationMenuOpen, setIsAnimationMenuOpen] = useState(false);
  const effectiveMood = animationChoice === 'auto' ? mood : animationChoice;
  const mascot = getMascotState(effectiveMood);
  const [frameIndex, setFrameIndex] = useState(0);
  const buddyRef = useRef<HTMLDivElement | null>(null);
  const animationMenuRef = useRef<HTMLDivElement | null>(null);
  const dragStateRef = useRef<BuddyDragState | null>(null);
  const [buddyOffset, setBuddyOffset] = useState<BuddyOffset>(readStoredBuddyOffset);
  const [isDragging, setIsDragging] = useState(false);

  const animation = MOOD_ANIMATIONS[effectiveMood];
  const sequenceLength = animation.sequence?.length ?? animation.frames.length;
  const sequenceFrame = animation.sequence?.[frameIndex % sequenceLength] ?? frameIndex % animation.frames.length;
  const spriteSource = animation.frames[sequenceFrame] ?? animation.frames[0];

  // Decode every frame up front, otherwise the first loop stutters as each new
  // frame is fetched on the swap.
  useEffect(() => {
    Object.values(MOOD_ANIMATIONS).flatMap(value => value.frames).forEach(source => {
      const image = new Image();
      image.src = source;
    });
  }, []);

  useEffect(() => {
    setFrameIndex(0);
    const frameTimer = window.setInterval(
      () => setFrameIndex(currentIndex => (currentIndex + 1) % sequenceLength),
      animation.duration
    );

    return () => window.clearInterval(frameTimer);
  }, [effectiveMood, animation.duration, sequenceLength]);

  useEffect(() => {
    window.localStorage.setItem(PANDA_ANIMATION_STORAGE_KEY, animationChoice);
  }, [animationChoice]);

  useEffect(() => {
    if (!isAnimationMenuOpen) {
      return;
    }

    const closeMenu = (event: PointerEvent) => {
      if (!animationMenuRef.current?.contains(event.target as Node)) {
        setIsAnimationMenuOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsAnimationMenuOpen(false);
      }
    };

    window.addEventListener('pointerdown', closeMenu);
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      window.removeEventListener('pointerdown', closeMenu);
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isAnimationMenuOpen]);

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
  }, [isMascotHidden]);

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

      {isMascotHidden ? (
        <button
          type="button"
          className="mascot-show-button"
          onClick={() => setMascotHidden(false)}
          aria-label="Afficher Pandachan"
          title="Afficher Pandachan"
        >
          🐼
        </button>
      ) : (
      <div
        ref={buddyRef}
        className={`panda-study-buddy panda-study-buddy-${effectiveMood}${isDragging ? ' is-dragging' : ''}`}
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
        <button
          type="button"
          className="mascot-hide-button"
          onPointerDown={event => event.stopPropagation()}
          onKeyDown={event => event.stopPropagation()}
          onClick={() => {
            setIsAnimationMenuOpen(false);
            setMascotHidden(true);
          }}
          aria-label="Masquer Pandachan"
          title="Masquer Pandachan"
        >
          ×
        </button>
        <div className="panda-study-buddy-glow" />
        <div
          className="panda-study-buddy-character panda-study-buddy-sprite"
          aria-hidden="true"
        >
          <img
            src={spriteSource}
            alt=""
            draggable={false}
          />
        </div>
        <div className="panda-study-buddy-panel">
          <div className="panda-study-buddy-bubble">
            <span>Pandachan is with you</span>
            <strong>{mascot.message}</strong>
            <em>{mascot.hint}</em>
          </div>
          <div
            ref={animationMenuRef}
            className="panda-animation-picker"
            onPointerDown={event => event.stopPropagation()}
            onKeyDown={event => event.stopPropagation()}
          >
            <button
              type="button"
              className="panda-animation-picker-trigger"
              aria-expanded={isAnimationMenuOpen}
              aria-haspopup="menu"
              onClick={() => setIsAnimationMenuOpen(isOpen => !isOpen)}
            >
              <span aria-hidden="true">🎬</span>
              Animation
              <span aria-hidden="true">{isAnimationMenuOpen ? '▴' : '▾'}</span>
            </button>
            {isAnimationMenuOpen && (
              <div className="panda-animation-picker-menu" role="menu" aria-label="Choisir l'animation du panda">
                {PANDA_ANIMATION_OPTIONS.map(option => (
                  <button
                    key={option.value}
                    type="button"
                    role="menuitemradio"
                    aria-checked={animationChoice === option.value}
                    className={animationChoice === option.value ? 'is-selected' : ''}
                    onClick={() => {
                      setAnimationChoice(option.value);
                      setIsAnimationMenuOpen(false);
                    }}
                  >
                    <span aria-hidden="true">{option.icon}</span>
                    {option.label}
                    {animationChoice === option.value && <span aria-hidden="true">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      )}

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
