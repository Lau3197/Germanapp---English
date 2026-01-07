
import { ThemeContent, LanguageLevel } from '../../types.ts';

export const travailContent: ThemeContent = {
  words: [
    { article: 'die', german: 'Arbeit', french: 'Travail', plural: 'n/a', level: LanguageLevel.A1, subTheme: 'Bureau', example: 'Ich habe viel Arbeit.' },
    { article: 'der', german: 'Beruf', french: 'Métier / Profession', plural: 'Berufe', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Was bist du von Beruf?' },
    { article: 'der', german: 'Job', french: 'Job / Emploi', plural: 'Jobs', level: LanguageLevel.A1, subTheme: 'Métiers', example: 'Ein interessanter Job.' },
    { article: 'die', german: 'Firma', french: 'Entreprise', plural: 'Firmen', level: LanguageLevel.A2, subTheme: 'Bureau', example: 'Er arbeitet in einer großen Firma.' },
    { article: 'der', german: 'Chef', french: 'Chef / Patron', plural: 'Chefs', level: LanguageLevel.A1, subTheme: 'Bureau', example: 'Mein Chef ist sehr nett.' },
    { article: 'der', german: 'Kollege', french: 'Collègue', plural: 'Kollegen', level: LanguageLevel.A2, subTheme: 'Bureau', example: 'Ich mag meine Kollegen.' },
    { article: 'die', german: 'Bewerbung', french: 'Candidature', plural: 'Bewerbungen', level: LanguageLevel.B1, subTheme: 'Candidature', example: 'Eine Bewerbung schreiben.' },
    { article: 'das', german: 'Gehalt', french: 'Salaire', plural: 'Gehälter', level: LanguageLevel.B1, subTheme: 'Bureau', example: 'Ein faires Gehalt bekommen.' },
    { article: 'die', german: 'Überstunden', french: 'Heures supplémentaires', plural: 'n/a', level: LanguageLevel.B2, subTheme: 'Bureau', example: 'Heute muss ich Überstunden machen.' },
    { article: 'der', german: 'Vertrag', french: 'Contrat', plural: 'Verträge', level: LanguageLevel.B1, subTheme: 'Candidature', example: 'Den Arbeitsvertrag unterschreiben.' },
    { article: 'die', german: 'Erfahrung', french: 'Expérience', plural: 'Erfahrungen', level: LanguageLevel.B1, subTheme: 'Candidature', example: 'Er hat viel Erfahrung in diesem Bereich.' },
    { article: 'die', german: 'Besprechung', french: 'Réunion', plural: 'Besprechungen', level: LanguageLevel.B1, subTheme: 'Bureau', example: 'Wir haben gleich eine Besprechung.' },
    { article: 'das', german: 'Büro', french: 'Bureau (lieu)', plural: 'Büros', level: LanguageLevel.A1, subTheme: 'Bureau', example: 'Ins Büro gehen.' },
    { article: 'die', german: 'Kündigung', french: 'Démission / Licenciement', plural: 'Kündigungen', level: LanguageLevel.B2, subTheme: 'Candidature', example: 'Die Kündigung einreichen.' },
    { article: 'der', german: 'Feierabend', french: 'Fin de la journée de travail', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Bureau', example: 'Schönen Feierabend!' }
  ],
  phrases: [
    { german: 'Ich bewerbe mich um die Stelle als Projektleiter.', french: 'Je postule pour le poste de chef de projet.', context: 'Candidature' },
    { german: 'Ich verfüge über mehrjährige Berufserfahrung.', french: "Je dispose de plusieurs années d'expérience professionnelle.", context: 'Entretien' },
    { german: 'Könnten wir einen Termin für ein Vorstellungsgespräch vereinbaren?', french: "Pourrions-nous convenir d'un rendez-vous pour un entretien d'embauche ?", context: 'Candidature' },
    { german: 'Was sind Ihre Gehaltsvorstellungen?', french: 'Quelles sont vos prétentions salariales ?', context: 'Entretien' },
    { german: 'Ich arbeite derzeit hauptsächlich im Homeoffice.', french: 'Je travaille actuellement principalement en télétravail.', context: 'Bureau' },
    { german: 'Die Besprechung findet im Konferenzraum statt.', french: 'La réunion a lieu dans la salle de conférence.', context: 'Bureau' },
    { german: 'Er hat seine Kündigung zum Monatsende eingereicht.', french: 'Il a donné sa démission pour la fin du mois.', context: 'Carrière' },
    { german: 'Wir müssen die Deadline unbedingt einhalten.', french: 'Nous devons absolument respecter la date limite.', context: 'Travail' },
    { german: 'Ich bin für die Kundenbetreuung in Frankreich zuständig.', french: 'Je suis responsable du service client pour la France.', context: 'Bureau' },
    { german: 'Haben Sie den Arbeitsvertrag schon unterschrieben?', french: 'Avez-vous déjà signé le contrat de travail ?', context: 'Administration' },
    { german: 'Ich mache morgen einen Brückentag.', french: 'Je fais le pont demain.', context: 'Loisirs' },
    { german: 'Das Unternehmen bietet exzellente Aufstiegsmöglichkeiten.', french: "L'entreprise offre d'excellentes perspectives d'évolution.", context: 'Carrière' },
    { german: 'Ich fühle mich momentan durch die vielen Projekte überfordert.', french: 'Je me sens un peu débordé par les nombreux projets en ce moment.', context: 'Stress' },
    { german: 'Können Sie mir das Protokoll bitte per E-Mail schicken?', french: "Pouvez-vous m'envoyer le compte-rendu par e-mail s'il vous plaît ?", context: 'Bureau' },
    { german: 'Anbei erhalten Sie meinen aktuellen Lebenslauf.', french: 'Vous trouverez ci-joint mon CV actualisé.', context: 'Candidature' },
    { german: 'Wie hoch ist das Einstiegsgehalt in dieser Branche?', french: "À combien s'élève le salaire de départ dans ce secteur ?", context: 'Entretien' },
    { german: 'Ich freue mich auf eine gute Zusammenarbeit.', french: "Je me réjouis d'une bonne collaboration.", context: 'Social' },
    { german: 'Darf ich Sie kurz stören?', french: 'Puis-je vous déranger un instant ?', context: 'Social' },
    { german: 'Ich leite Ihre Nachricht an die zuständige Abteilung weiter.', french: 'Je transmets votre message au département concerné.', context: 'Bureau' },
    { german: 'In unserer Firma herrscht ein sehr angenehmes Arbeitsklima.', french: 'Il règne une ambiance de travail très agréable dans notre entreprise.', context: 'Culture' }
  ]
};
