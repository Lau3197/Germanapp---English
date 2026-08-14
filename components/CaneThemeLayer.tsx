import React, { useEffect, useState } from 'react';
import { PandaMascotMood, usePandaMascot } from '../contexts/PandaMascotContext';
import tennisBallUrl from '../assets/cane/tennis-ball.png';

const loadFrames = (modules: Record<string, string>) => Object.keys(modules)
  .sort()
  .map(path => modules[path]);

const STUDY_FRAMES = loadFrames(import.meta.glob('../assets/cane/frames/study/*.png', {
  eager: true, query: '?url', import: 'default'
}));
const SLEEPING_FRAMES = loadFrames(import.meta.glob('../assets/cane/frames/sleeping/*.png', {
  eager: true, query: '?url', import: 'default'
}));
const ENCOURAGING_DENSE_FRAMES = loadFrames(import.meta.glob('../assets/cane/frames/encouraging-dense/*.png', {
  eager: true, query: '?url', import: 'default'
}));
const APPLAUDING_FRAMES = loadFrames(import.meta.glob('../assets/cane/frames/applauding/*.png', {
  eager: true, query: '?url', import: 'default'
}));
const CELEBRATING_DENSE_FRAMES = loadFrames(import.meta.glob('../assets/cane/frames/celebrating-dense/*.png', {
  eager: true, query: '?url', import: 'default'
}));

interface CaneAnimation {
  frames: string[];
  duration: number;
  label: string;
}

const MOOD_ANIMATIONS: Record<PandaMascotMood, CaneAnimation> = {
  study: { frames: STUDY_FRAMES, duration: 2560, label: 'Adolfino is studying with you' },
  sleeping: { frames: SLEEPING_FRAMES, duration: 4480, label: 'Adolfino is resting' },
  encouraging: { frames: ENCOURAGING_DENSE_FRAMES, duration: 1440, label: 'Adolfino encourages another try' },
  applauding: { frames: APPLAUDING_FRAMES, duration: 1520, label: 'Adolfino applauds the correct answer' },
  celebrating: { frames: CELEBRATING_DENSE_FRAMES, duration: 1440, label: 'Adolfino celebrates with his ball' },
  dancing: { frames: CELEBRATING_DENSE_FRAMES, duration: 1080, label: 'Adolfino celebrates the streak with his ball' }
};

export const CaneThemeLayer: React.FC = () => {
  const { mood, moodRevision } = usePandaMascot();
  const [selectedMood, setSelectedMood] = useState<PandaMascotMood | 'auto'>('auto');
  const activeMood = selectedMood === 'auto' ? mood : selectedMood;
  const animation = MOOD_ANIMATIONS[activeMood];
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    animation.frames.forEach(source => {
      const image = new Image();
      image.src = source;
    });
  }, [animation, moodRevision]);

  useEffect(() => {
    setFrameIndex(0);
    if (animation.frames.length < 2) return;

    const timer = window.setInterval(() => {
      setFrameIndex(current => (current + 1) % animation.frames.length);
    }, animation.duration);

    return () => window.clearInterval(timer);
  }, [animation, moodRevision]);

  useEffect(() => {
    if (selectedMood !== 'auto') {
      setSelectedMood('auto');
    }
  }, [moodRevision]);

  const frameSource = animation.frames[frameIndex] ?? animation.frames[0] ?? STUDY_FRAMES[0];

  return (
    <div className="cane-theme-layer">
      <div className="cane-background-pattern" aria-hidden="true">
        <img className="cane-background-motif cane-motif-ball cane-motif-one" src={tennisBallUrl} alt="" />
        <span className="cane-background-motif cane-motif-paw cane-motif-two">🐾</span>
        <span className="cane-background-motif cane-motif-bone cane-motif-three">🦴</span>
        <img className="cane-background-motif cane-motif-ball cane-motif-four" src={tennisBallUrl} alt="" />
        <span className="cane-background-motif cane-motif-paw cane-motif-five">🐾</span>
        <span className="cane-background-motif cane-motif-bone cane-motif-six">🦴</span>
      </div>
      <label className="cane-animation-picker">
        <span className="sr-only">Choisir l’animation d’Adolfino</span>
        <select
          value={selectedMood}
          onChange={event => setSelectedMood(event.target.value as PandaMascotMood | 'auto')}
          aria-label="Choisir l’animation d’Adolfino"
        >
          <option value="auto">Automatique</option>
          <option value="study">Étude</option>
          <option value="sleeping">Sommeil</option>
          <option value="encouraging">Patte levée</option>
          <option value="applauding">Applaudissements</option>
          <option value="celebrating">Jeu avec la balle</option>
          <option value="dancing">Balle rapide</option>
        </select>
      </label>
      <div className="cane-study-buddy-name">Adolfino</div>
      <div className={`cane-study-buddy cane-study-buddy-${activeMood}`} title={animation.label}>
        <img
          className="cane-study-buddy-frame"
          src={frameSource}
          alt=""
          draggable={false}
          onError={event => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = STUDY_FRAMES[0];
          }}
        />
      </div>
    </div>
  );
};
