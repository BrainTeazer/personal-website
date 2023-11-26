<script lang="ts">
  export let href: string;
  export let onclick: any = null;
  export let title: string = "";
  export let target: string = "_blank";
</script>

<a {href} {target} rel="noopener noreferrer" class={$$props.class} {title} on:click={onclick}>
  <slot />
</a>
