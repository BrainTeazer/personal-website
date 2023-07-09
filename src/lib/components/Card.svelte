<script lang="ts">
  import { theme } from "../../stores";

  export let title: string;
  export let imgSrc: string = "";
  export let imgWidth = 40;
  export let imgHeight = 40;
  export let classProp: string = "";
  export let imgProp: string = "";

  let themeValue: any;
  theme.subscribe((val) => {
    themeValue = val;
  });
  //   export let date: string;
</script>

<div class="hover:scale-105 flex flex-col justify-center items-center {themeValue.background} p-0.5 {themeValue.boxShadow} border-2 {themeValue.border} {classProp}">
  {#if imgSrc}
    <img src={imgSrc} alt="" class={imgProp} style="width:{imgWidth}px;height:{imgHeight}px" />
  {/if}
  <div class="font-space-grotesk font-bold text-2xl text-center">{title}</div>
  <slot />
</div>
