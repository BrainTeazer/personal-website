<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";

  export let data: any;
</script>

<div class="flex flex-col items-center">
  <Navbar />
  {#each data.posts as post}
    <a href="/blog/{post.slug}">
      {post.title}
    </a>
  {/each}
</div>
