// Which framework the docs show (Svelte or React), and the helpers pages use to switch with it.
//
// - `framework.current` is the choice. FrameworkSwitcher (next to the logo) sets it; it's saved in localStorage.
// - Anything that differs per framework is written once per framework, side by side, as a `PerFramework` object
//   ({ svelte, react }), and read with `forFramework()`. Code examples pass that object straight to CodeExample.
// - Things that are the same in both (CSS snippets, tokens) stay plain strings.

/** @typedef { "svelte" | "react" } Framework */

/**
 * One value per framework, e.g. the two versions of a code example.
 * @template [T=string]
 * @typedef {{ svelte: T, react: T }} PerFramework
 */

const STORAGE_KEY = "moth-framework";

export const frameworks = /** @type { const } */ ([
    { value: "svelte", label: "Svelte" },
    { value: "react", label: "React" }
]);

export const framework = $state({ current: /** @type { Framework } */ ("svelte") });

/**
 * The value for the chosen framework. Reactive when read in a template or $derived.
 * @template T
 * @param { PerFramework<T> } values
 * @returns { T }
 */
export function forFramework(values) {
    return values[framework.current];
}

// --- API wording for prose and API reference tables ---

/** What the docs call a content slot: a Svelte snippet or a React prop. */
export function slotWord() {
    return forFramework({ svelte: "snippet", react: "prop" });
}

/**
 * The type of a content slot for the API table. With `param`, the slot receives a value (e.g. a nav icon's
 * `animate` flag): a snippet with that parameter, or in React a node or a function returning one.
 * @param { { name: string, type: string } } [param]
 */
export function slotType(param) {
    if (!param) return forFramework({ svelte: "Snippet", react: "ReactNode" });
    return forFramework({
        svelte: `Snippet<[${param.type}]>`,
        react: `ReactNode | ((${param.name}: ${param.type}) => ReactNode)`
    });
}

const reactEvents = /** @type { Record<string, string> } */ ({
    onclick: "onClick",
    onchange: "onChange",
    onkeydown: "onKeyDown",
    onclose: "onClose"
});

/**
 * A callback prop's name in the chosen framework: Svelte's lowercase DOM-style names, React's camelCase.
 * @param { string } svelteName e.g. "onclick"
 */
export function eventName(svelteName) {
    return forFramework({ svelte: svelteName, react: reactEvents[svelteName] ?? svelteName });
}

/** The package name for the chosen framework. */
export function packageName() {
    return forFramework({ svelte: "moth-ui-svelte", react: "moth-ui-react" });
}

/** The install command for the chosen framework. */
export function installCommand() {
    return `npm install ${packageName()}`;
}

/** @param { Framework } value */
export function setFramework(value) {
    framework.current = value;
    try {
        if (value === "svelte") localStorage.removeItem(STORAGE_KEY);
        else localStorage.setItem(STORAGE_KEY, value);
    } catch {
        // Storage can be blocked (e.g. private browsing); the choice still applies for this visit
    }
}

/** Reads the saved choice. Call once on mount (there's no localStorage during server rendering). */
export function loadFramework() {
    try {
        if (localStorage.getItem(STORAGE_KEY) === "react") framework.current = "react";
    } catch {}
}
