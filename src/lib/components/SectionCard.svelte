<script lang="ts">
  import { Button } from '$lib/components/ui/button'
  import * as Card from '$lib/components/ui/card'
  import { cn } from '$lib/utils'

  interface Props {
    title: string
    text: string
    href: string
    cta: string
    iconClass: string
  }

  let { title, text, href, cta, iconClass }: Props = $props()
</script>

<Card.Root>
  <span class={cn('size-12 self-center', iconClass)}></span>
  <Card.Content class="h-full">
    <Card.Title class="text-primary gradient-heading text-center">{title}</Card.Title>
    <Card.Description class="text-card-foreground text-base md:text-lg">{text}</Card.Description>
  </Card.Content>
  <Card.Footer>
    <Button class="w-full self-end" {href} size="lg">{cta}</Button>
  </Card.Footer>
</Card.Root>
