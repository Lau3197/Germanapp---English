
import { GrammarSection } from '../../../types.ts';

export const passivDetailsB2: GrammarSection = {
  title: "2. The Passive (Passiv)",
  topics: [
    {
      id: "b2-2-1",
      title: "2.1 The Logic: Process and Result",
      content: "German distinguishes two types of passive where English often uses similar wording.\n\n### Vorgangspassiv (process passive)\nIt describes the action while it is happening. Use **werden**.\n• *Ex:* Der Brief **wird** geschrieben. (The letter is being written.)\n\n### Zustandspassiv (state passive)\nIt describes the final result, the state after the action is complete. Use **sein**.\n• *Ex:* Der Brief **ist** geschrieben. (The letter is written/finished.)",
      examples: [
        { de: "Die Tür **wird** geschlossen.", fr: "The door is being closed.", note: "Process passive." },
        { de: "Die Tür **ist** geschlossen.", fr: "The door is closed.", note: "State passive." }
      ]
    },
    {
      id: "b2-2-2",
      title: "2.2 The State Passive in All Tenses",
      content: "The state passive is conjugated with the auxiliary **sein**.\n\n| Tense | Structure | Example |\n|---|---|---|\n| **Present** | ist + P.II | Die Arbeit **ist** getan. |\n| **Präteritum** | war + P.II | Die Arbeit **war** getan. |\n| **Future I** | wird... sein + P.II | Die Arbeit **wird** getan **sein**. |\n| **Perfekt** | ist... gewesen + P.II | Die Arbeit **ist** getan **gewesen** (rare). |\n\n**Note**: The present and Präteritum are used almost exclusively.",
      examples: [
        { de: "Morgen wird alles **erledigt sein**.", fr: "Tomorrow, everything will be settled.", note: "Future of the state passive." }
      ]
    },
    {
      id: "b2-2-3",
      title: "2.3 Which Verbs Can Be Used?",
      content: "You cannot create a state passive with every verb.\n\n### Conditions:\n1. The verb must be **transitive** (have a direct object).\n2. The action must lead to a **lasting change of state**.\n\n• **Allowed verbs**: öffnen, schließen, reparieren, kochen, verletzen.\n• **Impossible verbs**:\n  - *Intransitives*: gehen, schlafen.\n  - *No final state*: helfen, bewundern, schlagen.",
      examples: [
        { de: "Er **ist verletzt**.", fr: "He is injured.", note: "Correct." },
        { de: "Mir ist geholfen. ❌", fr: "I have been helped. ❌", note: "Incorrect. Say: 'Mir wurde geholfen' (action)." }
      ]
    },
    {
      id: "b2-2-4",
      title: "2.4 Avoiding Confusion",
      content: "The trap is confusion with the **active Perfekt**.\n\n• **Active**: *Ich bin gegangen*. (I went / I have gone.) I am the one doing the action.\n• **State passive**: *Die Tür ist geöffnet*. (The door is open.) The door undergoes the action.\n\n**Tip**: If the subject is an inanimate object, it is almost always a state passive.",
      examples: [
        { de: "Der Kuchen **ist** schon **gebacken**.", fr: "The cake is already baked.", note: "State passive (result)." }
      ]
    }
  ]
};
