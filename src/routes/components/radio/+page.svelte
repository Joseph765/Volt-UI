<script>
    import {
        Code,
        Fieldset,
        Flex,
        Link,
        Radio,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Text
    } from "$lib";
    import CodeExample from "../CodeExample.svelte";


    let plan = $state('pro');


    let example1 = `<script>
    import { Fieldset, Flex, Radio } from "moth-ui-svelte";
<\/script>

<Fieldset label="Radios">
    <Flex direction="column" gap="s">
        <Radio id="radio" name="testRadio" label="Checked" checked value="1"/>
        <Radio id="radio2" name="testRadio" label="Unchecked" value="2" />
    </Flex>
</Fieldset>`;
    let example2 = `<script>
    import { Fieldset, Flex, Radio } from "moth-ui-svelte";
<\/script>

<Fieldset label="Radios">
    <Flex direction="column" gap="s">
        <Radio id="radio3" name="testRadio" label="Checked" checked value="3" disabled />
        <Radio id="radio4" name="testRadio" label="Unchecked" value="4" disabled />
    </Flex>
</Fieldset>`;
    let example3 = `<script>
    import { Fieldset, Flex, Radio } from "moth-ui-svelte";
<\/script>

<Fieldset label="Radios" required>
    <Flex direction="column" gap="s">
        <Radio id="radio5" name="testRadio" label="Checked" checked value="5" />
        <Radio id="radio6" name="testRadio" label="Unchecked" value="6" />
    </Flex>
</Fieldset>`;
    let example4 = `<script>
    import { Fieldset, Flex, Radio } from "moth-ui-svelte";
<\/script>

<Fieldset label="Radios">
    <Flex direction="column" gap="s">
        <Radio id="radio7" name="testRadio" label="Checked" checked value="7" hint="Hint: this is a hint" />
        <Radio id="radio8" name="testRadio" label="Unchecked" value="8" /> 
    </Flex>
</Fieldset>`;
    let example5 = `<script>
    import { Fieldset, Flex, Radio } from "moth-ui-svelte";
<\/script>

<Fieldset label="Radios">
    <Flex direction="column" gap="s">
        <Radio id="radio9" name="testRadio" label="Checked" checked value="9" error="There is an error" />
        <Radio id="radio10" name="testRadio" label="Unchecked" value="10" />
    </Flex>
</Fieldset>`;
    let example6 = `<script>
    import { Fieldset, Flex, Radio, Text } from "moth-ui-svelte";

    let plan = $state("pro");
<\/script>

<Fieldset label="Plan">
    <Flex direction="column" gap="s">
        <Radio id="plan-starter" name="plan" label="Starter" value="starter" bind:group={plan} />
        <Radio id="plan-pro" name="plan" label="Pro" value="pro" bind:group={plan} />
        <Radio id="plan-team" name="plan" label="Team" value="team" bind:group={plan} />
    </Flex>
</Fieldset>
<Text variant="weak">Selected: {plan}</Text>`;
</script>

<Flex direction="column" gap="2xl">
    <Flex direction="column">
        <Text size="3xl" weight="black" as="h1">Radio</Text>
        <Text size="xl" variant="weak">A control that allows users to select exactly one option from a set.</Text>
    </Flex>
    <section class="section" id="basic">
        <Text size="2xl" weight="bold" as="h2">Basic</Text>
        <Text size="l" variant="weak" measure="l">
            For picking exactly one option from a small set. Put the radios in a <Link size="l"
            href="/components/fieldset">Fieldset</Link> and give them the same <Code>name</Code>. For a long list, use a
            <Link size="l" href="/components/select">Select</Link>.
        </Text>
        <CodeExample code={example1}>
            <Fieldset label="Radios">
                <Flex direction="column" gap="s">
                    <Radio id="radio" name="testRadio-basic" label="Checked" checked value="1"/>
                    <Radio id="radio2" name="testRadio-basic" label="Unchecked" value="2" />
                </Flex>
            </Fieldset>
        </CodeExample>
    </section>

    <section class="section" id="group">
        <Text size="2xl" weight="bold" as="h2">Group binding</Text>
        <Text size="l" variant="weak" measure="l">
            Bind one variable to every radio in the set with <Code>bind:group</Code>; it holds the selected value.
        </Text>
        <CodeExample code={example6}>
            <Flex direction="column" gap="m">
                <Fieldset label="Plan">
                    <Flex direction="column" gap="s">
                        <Radio id="plan-starter" name="plan" label="Starter" value="starter" bind:group={plan} />
                        <Radio id="plan-pro" name="plan" label="Pro" value="pro" bind:group={plan} />
                        <Radio id="plan-team" name="plan" label="Team" value="team" bind:group={plan} />
                    </Flex>
                </Fieldset>
                <Text variant="weak">Selected: {plan}</Text>
            </Flex>
        </CodeExample>
    </section>

    <section class="section" id="hint">
        <Text size="2xl" weight="bold" as="h2">Hint</Text>
        <Text size="l" variant="weak" measure="l">
            Help under a single option.
        </Text>
        <CodeExample code={example4}>
            <Fieldset label="Radios">
                <Flex direction="column" gap="s">
                    <Radio id="radio7" name="testRadio-hint" label="Checked" checked value="7" hint="Hint: this is a hint" />
                    <Radio id="radio8" name="testRadio-hint" label="Unchecked" value="8" /> 
                </Flex>
            </Fieldset>
        </CodeExample>
    </section>

    <section class="section" id="error">
        <Text size="2xl" weight="bold" as="h2">Error</Text>
        <Text size="l" variant="weak" measure="l">
            A message under the option it's about.
        </Text>
        <CodeExample code={example5}>
            <Fieldset label="Radios">
                <Flex direction="column" gap="s">
                    <Radio id="radio9" name="testRadio-error" label="Checked" checked value="9" error="There is an error" />
                    <Radio id="radio10" name="testRadio-error" label="Unchecked" value="10" />
                </Flex>
            </Fieldset>
        </CodeExample>
    </section>

    <section class="section" id="required">
        <Text size="2xl" weight="bold" as="h2">Required</Text>
        <Text size="l" variant="weak" measure="l">
            Mark the Fieldset as required; it adds an asterisk to the group's label.
        </Text>
        <CodeExample code={example3}>
            <Fieldset label="Radios" required>
                <Flex direction="column" gap="s">
                    <Radio id="radio5" name="testRadio-required" label="Checked" checked value="5" />
                    <Radio id="radio6" name="testRadio-required" label="Unchecked" value="6" />
                </Flex>
            </Fieldset>
        </CodeExample>
    </section>

    <section class="section" id="disabled">
        <Text size="2xl" weight="bold" as="h2">Disabled</Text>
        <Text size="l" variant="weak" measure="l">
            For options people can see but can't pick right now.
        </Text>
        <CodeExample code={example2}>
            <Fieldset label="Radios">
                <Flex direction="column" gap="s">
                    <Radio id="radio3" name="testRadio-disabled" label="Checked" checked value="3" disabled />
                    <Radio id="radio4" name="testRadio-disabled" label="Unchecked" value="4" disabled />
                </Flex>
            </Fieldset>
        </CodeExample>
    </section>

    <section class="section" id="api-reference">
        <Text size="2xl" weight="bold" as="h2">API reference</Text>
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeader>Property</TableHeader>
                    <TableHeader>Description</TableHeader>
                    <TableHeader>Type</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell><Code>label</Code></TableCell>
                    <TableCell>Adds a label beside the radio button.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>name</Code></TableCell>
                    <TableCell>Groups radios together: give every radio in a set the same name.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>checked</Code></TableCell>
                    <TableCell>Checks the radio initially. Ignored when <Code>bind:group</Code> is used.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>disabled</Code></TableCell>
                    <TableCell>Prevents interaction.</TableCell>
                    <TableCell><Code>boolean</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>hint</Code></TableCell>
                    <TableCell>Adds a hint below the radio button.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>error</Code></TableCell>
                    <TableCell>Adds an error message below the radio button.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>id</Code></TableCell>
                    <TableCell>Unique id that connects the radio to its label. Required.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>value</Code></TableCell>
                    <TableCell>The value submitted with the form when this radio is selected.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>bind:group</Code></TableCell>
                    <TableCell>Binds a variable to the whole set: put it on every radio in the set, and it holds the checked radio's <Code>value</Code>.</TableCell>
                    <TableCell><Code>string</Code></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Code>onchange</Code></TableCell>
                    <TableCell>Fires when the user selects this radio.</TableCell>
                    <TableCell><Code>function</Code></TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </section>
</Flex>

<style>
    .section {
        display: flex;
        flex-direction: column;
        gap: var(--m-space-m);
        scroll-margin-block-start: var(--m-space-l);
    }
</style>
