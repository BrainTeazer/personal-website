<script lang="ts">
  import Card from "$lib/common/components/Card.svelte";
  export let data: any;
</script>

<div class="flex justify-center">
  <div class="flex flex-col items-start w-3/4 gap-2">
    {#each data.posts as post}
      <a href="/posts/{post.slug}">
        <Card title={post.title} classProp={"m-2"} />
      </a>
    {/each}
  </div>
</div>
