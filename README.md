Det kan hende at oppdateringer ikke vises på github på endringene jeg gjorde i koden min fordi jeg trodde jeg lastet ned git fullstendig på pc når jeg faktisk ikke gjorde det, og jeg måtte installere den riktig etter at jeg allerede var ferdig med å lage appen min.

Quiz App - Teknisk Dokumentasjon

Dette er en interaktiv og brukervennlig quiz-applikasjon med flervalgsspørsmål og bilder, bygget med React. Applikasjonen er designet for å være estetisk tiltalende, spesielt med et søtt tema, samtidig som den demonstrerer grunnleggende ferdigheter innen tilstandshåndtering, betinget rendering og bruk av eksterne biblioteker.

Teknologier brukt

React: Rammeverk for brukergrensesnitt

CSS: For styling av komponentene

React Hooks (useState): For tilstandshåndtering

React Router (hvis implementert senere): For navigasjon mellom skjermbilder

Emojis og bilder: Brukes for å gjøre quiz-opplevelsen mer engasjerende

Prosjektstruktur

react2/
├── my-app/
│   ├── node_modules/ (NPM-pakker og avhengigheter)
│   ├── public/
│   │   ├── images/ (Bilder brukt i quizen)
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── manifest.json
│   │   ├── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── quiz.js (Hovedkomponent for quiz-logikken)
│   │   │   ├── quiz.css (Spesifikk styling for quiz-komponenten)
│   │   ├── App.js (Rotkomponent for applikasjonen)
│   │   ├── App.css (styling for hele applikasjonen)
│   │   ├── index.js (Oppstart av applikasjonen)
│   │   ├── index.css (Stil for grunnleggende layout)
│   │   ├── reportWebVitals.js
│   │   ├── setupTests.js
│   ├── .gitignore (Ignorerte filer for Git-repoet)
│   ├── package.json (Prosjektavhengigheter og scripts)
│   ├── package-lock.json (Låst versjon av avhengigheter)
│   ├── README.md (Teknisk dokumentasjon)

Installasjon og kjøring

For å kjøre prosjektet lokalt:

Klon repoet fra GitHub:

git clone <repo-URL>
cd react2/my-app

Installer avhengigheter:

npm install

Start utviklingsserveren:

npm start

Dette vil starte applikasjonen på http://localhost:3000/.

Funksjonalitet

Quiz med flere spørsmål: Brukeren får tilfeldig valgte spørsmål med tilhørende bilder.

Dynamiske svaralternativer: Hvert spørsmål har fire valg, hvorav ett er riktig.

Tilbakemelding på svar: Applikasjonen gir tilbakemelding på riktige og gale svar.

Resultatskjerm: Viser hvor mange riktige svar brukeren har fått.

Videre utvikling

Legge til flere spørsmål for å utvide quizopplevelsen

Forbedret UI/UX med animasjoner og mer avansert design

Backend-integrasjon for å lagre brukerresultater

-.-- . ...