<script>
    import {
        CopyCode,
        Flex,
        Text
    } from "$lib";
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="bold" as="h2">Design Tokens</Text>
        <Text size="xl" variant="weak">Foundational values that define the visual style of the design system, including colors, typography, spacing, and more.</Text>
    </Flex>
    <section id="font">
        <Flex direction="column">
            <Text weight="bold" size="xl">Font</Text>
            <div class="tokens">
                <div class="tokens-header">
                    <Text variant="weak">Example</Text>
                    <Text variant="weak">Description</Text>
                    <Text variant="weak">Token</Text>
                </div>
                <div class="token">
                    <div class="token-example">
                        <Text size="m" align="center">Inter</Text>
                    </div>
                    <Text measure="s">Font family for the Volt design system.</Text>
                    <CopyCode code="var(--v-font-body)" />
                </div>
                <div class="token">
                    <div class="token-example">
                        <Text size="m" mono align="center">Roboto Mono</Text>
                    </div>
                    <Text measure="s">Only used for code snippets and examples.</Text>
                    <CopyCode code="var(--v-font-mono)" />
                </div>
            </div>
        </Flex>
    </section>
    <section id="font-size">
        <Flex direction="column">
            <Text weight="bold" size="xl">Font Size</Text>
            <div class="tokens">
                <div class="tokens-header">
                    <Text variant="weak">Example</Text>
                    <Text variant="weak">Description</Text>
                    <Text variant="weak">Token</Text>
                </div>
                <div class="token">
                    <div class="token-example">
                        <Text size="xs">Aa</Text>
                    </div>
                    <Text measure="s">Used for small hint text.</Text>
                    <CopyCode code="var(--v-font-size-xs)" />
                </div>
                <div class="token">
                    <div class="token-example">
                        <Text size="s">Aa</Text>
                    </div>
                    <Text measure="s">Used for smaller components.</Text>
                    <CopyCode code="var(--v-font-size-s)" />
                </div>
                <div class="token">
                    <div class="token-example">
                        <Text size="m">Aa</Text>
                    </div>
                    <Text measure="s">Default body text size.</Text>
                    <CopyCode code="var(--v-font-size-m)" />
                </div>
                <div class="token">
                    <div class="token-example">
                        <Text size="l">Aa</Text>
                    </div>
                    <Text measure="s">Large text size.</Text>
                    <CopyCode code="var(--v-font-size-l)" />
                </div>
                <div class="token">
                    <div class="token-example">
                        <Text size="xl">Aa</Text>
                    </div>
                    <Text measure="s">Used for small headers.</Text>
                    <CopyCode code="var(--v-font-size-xl)" />
                </div>
                <div class="token">
                    <div class="token-example">
                        <Text size="2xl">Aa</Text>
                    </div>
                    <Text measure="s">Used for subheaders.</Text>
                    <CopyCode code="var(--v-font-size-2xl)" />
                </div>
                <div class="token">
                    <div class="token-example">
                        <Text size="3xl">Aa</Text>
                    </div>
                    <Text measure="s">Used for large headings. Only once per page.</Text>
                    <CopyCode code="var(--v-font-size-3xl)" />
                </div>
            </div>
        </Flex>
    </section>
    <section id="line-height">
        <Flex direction="column">
            <Text weight="bold" size="xl">Line Height</Text>
            <div class="tokens">
                <div class="tokens-header">
                    <Text variant="weak">Example</Text>
                    <Text variant="weak">Description</Text>
                    <Text variant="weak">Token</Text>
                </div>
                <div class="token">
                    <div class="token-example">
                        <Text size="xs">Line<br>Height</Text>
                    </div>
                    <Text measure="s">Used with xs font size.</Text>
                    <CopyCode code="var(--v-line-height-xs)" />
                </div>
                <div class="token">
                    <div class="token-example">
                        <Text size="s">Line<br>Height</Text>
                    </div>
                    <Text measure="s">Use with s font size.</Text>
                    <CopyCode code="var(--v-line-height-s)" />
                </div>
                <div class="token">
                    <div class="token-example">
                        <Text size="m">Line<br>Height</Text>
                    </div>
                    <Text measure="s">Use with m font size.</Text>
                    <CopyCode code="var(--v-line-height-m)" />
                </div>
                <div class="token">
                    <div class="token-example">
                        <Text size="l">Line<br>Height</Text>
                    </div>
                    <Text measure="s">Use with l font size.</Text>
                    <CopyCode code="var(--v-line-height-l)" />
                </div>
                <div class="token">
                    <div class="token-example">
                        <Text size="xl">Line<br>Height</Text>
                    </div>
                    <Text measure="s">Use with xl font size.</Text>
                    <CopyCode code="var(--v-line-height-xl)" />
                </div>
                <div class="token">
                    <div class="token-example">
                        <Text size="2xl">Line<br>Height</Text>
                    </div>
                    <Text measure="s">Use with 2xl font size.</Text>
                    <CopyCode code="var(--v-line-height-2xl)" />
                </div>
                <div class="token">
                    <div class="token-example">
                        <Text size="3xl">Line<br>Height</Text>
                    </div>
                    <Text measure="s">Use with 3xl font size.</Text>
                    <CopyCode code="var(--v-line-height-3xl)" />
                </div>
            </div>
        </Flex>
    </section>
    <section id="space">
        <Flex direction="column">
            <Text weight="bold" size="xl">Space</Text>
            <div class="tokens">
                <div class="tokens-header">
                    <Text variant="weak">Example</Text>
                    <Text variant="weak">Description</Text>
                    <Text variant="weak">Token</Text>
                </div>
                <div class="token">
                    <div class="token-example">
                        <div style="border-top: 2px solid var(--v-color-surface-solid); width: var(--v-space-xs);"></div>
                    </div>
                    <Text measure="s">Extra small spacing.</Text>
                    <CopyCode code="var(--v-space-xs)" />
                </div>
                <div class="token">
                    <div class="token-example">
                        <div style="border-top: 2px solid var(--v-color-surface-solid); width: var(--v-space-s);"></div>
                    </div>
                    <Text measure="s">Small spacing</Text>
                    <CopyCode code="var(--v-space-s)" />
                </div>
                <div class="token">
                    <div class="token-example">
                        <div style="border-top: 2px solid var(--v-color-surface-solid); width: var(--v-space-m);"></div>
                    </div>
                    <Text measure="s">Default spacing.</Text>
                    <CopyCode code="var(--v-space-m)" />
                </div>
                <div class="token">
                    <div class="token-example">
                        <div style="border-top: 2px solid var(--v-color-surface-solid); width: var(--v-space-l);"></div>
                    </div>
                    <Text measure="s">Large spacing.</Text>
                    <CopyCode code="var(--v-space-l)" />
                </div>
                <div class="token">
                    <div class="token-example">
                        <div style="border-top: 2px solid var(--v-color-surface-solid); width: var(--v-space-xl);"></div>
                    </div>
                    <Text measure="s">Extra large spacing.</Text>
                    <CopyCode code="var(--v-space-xl)" />
                </div>
                <div class="token">
                    <div class="token-example">
                        <div style="border-top: 2px solid var(--v-color-surface-solid); width: var(--v-space-2xl);"></div>
                    </div>
                    <Text measure="s">Extra extra large spacing.</Text>
                    <CopyCode code="var(--v-space-2xl)" />
                </div>
            </div>
        </Flex>
    </section>
    <section id="radius">
        <Flex direction="column">
            <Text weight="bold" size="xl">Border Radius</Text>
            <div class="tokens">
                <div class="tokens-header">
                    <Text variant="weak">Example</Text>
                    <Text variant="weak">Description</Text>
                    <Text variant="weak">Token</Text>
                </div>
                <div class="token">
                    <div class="token-example">
                        <div style="border-top: 4px solid var(--v-color-surface-solid); border-right: 4px solid var(--v-color-surface-solid); width: 2rem; height: 2rem; border-top-right-radius: var(--v-radius-sharp);"></div>
                    </div>
                    <Text measure="s">Default border radius.</Text>
                    <CopyCode code="var(--v-radius-sharp)" />
                </div>
                <div class="token">
                    <div class="token-example">
                        <div style="border-top: 4px solid var(--v-color-surface-solid); border-right: 4px solid var(--v-color-surface-solid); width: 2rem; height: 2rem; border-top-right-radius: var(--v-radius-round);"></div>
                    </div>
                    <Text measure="s">Rounded border radius used in certain components.</Text>
                    <CopyCode code="var(--v-radius-round)" />
                </div>
            </div>
        </Flex>
    </section>
    <section id="color">
        <Flex direction="column">
            <Text weight="bold" size="xl">Color</Text>
            <div class="tokens">
                <div class="tokens-header">
                    <Text variant="weak">Color</Text>
                    <Text variant="weak">Description</Text>
                    <Text variant="weak">Token</Text>
                </div>
                <div class="token">
                    <div class="token-example" style="background-color: var(--v-color-background);"></div>
                    <Text measure="s">Background color of the content area.</Text>
                    <CopyCode code="var(--v-color-background)" />
                </div>
                <div class="token">
                    <div class="token-example" style="background-color: var(--v-color-surface);"></div>
                    <Text measure="s">Background color of surfaces on top of the background.</Text>
                    <CopyCode code="var(--v-color-surface)" />
                </div>
                <div class="token">
                    <div class="token-example" style="background-color: var(--v-color-text);"></div>
                    <Text measure="s">Default color for body text.</Text>
                    <CopyCode code="var(--v-color-text)" />
                </div>
                <div class="token">
                    <div class="token-example" style="background-color: var(--v-color-text-weak);"></div>
                    <Text measure="s">Subdued color for body text.</Text>
                    <CopyCode code="var(--v-color-text-weak)" />
                </div>
                <div class="token">
                    <div class="token-example" style="background-color: var(--v-color-text-weaker);"></div>
                    <Text measure="s">More subdued color for body text.</Text>
                    <CopyCode code="var(--v-color-text-weaker)" />
                </div>
                <div class="token">
                    <div class="token-example" style="background-color: var(--v-color-text-weakest);"></div>
                    <Text measure="s">Darkest text color used in placeholders for form elements.</Text>
                    <CopyCode code="var(--v-color-text-weakest)" />
                </div>
                <div class="token">
                    <div class="token-example" style="background-color: var(--v-color-border);"></div>
                    <Text measure="s">Default border color.</Text>
                    <CopyCode code="var(--v-color-border)" />
                </div>
                <div class="token">
                    <div class="token-example" style="background-color: var(--v-color-danger);"></div>
                    <Text measure="s">Use when there is an error present.</Text>
                    <CopyCode code="var(--v-color-danger)" />
                </div>
                <div class="token">
                    <div class="token-example" style="background-color: var(--v-color-warning);"></div>
                    <Text measure="s">Use to warn the user.</Text>
                    <CopyCode code="var(--v-color-warning)" />
                </div>
                <div class="token">
                    <div class="token-example" style="background-color: var(--v-color-success);"></div>
                    <Text measure="s">Use when there is an error present.</Text>
                    <CopyCode code="var(--v-color-success)" />
                </div>
                <div class="token">
                    <div class="token-example" style="background-color: var(--v-color-surface-solid);"></div>
                    <Text measure="s">Solid color used on components like badge when there is no status indication.</Text>
                    <CopyCode code="var(--v-color-surface-solid)" />
                </div>
            </div>
        </Flex>
    </section>
</Flex>

<style>
    .tokens {
        display: flex;
        flex-direction: column;
        gap: var(--v-space-l);
    }

    .tokens-header {
        display: none;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .token {
        display: flex;
        flex-direction: column;
        gap: var(--v-space-m);
        border: 1px solid var(--v-color-border);
        border-radius: var(--v-radius-sharp);
        padding: var(--v-space-s);
        background-color: var(--v-color-surface);
    }

    .token-example {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 4rem;
        border-radius: var(--v-radius-sharp);
        border: 1px solid var(--v-color-border);
        overflow: hidden;
    }

    @media (min-width: 700px) {
        .tokens {
            gap: var(--v-space-s);
        }

        .tokens-header {
            display: grid;
        }

        .token {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 0;
            align-items: center;
        }

        .token-example {
            width: 4rem;
            height: 4rem;
            border-radius: var(--v-radius-sharp);
        }
    }
</style>