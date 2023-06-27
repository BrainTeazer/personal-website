<script lang="ts">
  import { theme } from "../../stores";
  import Title from "./Title.svelte";
  export let title: string;
  export let id: string;

  let themeValue: any;
  theme.subscribe((val) => {
    themeValue = val;
  });
</script>

<div class="flex flex-col items-center" {id}>
  <Title {title} />
  <slot />
</div>
