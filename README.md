# frmwrk

A minimal CSS and JavaScript framework for personal projects. It provides
utility classes, a simple grid system, basic components and a small demo.

## Features

- CSS variables for colors and typography
- Light and dark themes (toggle with the button in `index.html`)
- Responsive grid and spacing utilities
- Pre-styled forms, buttons, cards and a navigation bar
- Simple JavaScript helpers for modals and theme switching

Open `public/index.html` to preview the components.

## Theme Preference

The framework stores your theme choice in `localStorage`. On first load it will
fall back to your operating system preference using `prefers-color-scheme`.
Toggle the theme with the button in `index.html` to save your preference.
