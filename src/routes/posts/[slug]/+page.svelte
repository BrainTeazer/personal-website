<script lang="ts">
  import { theme } from "$lib/../stores";
  import Title from "$lib/common/components/Title.svelte";

  /** @type {import('./$types').PageData} */
  export let data: any;
</script>

<!-- Get respective post if it exists -->
{#await import(`./../../../lib/posts/data/${data.content}.md`) then post}
  <div class="h-[100vh] {$theme.background} {$theme.onBackground}">
    <div class="flex justify-center">
      <!-- Container -->
      <div
        class="flex flex-col justify-center w-7/8 md:w-4/5 {$theme.surface} {$theme.onSurface} p-4 m-4 border-2 {$theme.border}"
      >
        <!-- Title of Blog -->
        <Title title={post.metadata.title} />

        <!-- Original Publish Date of Blog -->
        <div class="text-gray-400 mb-4 mt-2">{post.metadata.date}</div>

        <!-- Blog Content -->

        <div class="text-lg md:text-2xl">
          <svelte:component this={post.default} />
        </div>
      </div>
    </div>
  </div>
{/await}
