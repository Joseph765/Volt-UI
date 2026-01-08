<script>
    import { 
        Badge,
        Container,
        Divider,
        Flex, 
        Icon,
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
        Text
    } from "$lib";
</script>

<Container size="l" space="none">
    <Flex direction="column" gap="2xl">
        <Flex direction="column">
            <Text size="3xl" weight="black" as="h1">Introducing Volt</Text>
            <Text size="xl" variant="weak">Production-grade component library and design tokens for high-performance crypto interfaces. This design system was built from <strong>scratch</strong> and does not rely on crutches like Tailwind or Material Design.</Text>
        </Flex>
        <Flex direction="column" gap="l">
            <Text weight="bold" size="2xl">Table Example</Text>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead align="start">Badge</TableHead>
                        <TableHead align="end">Money</TableHead>
                        <TableHead align="end">Money</TableHead>
                        <TableHead align="end">Money</TableHead>
                        <TableHead align="end">Money</TableHead>
                        <TableHead align="end">Money</TableHead>
                        <TableHead align="end">Money</TableHead>
                        <TableHead align="end">Money</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell align="start">
                            <Badge variant="info">Badge</Badge>
                        </TableCell>
                        <TableCell align="end">$19,241.29</TableCell>
                        <TableCell align="end">$39,934.29</TableCell>
                        <TableCell align="end">$69,510.44</TableCell>
                        <TableCell align="end">$34,135.82</TableCell>
                        <TableCell align="end">$34,412.17</TableCell>
                        <TableCell align="end">$76,693.03</TableCell>
                        <TableCell align="end">$73,721.15</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="start">
                            <Badge variant="danger">Badge</Badge>
                        </TableCell>
                        <TableCell align="end">$19,241.29</TableCell>
                        <TableCell align="end">$39,934.29</TableCell>
                        <TableCell align="end">$69,510.44</TableCell>
                        <TableCell align="end">$34,135.82</TableCell>
                        <TableCell align="end">$34,412.17</TableCell>
                        <TableCell align="end">$76,693.03</TableCell>
                        <TableCell align="end">$73,721.15</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="start">
                            <Badge variant="warning">Badge</Badge>
                        </TableCell>
                        <TableCell align="end">$19,241.29</TableCell>
                        <TableCell align="end">$39,934.29</TableCell>
                        <TableCell align="end">$69,510.44</TableCell>
                        <TableCell align="end">$34,135.82</TableCell>
                        <TableCell align="end">$34,412.17</TableCell>
                        <TableCell align="end">$76,693.03</TableCell>
                        <TableCell align="end">$73,721.15</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="start">
                            <Badge variant="info">Badge</Badge>
                        </TableCell>
                        <TableCell align="end">$19,241.29</TableCell>
                        <TableCell align="end">$39,934.29</TableCell>
                        <TableCell align="end">$69,510.44</TableCell>
                        <TableCell align="end">$34,135.82</TableCell>
                        <TableCell align="end">$34,412.17</TableCell>
                        <TableCell align="end">$76,693.03</TableCell>
                        <TableCell align="end">$73,721.15</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="start">
                            <Badge variant="neutral">Badge</Badge>
                        </TableCell>
                        <TableCell align="end">$19,241.29</TableCell>
                        <TableCell align="end">$39,934.29</TableCell>
                        <TableCell align="end">$69,510.44</TableCell>
                        <TableCell align="end">$34,135.82</TableCell>
                        <TableCell align="end">$34,412.17</TableCell>
                        <TableCell align="end">$76,693.03</TableCell>
                        <TableCell align="end">$73,721.15</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Flex>
        <Divider />
        <Flex direction="column" gap="s">
            <Text weight="bold" size="2xl">Body Text Example</Text>
            
        </Flex>
        <Divider />
        <Flex direction="column" gap="s">
            <Text weight="bold" size="2xl">Heading Example</Text>
        </Flex>
        <Divider />
    </Flex>
</Container>

<style>
    h1 {
        font-size: 46px;
        font-weight: 800 !important;
        text-transform: uppercase;
        letter-spacing: -0.5px !important;
    }
    p {
        font-size: var(--v-font-size-l);
    }
    p.is-size-m {
        font-size: var(--v-font-size-m);
    }
    p.is-size-l {
        font-size: var(--v-font-size-l);
    }
    p.is-size-xl {
        font-size: var(--v-font-size-xl);
    }
    p.is-size-2xl {
        font-size: var(--v-font-size-2xl);
    }
    p.is-size-3xl {
        font-size: var(--v-font-size-3xl);
    }

    .inter {
        font-family: "Inter";
    }
    .geist {
        font-family: "Geist";
    }
    .dmsans {
        font-family: "DM Sans";
    }
    .manrope {
        font-family: "Manrope";
    }
    .outfit {
        font-family: "Outfit";
        letter-spacing: 0.25px;
        font-weight: 300;
    }
</style>