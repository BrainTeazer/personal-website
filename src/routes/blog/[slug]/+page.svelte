<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import BlogTitle from "$lib/components/blog/BlogTitle.svelte";

  /** @type {import('./$types').PageData} */
  export let data: any;
</script>

<div class="flex flex-col items-center">
  <Navbar />
  <BlogTitle title={data.title} />
  <div>{@html data.content}</div>
</div>
