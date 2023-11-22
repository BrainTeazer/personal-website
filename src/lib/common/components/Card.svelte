<script lang="ts">
  import { theme } from "$lib/../stores";

  export let title: string;
  export let imgSrc: string = "";
  export let imgWidth = 40;
  export let imgHeight = 40;
  export let classProp: string = "";
  export let imgProp: string = "";
  export let imgAlt: string = "";
</script>

<div class="hover:scale-105 flex flex-col justify-center items-center {$theme.background} p-0.5 {$theme.boxShadow} border-2 {$theme.border} {classProp}">
  {#if imgSrc}
    <img src={imgSrc} alt={imgAlt} class={imgProp} style="width:{imgWidth}px;height:{imgHeight}px" />
  {/if}
  <div class="font-space-grotesk font-bold text-2xl text-center">{title}</div>
  <slot />
</div>
