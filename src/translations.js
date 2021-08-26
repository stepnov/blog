import i18n from 'i18next';
import {initReactI18next, Trans} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import React from "react";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "I am a Product Owner at Flatlogic.com. The company creates templates on top of Javascript technologies and help to integrate these dashboards into existing products. During 3 years we grow our customer base over the 70k users and have almost 100k monthly visitors on our website." : "I am a Product Owner at Flatlogic.com. The company creates templates on top of Javascript technologies and help to integrate these dashboards into existing products. During 3 years we grow our customer base over the 70k users and have almost 100k monthly visitors on our website.",
          "Previously I was a co-founder of Kuoll, an error analytics platform for e-commerce. Together with my partner, I went from MVP to the first paid users and increased the user base from 100 to more than 750, which included learning programming, product management, marketing and sales, user support." : "Previously I was a co-founder of Kuoll, an error analytics platform for e-commerce. Together with my partner, I went from MVP to the first paid users and increased the user base from 100 to more than 750, which included learning programming, product management, marketing and sales, user support.",
          "Before founding Kuoll I was an Audit Staff at Ernst & Young where I helped analyze data and business, perform general substantive audit procedures for Fortune 5000 companies." : "Before founding Kuoll I was an Audit Staff at Ernst & Young where I helped analyze data and business, perform general substantive audit procedures for Fortune 5000 companies.",
          "I was fortunate enough to be alumni of one of the largest startup accelerators in Nordic and Baltic states, Startup Sauna and Starta Accelerator in New York. Now, I am also receiving BA in Computer Science at University of London. I also love running, cycling, my wife Yuliya and daughter Sasha." : "I was fortunate enough to be alumni of one of the largest startup accelerators in Nordic and Baltic states, Startup Sauna and Starta Accelerator in New York. Now, I am also receiving BA in Computer Science at University of London. I also love running, cycling, my wife Yuliya and daughter Sasha."
        }
      },
      de: {
        translations: {
          "I am a Product Owner at Flatlogic.com. The company creates templates on top of Javascript technologies and help to integrate these dashboards into existing products. During 3 years we grow our customer base over the 70k users and have almost 100k monthly visitors on our website." : "Ich bin Product Owner bei Flatlogic.com. Das Unternehmen erstellt Vorlagen auf Javascript-Technologien und hilft bei der Integration dieser Dashboards in bestehende Produkte. Während 3 Jahren haben wir unseren Kundenstamm auf über 70.000 Benutzer erweitert und haben fast 100.000 monatliche Besucher auf unserer Website.",
          "Previously I was a co-founder of Kuoll, an error analytics platform for e-commerce. Together with my partner, I went from MVP to the first paid users and increased the user base from 100 to more than 750, which included learning programming, product management, marketing and sales, user support." : "Zuvor war ich Mitgründer von Kuoll, einer Fehleranalyseplattform für E-Commerce. Zusammen mit meinem Partner bin ich vom MVP zu den ersten kostenpflichtigen Nutzern aufgestiegen und habe die Nutzerbasis von 100 auf über 750 erhöht, was Lernprogrammierung, Produktmanagement, Marketing und Vertrieb, Nutzersupport beinhaltete.",
          "Before founding Kuoll I was an Audit Staff at Ernst & Young where I helped analyze data and business, perform general substantive audit procedures for Fortune 5000 companies." : "Vor der Gründung von Kuoll war ich als Audit Staff bei Ernst & Young tätig, wo ich bei der Analyse von Daten und Geschäften sowie bei der Durchführung allgemeiner substanzieller Auditverfahren für Fortune 5000-Unternehmen half.",
          "I was fortunate enough to be alumni of one of the largest startup accelerators in Nordic and Baltic states, Startup Sauna and Starta Accelerator in New York. Now, I am also receiving BA in Computer Science at University of London. I also love running, cycling, my wife Yuliya and daughter Sasha." : "Ich hatte das Glück, Alumni eines der größten Startup-Accelerators in den nordischen und baltischen Staaten zu sein, Startup Sauna und Starta Accelerator in New York. Jetzt erhalte ich auch einen BA in Informatik an der University of London. Außerdem liebe ich Laufen, Radfahren, meine Frau Yuliya und meine Tochter Sasha."
        }
      }
    },
    fallbackLng: 'en',
    debug: true,
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false, // we use content as keys
    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ','
    },
    react: {
      wait: true
    }
  });
export default i18n;