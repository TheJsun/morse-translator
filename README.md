# Morse Code Translator

A minimal, two-way Morse code translator built with React. Type either English or Morse code into a single input box, and the translation appears automatically.

## Features

- **Bidirectional translation**: automatically detects whether the input is English or Morse code and translates accordingly
- **Live translation**: output updates on every keystroke
- **Input sanitisation**: strips unsupported characters before translating
- **Copy to clipboard**: one-click copy of the translated output
- **Responsive layout**: adapts sizing and spacing across breakpoints

## Tech Stack

- **React**: component-based UI
- **Vite**: dev server and build tooling
- **Jest**: unit testing framework
- **React Testing Library**: component-level testing (rendering, user interaction)
- **JavaScript**: (ES6+)
- **SCSS**: component-scoped styles via CSS modules, shared variables and breakpoint mixins

## Project Structure

```
src/
  components/
    Translator/
      MorseTranslator.jsx        # owns state, computes translation
      MorseTranslator.module.scss
    InputBox/
      InputBox.jsx                # controlled textarea for user input
    OutputBox/
      OutputBox.jsx                # read-only textarea + copy button
      OutputBox.module.scss
    utils/
      morse.jsx                   # translation logic, direction detection, sanitization
      morse.test.js
  data/
    morse-code.json                # English → Morse character mapping
  scss/
    variables/_variables.scss      # theme colors (CSS custom properties)
  App.jsx
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Testing

Tests are written with Jest and cover the translation logic in `components/utils/morse.jsx`, including:

- English → Morse translation (single words, multi-word phrases, digits, case-insensitivity)
- Morse → English translation, including extra whitespace handling
- Special-character handling and empty-string input
- Invalid Morse code raises an error

Direction detection (`inputIsText`) and round-trip translation aren't covered by tests yet.

Run the test suite:

```bash
npm test
```

## How It Works

Morse code uses a fixed, narrow alphabet: dots (`.`), dashes (`-`), spaces, and slashes (`/`) as word separators. Direction detection (`inputIsText`) works by checking whether the input contains any Latin letters or digits — if so, it's treated as English and encoded to Morse; otherwise, it's treated as Morse and decoded to English.

The Morse → English mapping is generated automatically from the English → Morse mapping (rather than maintained as a separate, hand-written table), so the two can never drift out of sync.

Copying the output uses `navigator.clipboard`, which requires a secure context (HTTPS or `localhost`).
