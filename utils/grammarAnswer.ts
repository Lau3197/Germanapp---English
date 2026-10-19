import { GrammarExercise } from '../types';

export const normalizeGrammarAnswer = (value: string) => value
  .trim()
  .toLocaleLowerCase('de-DE')
  .replace(/[.!?]+$/g, '')
  .replace(/\s+/g, ' ');

const promptTemplate = (prompt: string) => {
  const parts = prompt.split(': ');
  const partWithBlank = [...parts].reverse().find(part => part.includes('___'));
  return (partWithBlank || prompt)
    .replace(/\s*\([^)]*\)\s*$/g, '')
    .trim();
};

const completedPromptAnswers = (exercise: GrammarExercise) => {
  const template = promptTemplate(exercise.prompt);
  const blankCount = (template.match(/___/g) || []).length;
  if (!blankCount) return [];

  const answers = [exercise.answer, ...(exercise.acceptedAnswers || [])];
  return answers.flatMap(answer => {
    if (blankCount === 1) return [template.replace('___', answer)];

    const parts = answer.split(/\s*,\s*|\s+/).filter(Boolean);
    if (parts.length !== blankCount) return [];
    let partIndex = 0;
    return [template.replace(/___/g, () => parts[partIndex++])];
  });
};

export const isGrammarAnswerCorrect = (exercise: GrammarExercise, value: string) => {
  const accepted = [
    exercise.answer,
    ...(exercise.acceptedAnswers || []),
    ...completedPromptAnswers(exercise),
  ].map(normalizeGrammarAnswer);

  return accepted.includes(normalizeGrammarAnswer(value));
};
