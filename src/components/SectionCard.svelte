<script lang="ts">
  import { Button } from '$lib/components/ui/button'
  import * as Card from '$lib/components/ui/card'

  interface Props {
    title: string
    text: string
    href: string
    cta: string
    icon: import('svelte').Snippet
  }

  let { title, text, href, cta, icon }: Props = $props()
</script>

<Card.Root>
  <span class="justify-center">{@render icon()}</span>
  <Card.Content class="h-full">
    <Card.Title class="text-primary gradient-heading text-center">{title}</Card.Title>
    <Card.Description class="text-card-foreground text-base md:text-lg">{text}</Card.Description>
  </Card.Content>
  <Card.Footer>
    <Button class="w-full self-end" {href}>{cta}</Button>
  </Card.Footer>
</Card.Root>
