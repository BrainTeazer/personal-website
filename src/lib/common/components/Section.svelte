<script lang="ts">
  import { theme } from "$lib/../stores";
  import Title from "$lib/common/components/Title.svelte";
  export let title: string;
  export let id: string;
</script>

<div class="flex flex-col items-center" {id}>
  <Title {title} class="{$theme.onBackground} font-black underline" />

  <slot />
</div>
