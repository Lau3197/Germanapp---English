import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

export type PandaMascotMood = 'study' | 'sleeping' | 'applauding' | 'encouraging' | 'celebrating' | 'dancing';

interface PandaMascotContextValue {
  mood: PandaMascotMood;
  bambooCount: number;
  bambooRank: string;
  bambooNextGoal: number;
  awardBamboo: (amount?: number) => void;
  triggerMood: (mood: Exclude<PandaMascotMood, 'study' | 'sleeping'>, durationMs?: number) => void;
}

const PandaMascotContext = createContext<PandaMascotContextValue | null>(null);

const IDLE_DELAY_MS = 18000;
export const PandaMascotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mood, setMood] = useState<PandaMascotMood>('study');
  const bambooCount = 0;
  const transientRef = useRef(false);
  const transientTimerRef = useRef<number | null>(null);
  const idleTimerRef = useRef<number | null>(null);
  const bambooProgress = getBambooProgress(bambooCount);

  const clearTimer = (timerRef: React.MutableRefObject<number | null>) => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const scheduleIdle = useCallback(() => {
    clearTimer(idleTimerRef);

    idleTimerRef.current = window.setTimeout(() => {
      if (!transientRef.current) {
        setMood('sleeping');
      }
    }, IDLE_DELAY_MS);
  }, []);

  const markActivity = useCallback(() => {
    if (transientRef.current) {
      return;
    }

    setMood('study');
    scheduleIdle();
  }, [scheduleIdle]);

  const triggerMood = useCallback<PandaMascotContextValue['triggerMood']>((nextMood, durationMs = 2400) => {
    clearTimer(transientTimerRef);
    clearTimer(idleTimerRef);

    transientRef.current = true;
    setMood(nextMood);

    transientTimerRef.current = window.setTimeout(() => {
      transientRef.current = false;
      setMood('study');
      scheduleIdle();
    }, durationMs);
  }, [scheduleIdle]);

  const awardBamboo = useCallback<PandaMascotContextValue['awardBamboo']>(() => {
    // Kept as a no-op so older exercise components can still call the mascot API.
  }, []);

  useEffect(() => {
    const activityEvents: (keyof WindowEventMap)[] = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'];

    activityEvents.forEach(eventName => {
      window.addEventListener(eventName, markActivity, { passive: true });
    });
    scheduleIdle();

    return () => {
      activityEvents.forEach(eventName => {
        window.removeEventListener(eventName, markActivity);
      });
      clearTimer(transientTimerRef);
      clearTimer(idleTimerRef);
    };
  }, [markActivity, scheduleIdle]);

  return (
    <PandaMascotContext.Provider
      value={{
        mood,
        bambooCount,
        bambooRank: bambooProgress.rank,
        bambooNextGoal: bambooProgress.nextGoal,
        awardBamboo,
        triggerMood
      }}
    >
      {children}
    </PandaMascotContext.Provider>
  );
};

const getBambooProgress = (count: number) => {
  if (count >= 100) {
    return { rank: 'Master panda', nextGoal: 100 };
  }

  if (count >= 50) {
    return { rank: 'Grove guardian', nextGoal: 100 };
  }

  if (count >= 25) {
    return { rank: 'Word collector', nextGoal: 50 };
  }

  if (count >= 10) {
    return { rank: 'Panda friend', nextGoal: 25 };
  }

  return { rank: 'Ready', nextGoal: 10 };
};

export const usePandaMascot = () => {
  const context = useContext(PandaMascotContext);

  if (!context) {
    throw new Error('usePandaMascot must be used inside PandaMascotProvider');
  }

  return context;
};
