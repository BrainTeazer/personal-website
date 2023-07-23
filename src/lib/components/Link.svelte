<script lang="ts">
  export let href: string;
  export let classProps: any;
  export let onclick: any = null;
  export let title: string = "";
</script>

<a {href} target="_blank" rel="noopener noreferrer" class={classProps} {title} on:click={onclick}>
  <slot />
</a>
