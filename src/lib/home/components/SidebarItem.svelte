<script lang="ts">
  import { scrollIntoView } from "$lib/home/functions/scrollIntoView";
  import Link from "$lib/common/components/Link.svelte";

  export let href: string;
  export let scrollIntoViewHandler = scrollIntoView;

  export let classProps: string;
  export let icon: ConstructorOfATypedSvelteComponent;
  export let name: string;
</script>

<Link {href} onclick={scrollIntoViewHandler} {classProps} title={name}>
  <svelte:component this={icon} />
</Link>
