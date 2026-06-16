
import { GrammarSection } from '../../../types';

// Export only the topic so it can be integrated into a larger section.
export const konjunktivISubstitutionTopic = {
  id: "b2-ki-substitution",
  title: "The Trap: The Substitution Rule (Ersatzregel)",
  content: "This is the survival rule of indirect speech. German requires the listener to see or hear the difference between a fact and reported speech.\n\n### I. The Problem: Identical Forms\nIf you say: *Ich gehe nach Hause*.\n• In the indicative (fact): ich gehe.\n• In Konjunktiv I (reported): ich gehe.\nThe listener cannot tell that you are reporting someone else's words. Neutrality is lost.\n\n### II. Golden Rule: If KI = Indicative -> Substitution\nYou cannot use an ambiguous form. German then triggers a step-by-step backup system:\n\n**Step 1: Is the KI form distinct?**\n• *Example:* Er sagt, er **habe** Zeit. (Distinct from 'er hat'.)\n• **Action:** Use KI. No substitution is necessary.\n\n**Step 2: Is the KI form identical? Move to Konjunktiv II (simple form)**\n• *Example:* Sie sagen, sie haben Zeit. (Identical to the indicative.)\n• **Action:** Use simple KII: Sie sagen, sie **hätten** Zeit.\n\n**Step 3: Is simple KII identical to the Präteritum? Move to 'würde'**\nFor regular verbs, simple KII (machte) looks like the past (machte). To avoid sounding as if you mean the past, use 'würde'.\n• *Example:* Er sagt, sie lernen. (KI=indicative). KII substitution -> lernten (KII=Präteritum).\n• **Action:** Use 'würde': Er sagt, sie **würden lernen**.\n\n### III. Quick Decision Table\n\n| Person | KI Form | Indicative Form | Verdict | Backup Form |\n|---|---|---|---|---|\n| ich | mache | mache | **Identical** | ich **würde machen** |\n| du | machest | machst | Distinct | du machest |\n| er/sie/es | **mache** | macht | **DISTINCT** | **er mache** |\n| wir | machen | machen | **Identical** | wir **würden machen** |\n| ihr | machet | macht | Distinct | ihr machet |\n| sie | machen | machen | **Identical** | sie **würden machen** |",
  examples: [
    { de: "Er sagt, er **habe** keine Lust.", fr: "He says he does not feel like it.", note: "3rd person singular: KI is almost always distinct; this is the 'pure' form." },
    { de: "Sie sagen, sie **hätten** keine Zeit.", fr: "They say they have no time.", note: "Substitution with simple KII because 'haben' in KI is identical to the indicative." },
    { de: "Der Lehrer meint, wir **würden** zu viel **lachen**.", fr: "The teacher thinks we laugh too much.", note: "Substitution with 'würde' because 'lachten' in KII looks too much like the Präteritum." }
  ]
};
