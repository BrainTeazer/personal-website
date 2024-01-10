<script lang="ts">
  import { theme } from "$lib/../stores";
  import Title from "$lib/common/components/Title.svelte";

  export let title: string;
  export let date: string;
  export let content: any;
</script>

<div
  class="h-[100vh] {$theme.background} {$theme.onBackground} {$$props.class}"
>
  <div class="flex justify-center">
    <!-- Container -->
    <div
      class="flex flex-col justify-center w-7/8 md:w-4/5 {$theme.surface} {$theme.onSurface} p-4 m-4 border-2 {$theme.border}"
    >
      <!-- Title of Blog -->
      <Title {title} />

      <!-- Original Publish Date of Blog -->
      <div class="text-gray-400 mb-4 mt-2">{date}</div>

      <!-- Blog Content -->
      <div class="text-lg md:text-2xl">
        <svelte:component this={content} />
      </div>
    </div>
  </div>
</div>
