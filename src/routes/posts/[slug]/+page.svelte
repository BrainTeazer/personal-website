<script lang="ts">
  import { theme } from "$lib/../stores";
  import Title from "$lib/common/components/Title.svelte";
  import PostCard from "$lib/posts/components/PostCard.svelte";

  /** @type {import('./$types').PageData} */
  export let data: any;
</script>

<!-- Get respective post if it exists -->
{#await import(`./../../../lib/posts/data/${data.content}.md`) then post}
  <PostCard
    title={post.metadata.title}
    date={post.metadata.date}
    content={post.default}
  />
{/await}
