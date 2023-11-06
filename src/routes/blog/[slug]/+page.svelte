<script lang="ts">
  import BlogTitle from "$lib/components/blog/BlogTitle.svelte";
  import { theme } from "$lib/../stores";

  /** @type {import('./$types').PageData} */
  export let data: any;
</script>

<div class="flex flex-col items-center">
  <div class="flex flex-col items-start w-3/4 bg-white {$theme.background} p-4 m-4 shadow-md shadow-black border-2 {$theme.border} gap-4">
    <div class="flex flex-col items-start justify-center">
      <BlogTitle title={data.meta.title} />
      <div class="text-gray-400">{data.meta.date}</div>
    </div>
    <div>
      <svelte:component this={data.content} />
    </div>
  </div>
</div>
