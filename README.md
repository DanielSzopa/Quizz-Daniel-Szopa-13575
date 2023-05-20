# Opis projektu

Aplikacja jest napisana w technologi React.js.
Aplikacja przedstawia Quizz z pytaniami o JavaScript, mechanizm aplikacji jest stworzony w taki sposób aby łatwo było dodać kolejne pytania, poprzez dodanie pytania, niepoprawnych odpowiedzi, poprawnej odpowiedzi i obrazka do pliku `data.js`.

Funkcjonalności:

- Na początku startu quizzu, aplikacja pyta o nazwę i email gracza, które są później wyświetlane podczas gry.
- Po wybraniu nieprawidłowej odpowiedzi, pytanie niepoprawne zostanie podświetlone na czerwono, a poprawne na zielono, tak aby gracz nie miał wątpliwości, która odpowiedź jest poprawna.
- Po zakończeniu quizzu zostanie pokazany wynik jaki gracz uzyskał, który będzie można pobrać do pliku json

```json
{
  "email": "daniel-szopa@gmail.com",
  "nick": "DanielSzopa",
  "questions": 5,
  "correctAnswers": 4
}
```

## Uruchomienie

Do uruchomienia projektu wystarczy wejść w `my-app` i uruchomić poniższe skrypty, do zainstalowania zależności i potrzebnych paczek aby oraz uruchomić aplikację jako localhost.

`cd my-app`

`npm install`

`npm start`
