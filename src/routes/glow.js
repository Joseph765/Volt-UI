/**
 * Svelte action for the docs site's component cards: tracks the pointer so the card's light
 * (styled in glow.css) follows it. Sets --glow-x / --glow-y relative to the card.
 *
 * Usage: <a class="glow-card" use:glow>…<div class="glow-stage">…</div></a>
 *
 * @param { HTMLElement } node
 */
export function glow(node) {
    /** @param { PointerEvent } event */
    function move(event) {
        const rect = node.getBoundingClientRect();
        node.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
        node.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
    }

    node.addEventListener("pointerenter", move);
    node.addEventListener("pointermove", move);

    return {
        destroy() {
            node.removeEventListener("pointerenter", move);
            node.removeEventListener("pointermove", move);
        }
    };
}
