<script lang="ts">
  import { scrollIntoView } from "$lib/home/functions/scrollIntoView";

  export let href: string;
  export let scrollIntoViewHandler = scrollIntoView;

  export let icon: ConstructorOfATypedSvelteComponent;
  export let name: string;
</script>

<a {href} rel="noopener noreferrer" target="_blank" on:click={scrollIntoViewHandler} class={$$props.class} title={name}>
  <svelte:component this={icon} />
</a>
