# Moth UI

A design system with a look all its own: soft ambient light, polished components, and a fast path from empty
project to finished UI. Moth comes for Svelte and React; this is the React package.

**Documentation:** [moth-ui.com](https://moth-ui.com)

## Install

```sh
npm install moth-ui-react
```

Requires React 18 or later. Works in Next.js, React Router and any Vite + React project.

## Use

Import the stylesheet once, in your app's entry file or root layout:

```jsx
import "moth-ui-react/css/index.css";
```

Then import components anywhere:

```jsx
import { Button } from "moth-ui-react";

export default function Example() {
    return <Button>Save changes</Button>;
}
```

The stylesheet loads the Outfit and Geist Mono fonts from Google Fonts and sets global page styles. See
[Getting started](https://moth-ui.com/getting-started) for details.

## License

[MIT](./LICENSE)
