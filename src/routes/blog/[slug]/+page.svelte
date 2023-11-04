<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import BlogTitle from "$lib/components/blog/BlogTitle.svelte";
  import navbarItemProp from "$lib/data/navbarItemProp";

  /** @type {import('./$types').PageData} */
  export let data: any;
</script>

<div class="flex flex-col items-center">
  <Navbar navbarItems={navbarItemProp} />
  <BlogTitle title={data.meta.title} />
  <div class="w-3/4">
    <svelte:component this={data.content} />
  </div>
</div>
