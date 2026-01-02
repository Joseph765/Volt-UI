<script>
    import { 
        Button, 
        Flex, 
        Heading,
        Icon,
    } from "$lib";
</script>

<Flex direction="column">
    <Heading>Button</Heading>
    <Flex>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
    </Flex>
    <Flex>
        <Button disabled>Disabled Primary</Button>
        <Button disabled variant="secondary">Disabled Secondary</Button>
        <Button disabled variant="ghost">Disabled Ghost</Button>
        <Button disabled variant="danger">Disabled Danger</Button>
    </Flex>
    <Flex>
        <Button>
            <Icon name="plus" slot="start" />
            Add
        </Button>
        <Button>
            <Icon name="plus" slot="end" />
            Add
        </Button>
        <Button variant="secondary">
            <Icon name="minus" slot="start" />
            Remove
        </Button>
        <Button variant="ghost">
            <Icon name="chevron-down" size="l" />
        </Button>
        <Button variant="danger">
            <Icon name="x" slot="start" />
            Delete
        </Button>
    </Flex>
</Flex>