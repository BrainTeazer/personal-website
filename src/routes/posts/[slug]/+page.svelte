<script lang="ts">
  import { theme } from "$lib/../stores";
  import Title from "$lib/common/components/Title.svelte";

  /** @type {import('./$types').PageData} */
  export let data: any;
</script>

{#await import(`./../../../lib/posts/data/${data.content}.md`) then post}
  <div class="flex flex-col items-center">
    <div class="flex flex-col items-start w-3/4 bg-white {$theme.background} p-4 m-4 shadow-md shadow-black border-2 {$theme.border} gap-4">
      <div class="flex flex-col items-start justify-center">
        <Title title={post.metadata.title} isUnderlined={false} />
        <div class="text-gray-400">{post.metadata.date}</div>
      </div>
      <div>
        <svelte:component this={post.default} />
      </div>
    </div>
  </div>
{/await}
