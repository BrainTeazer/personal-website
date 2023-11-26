<script lang="ts">
  import { theme } from "$lib/../stores";
  import { page } from "$app/stores";
  import { ChevronRight } from "lucide-svelte";
  import navbarItems from "$lib/common/data/navbarItems";

  const postsPath = navbarItems[1].href;
  $: urlPath = $page.url.pathname;

  $: isPostsPage = urlPath.slice(0, postsPath.length) === postsPath;
  $: isPost = urlPath.length > postsPath.length;

  const navbarItemClass: string = "hover:opacity-10 m-2";

  console.log(navbarItems[0]);
</script>

<div class="flex m-4 text-xl font-semibold capitalize decoration-black underline-offset-4 decoration-2 {$theme.background} {$theme.onBackground} {$$props.class}">
  <!-- Home -->
  <a href={navbarItems[0].href} class={navbarItemClass} class:underline={urlPath == `${navbarItems[0].href}`} rel="noopener noreferrer" title={navbarItems[0].name}>
    {navbarItems[0].name}
  </a>

  <!-- Posts -->
  <div class="flex items-center">
    <a href={navbarItems[1].href} class="{navbarItemClass} mr-0" class:underline={isPostsPage} rel="noopener noreferrer" title={navbarItems[1].name}>
      {navbarItems[1].name}
    </a>

    <!-- Add breadcrumb if in a post -->
    {#if isPostsPage && isPost}
      <div class="flex items-center">
        <ChevronRight />

        <!-- Post title -->
        <div class="text-[#909090]">
          {urlPath.slice(postsPath.length + 1)}
        </div>
      </div>
    {/if}
  </div>
</div>
