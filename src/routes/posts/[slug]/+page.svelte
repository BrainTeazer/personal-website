<script lang="ts">
  import { theme } from "$lib/../stores";
  import Title from "$lib/common/components/Title.svelte";

  /** @type {import('./$types').PageData} */
  export let data: any;
</script>

<!-- Get respective post if it exists -->
{#await import(`./../../../lib/posts/data/${data.content}.md`) then post}
  <div class="flex justify-center">
    <div class="flex flex-col justify-center w-3/4 bg-white {$theme.background} p-4 m-4 shadow-md shadow-black border-2 border-black">
      <!-- Title of Blog -->
      <Title title={post.metadata.title} isUnderlined={false} />

      <!-- Original Publish Date of Blog -->
      <div class="text-gray-400 mb-4">{post.metadata.date}</div>

      <!-- Blog Content -->
      <div>
        <svelte:component this={post.default} />
      </div>
    </div>
  </div>
{/await}
