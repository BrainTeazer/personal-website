<script lang="ts">
  import { scrollIntoView } from "$lib/functions/scrollIntoView";

  export let href: string;
  export let scrollIntoViewHandler = scrollIntoView;

  export let classProps: string;
  export let icon: any;
  export let name: string;
</script>

<a {href} on:click|preventDefault={scrollIntoViewHandler} rel="noopener noreferrer" class="group {classProps}" title={name.charAt(0).toUpperCase() + name.slice(1)}>
  <svelte:component this={icon} />
  <!-- <div class="hidden group-hover:block capitalize font-ibm-plex-serif">{name}</div> -->
</a>
