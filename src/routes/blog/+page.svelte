<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import blogList from "$lib/data/blog/blogList";

  export let data: any;
</script>

<div class="flex flex-col items-center">
  <Navbar />
  {#each data.posts as post}
    <div>
      {post.title}
    </div>
  {/each}
</div>
