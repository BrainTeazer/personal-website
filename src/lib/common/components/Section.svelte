<script lang="ts">
  import { theme } from "$lib/../stores";
  import Title from "$lib/common/components/Title.svelte";
  export let title: string;
  export let id: string;
  export let el: any;
</script>

<div class="flex flex-col items-center" {id} bind:this={el}>
  <Title {title} />
  <slot />
</div>
