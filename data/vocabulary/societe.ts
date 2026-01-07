
import { ThemeContent, LanguageLevel } from '../../types.ts';

export const societeContent: ThemeContent = {
  words: [
    { article: 'die', german: 'Gesellschaft', french: 'Société', plural: 'Gesellschaften', level: LanguageLevel.B1, subTheme: 'Politique', example: 'Eine moderne Gesellschaft.' },
    { article: 'die', german: 'Politik', french: 'Politique', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Politique', example: 'Sich für Politik interessieren.' },
    { article: 'das', german: 'Recht', french: 'Droit', plural: 'Rechte', level: LanguageLevel.B1, subTheme: 'Droit', example: 'Jeder Mensch hat Rechte.' },
    { article: 'das', german: 'Gesetz', french: 'Loi', plural: 'Gesetze', level: LanguageLevel.B1, subTheme: 'Droit', example: 'Ein neues Gesetz verabschieden.' },
    { article: 'die', german: 'Wirtschaft', french: 'Économie', plural: 'n/a', level: LanguageLevel.B2, subTheme: 'Économie', example: 'Die deutsche Wirtschaft ist stark.' },
    { article: 'der', german: 'Staat', french: 'État', plural: 'Staaten', level: LanguageLevel.B1, subTheme: 'Politique', example: 'Die Aufgaben des Staates.' },
    { article: 'die', german: 'Demokratie', french: 'Démocratie', plural: 'Demokratien', level: LanguageLevel.B1, subTheme: 'Politique', example: 'In einer Demokratie leben.' },
    { article: 'die', german: 'Wahl', french: 'Élection / Choix', plural: 'Wahlen', level: LanguageLevel.B1, subTheme: 'Politique', example: 'Zur Wahl gehen.' },
    { article: 'die', german: 'Freiheit', french: 'Liberté', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Politique', example: 'Freiheit der Presse.' },
    { article: 'die', german: 'Gerechtigkeit', french: 'Justice', plural: 'n/a', level: LanguageLevel.B2, subTheme: 'Droit', example: 'Für Gerechtigkeit kämpfen.' },
    { article: 'der', german: 'Bürger', french: 'Citoyen', plural: 'Bürger', level: LanguageLevel.B1, subTheme: 'Politique', example: 'Die Rechte der Bürger.' },
    { article: 'die', german: 'Steuer', french: 'Taxe / Impôt', plural: 'Steuern', level: LanguageLevel.B1, subTheme: 'Économie', example: 'Steuern zahlen.' },
    { article: 'der', german: 'Krieg', french: 'Guerre', plural: 'Kriege', level: LanguageLevel.B1, subTheme: 'Politique', example: 'Keinen Krieg mehr.' },
    { article: 'der', german: 'Frieden', french: 'Paix', plural: 'n/a', level: LanguageLevel.B1, subTheme: 'Politique', example: 'Wir wünschen uns Frieden.' },
    { article: 'die', german: 'Sicherheit', french: 'Sécurité', plural: 'n/a', level: LanguageLevel.A2, subTheme: 'Politique', example: 'Die Sicherheit im Land.' }
  ],
  phrases: [
    { german: 'Jede Stimme zählt.', french: 'Chaque voix compte.', context: 'Élections' },
    { german: 'Gleichberechtigung für alle.', french: 'Égalité des droits pour tous.', context: 'Société' },
    { german: 'Die öffentliche Meinung ist gespalten.', french: "L'opinion publique est divisée.", context: 'Politique' },
    { german: 'Wir müssen die Menschenrechte schützen.', french: 'Nous devons protéger les droits de l\'homme.', context: 'Droit' },
    { german: 'Der Klimawandel ist eine globale Herausforderung.', french: 'Le changement climatique est un défi mondial.', context: 'Société' },
    { german: 'Die Arbeitslosenquote ist in diesem Jahr gesunken.', french: 'Le taux de chômage a baissé cette année.', context: 'Économie' },
    { german: 'Meinungsfreiheit ist die Grundlage jeder Demokratie.', french: 'La liberté d\'opinion est la base de toute démocratie.', context: 'Droit' },
    { german: 'Die Regierung hat neue Reformen angekündigt.', french: 'Le gouvernement a annoncé de nouvelles réformes.', context: 'Politique' },
    { german: 'Es gibt eine breite Debatte über dieses Thema.', french: 'Il y a un large débat sur ce sujet.', context: 'Société' },
    { german: 'Wir leben in einem modernen Rechtsstaat.', french: 'Nous vivons dans un État de droit moderne.', context: 'Droit' },
    { german: 'Die Schere zwischen Arm und Reich geht weiter auf.', french: 'L\'écart entre les riches et les pauvres se creuse davantage.', context: 'Économie' },
    { german: 'Frieden ist die wichtigste Voraussetzung für Wohlstand.', french: 'La paix est la condition la plus importante pour la prospérité.', context: 'Politique' },
    // 10 Nouvelles phrases
    { german: 'Die Pressefreiheit muss unter allen Umständen gewahrt bleiben.', french: 'La liberté de la presse doit être préservée en toutes circonstances.', context: 'Politique' },
    { german: 'Bürgerschaftliches Engagement ist das Herzstück unserer Gemeinde.', french: "L'engagement citoyen est le cœur de notre communauté.", context: 'Société' },
    { german: 'Steuerhinterziehung schadet dem Allgemeinwohl massiv.', french: "L'évasion fiscale nuit massivement au bien commun.", context: 'Économie' },
    { german: 'Wir müssen den sozialen Zusammenhalt in Europa fördern.', french: "Nous devons favoriser la cohésion sociale en Europe.", context: 'Politique' },
    { german: 'Die Trennung von Kirche und Staat ist ein Grundpfeiler der Republik.', french: "La séparation de l'Église et de l'État est un pilier de la république.", context: 'Droit' },
    { german: 'Korruption untergräbt das Vertrauen in staatliche Institutionen.', french: "La corruption mine la confiance dans les institutions étatiques.", context: 'Politique' },
    { german: 'Migration und Integration sind die zentralen Themen unserer Zeit.', french: "La migration et l'intégration sont les thèmes centraux de notre époque.", context: 'Société' },
    { german: 'Der Generationenvertrag sichert die Renten der Zukunft.', french: "Le pacte intergénérationnel garantit les retraites du futur.", context: 'Économie' },
    { german: 'Öffentliche Debatten sind notwendig, um einen Konsens zu finden.', french: "Les débats publics sont nécessaires pour trouver un consensus.", context: 'Société' },
    { german: 'Die Gewaltenteilung schützt die Bürger vor Machtmissbrauch.', french: "La séparation des pouvoirs protège les citoyens contre l'abus de pouvoir.", context: 'Droit' }
  ]
};
