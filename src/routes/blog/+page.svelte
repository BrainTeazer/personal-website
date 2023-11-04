<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import navbarItemProp from "$lib/data/navbarItemProp";
  export let data: any;
</script>

<div class="flex flex-col items-center">
  <Navbar navbarItems={navbarItemProp} />
  {#each data.posts as post}
    <a href="/blog/{post.slug}">
      {post.title}
    </a>
  {/each}
</div>
