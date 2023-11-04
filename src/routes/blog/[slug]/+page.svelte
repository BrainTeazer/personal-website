<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import BlogTitle from "$lib/components/blog/BlogTitle.svelte";
  import navbarItemProp from "$lib/data/navbarItemProp";

  /** @type {import('./$types').PageData} */
  export let data: any;
</script>

<div class="flex flex-col items-center">
  <Navbar navbarItems={navbarItemProp} />
  <BlogTitle title={data.meta.title} />
  <div>
    <svelte:component this={data.content} />
  </div>
</div>
