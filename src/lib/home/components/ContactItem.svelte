<script lang="ts">
  import Link from "$lib/common/components/Link.svelte";

  export let href: string;
  export let icon: ConstructorOfATypedSvelteComponent;
  export let classProps: string;
</script>

<Link {href} {classProps}>
  <svelte:component this={icon} />
</Link>
