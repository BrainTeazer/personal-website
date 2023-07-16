<script lang="ts">
  import { theme } from "$lib/../stores";
  import Title from "./Title.svelte";
  export let title: string;
  export let id: string;
  export let el: any;

  let themeValue: any;
  theme.subscribe((val) => {
    themeValue = val;
  });
</script>

<div class="flex flex-col items-center" {id} bind:this={el}>
  <Title {title} />
  <slot />
</div>
