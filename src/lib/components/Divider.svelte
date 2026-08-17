<script lang="ts">
  import { cn } from '#lib/utils.js'

  const { class: className = '' } = $props()
</script>

<div class={cn('divider my-16', className)}>
  ~ <span class="icon-[ion--earth] mx-2 text-xl"></span> ~
</div>
