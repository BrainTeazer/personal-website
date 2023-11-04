<script lang="ts">
  import { capitalizeFirstLetter } from "$lib/functions/capitalizeFirstLetter";
  import { scrollIntoView } from "$lib/functions/scrollIntoView";
  import Link from "$lib/components/Link.svelte";

  export let href: string;
  export let scrollIntoViewHandler = scrollIntoView;

  export let classProps: string;
  export let icon: ConstructorOfATypedSvelteComponent;
  export let name: string;
</script>

<Link {href} onclick={scrollIntoViewHandler} {classProps} title={capitalizeFirstLetter(name)}>
  <svelte:component this={icon} />
</Link>
