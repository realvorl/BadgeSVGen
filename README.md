# SVG Badge Generator

This project is a React-based SVG Badge Generator that allows users to create custom SVG badges with personalized text, colors, and layouts. The application is structured to be user-friendly, with controls for text, font size, layout dimensions, and color customization. The generated SVG code can be copied and used directly in your projects.

## In a nutshell 

Visit [the github pages](https://realvorl.github.io/BadgeSVGen/) of this repo, and you can create badges like these: [![cusotm-badge](https://bit.ly/v-here-badge)](https://realvorl.github.io/BadgeSVGen/) [![cusotm-badge](https://bit.ly/v-app-badge)](https://viorel-petcu.com)  [![custom-badge](https://bit.ly/veo-boo-badge)](https://realvorl.github.io/BadgeSVGen/)

## Project Structure

```plaintext
.
├── package.json          # Project dependencies and scripts
├── package-lock.json     # Lockfile for exact dependency versions
├── public
│   ├── favicon.ico       # Favicon for the app
│   ├── index.html        # Main HTML file for React to mount
│   └── robots.txt        # Configuration for web crawlers
├── README.md             # This README file
├── src                   # Main source directory
│   ├── About.tsx         # Component for project information
│   ├── App.css           # Main styling for the app
│   ├── App.tsx           # Main App component containing layout
│   ├── Colors.tsx        # Component for color customization controls
│   ├── index.css         # Global styling
│   ├── index.tsx         # Entry point for React
│   ├── react-app-env.d.ts # TypeScript environment settings
│   ├── SizeAndLayout.tsx # Component for layout size controls
│   ├── SVGCode.tsx       # Component for displaying generated SVG code
│   ├── SVGControls.tsx   # Legacy control component (split into others)
│   ├── SVGRender.tsx     # Component for rendering the SVG preview
│   └── TextAndFont.tsx   # Component for text and font size controls
└── tsconfig.json         # TypeScript configuration
