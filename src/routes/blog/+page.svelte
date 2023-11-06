<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  export let data: any;
</script>

<div class="flex flex-col items-center">
  <div class="flex flex-col items-center w-3/4">
    {#each data.posts as post}
      <a href="/blog/{post.slug}" class="self-start">
        <Card title={post.title} classProp={"m-2"} />
      </a>
    {/each}
  </div>
</div>
