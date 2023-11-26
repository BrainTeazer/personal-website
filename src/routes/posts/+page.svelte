<script lang="ts">
  import Card from "$lib/common/components/Card.svelte";
  export let data: any;
</script>

<div class="flex justify-center">
  <div class="flex flex-col items-start w-3/4 gap-2">
    {#each data.posts as post}
      <a href="/posts/{post.slug}">
        <Card class="m-2 p-2">
          <div class="text-4xl font-bold">
            {post.title}
          </div>
        </Card>
      </a>
    {/each}
  </div>
</div>
