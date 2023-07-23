<script lang="ts">
  export let href: string;
  export let classProps: any;
  export let onclick: any = null;
  export let title: string = "";
</script>

{#if onclick == null}
  <a {href} target="_blank" rel="noopener noreferrer" class={classProps} {title}>
    <slot />
  </a>
{:else}
  <a {href} target="_blank" rel="noopener noreferrer" class={classProps} on:click|preventDefault={onclick}>
    <slot />
  </a>
{/if}
