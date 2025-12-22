# Corner Stone HTML Template

A ThemeForest-ready HTML template built with Tailwind CSS.

## Setup

1. Install dependencies:
```bash
npm install
```

## Development

- Build CSS (production):
```bash
npm run build-css
```

- Watch CSS (development):
```bash
npm run watch-css
```

## Project Structure

```
├── css/
│   └── style.css          # Compiled Tailwind CSS (generated)
├── src/
│   └── input.css          # Tailwind source file
├── index.html             # Main HTML file
├── tailwind.config.js     # Tailwind configuration
└── package.json           # Project dependencies
```

## Usage

Link the compiled CSS in your HTML:
```html
<link rel="stylesheet" href="css/style.css">
```

