import { GrammarSection } from '../../../types';

export const zustandspassivB2: GrammarSection = {
  title: "2. The State Passive (Zustandspassiv)",
  topics: [
    {
      id: "b2-s1-t2-detailed",
      title: "Mastering the Zustandspassiv",
      content: "The state passive describes a **result** or **final state**. Unlike the process passive, it no longer focuses on 'who does what' or 'how it happens', but on the situation after the action is complete.\n\n### I. The Logic: Action vs State\nThis is a fundamental distinction in German that English can sometimes blur.\n\n| Type of Passive | Auxiliary | Focus | Example |\n|---|---|---|---|\n| **Vorgangspassiv** | **werden** | The process, the action in progress | Die Tür **wird** geschlossen. (The door is being closed.) |\n| **Zustandspassiv** | **sein** | The result, the state after the action | Die Tür **ist** geschlossen. (The door is closed.) |\n\n### II. Formation and Tenses\nThe structure is simple: **sein** (conjugated) + **Partizip II** (at the end).\n\n| Tense | Structure | Example |\n|---|---|---|\n| **Präsens** | ist + P.II | Das Geschäft **ist** geöffnet. (The shop is open.) |\n| **Präteritum** | war + P.II | Das Geschäft **war** geöffnet. (The shop was open.) |\n| **Future I** | wird... sein + P.II | Das Geschäft **wird** geöffnet **sein**. (It will be open.) |\n| **Konjunktiv II** | wäre + P.II | Wenn es geöffnet **wäre**... (If it were open...) |\n\n*Note: The Perfekt (ist gewesen) exists but is extremely rare; German almost always prefers the Präteritum (war).*\n\n### III. Compatible Verbs\nNot every verb can form a state passive. The action must be **transitive** and leave a **lasting trace**.\n• **YES**: schließen (to close), reparieren (to repair), kochen (to cook), schreiben (to write).\n• **NO**: helfen (to help), schlagen (to hit - no fixed final state), tanzen (to dance).\n\n### IV. Classic Learner Mistakes\n\n**1. Confusion with active Perfekt**\nThis is the number-one trap. Verbs of movement use 'sein' in the active Perfekt.\n• *Active*: **Ich bin gegangen** (I went / I have gone - I am the one moving).\n• *State passive*: **Die Tür ist geschlossen** (The door is closed - it undergoes the action).\n**Tip**: If the subject is inanimate, it is almost always a state passive.\n\n**2. Missing the 'in progress' nuance**\nIn English, 'The letter is written' can sometimes be ambiguous. In German, **ist** means it is **finished**.\n• If the action is currently happening, use **wird**.\n\n**3. Trying to add an agent (von...)**\nSince the state passive describes a result, the author of the action is no longer relevant. You almost never say 'Das Fenster ist von mir geöffnet'. Say 'Das Fenster ist geöffnet' or 'Ich habe das Fenster geöffnet'.",
      examples: [
        { de: "Das Essen **ist** schon **gekocht**.", fr: "The meal is already cooked.", note: "It is ready; we can eat. Final state." },
        { de: "Der Computer **war** gestern **repariert**.", fr: "The computer was repaired yesterday.", note: "We describe the object's state at a moment in the past." },
        { de: "Die Briefe **sind** bereits **geschrieben**.", fr: "The letters are already written.", note: "The action of writing is complete." }
      ]
    }
  ]
};
