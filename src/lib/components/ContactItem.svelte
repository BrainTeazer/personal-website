<script lang="ts">
  export let href: string;
  export let icon: ConstructorOfATypedSvelteComponent;
  export let classProps: string;
</script>

<a {href} target="_blank" rel="noopener noreferrer" class={classProps}>
  <svelte:component this={icon} />
</a>
