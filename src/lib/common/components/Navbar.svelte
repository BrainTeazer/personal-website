<script lang="ts">
  import { theme } from "$lib/../stores";
  import { page } from "$app/stores";
  import { ChevronRight } from "lucide-svelte";
  import navbarItems from "$lib/common/data/navbarItems";
  import { fontConfig } from "$lib/common/data/theme/typography";

  const postsPath = navbarItems[1].href;
  $: urlPath = $page.url.pathname;

  $: isPostsPage = urlPath.slice(0, postsPath.length) === postsPath;
  $: isPost = urlPath.length > postsPath.length;

  const navbarItemClass: string = `opacity-100 hover:opacity-90 m-2`;
</script>

<div
  class="flex m-4 {fontConfig.medium} font-semibold capitalize underline-offset-4 decoration-2 {$$props.class}"
>
  <!-- Home -->
  <a
    aria-label="Link to Home Page"
    href={navbarItems[0].href}
    class={navbarItemClass}
    class:underline={urlPath == `${navbarItems[0].href}`}
    title={navbarItems[0].name}
  >
    {navbarItems[0].name}
  </a>

  <!-- Posts -->
  <div class="flex items-center">
    <a
      aria-label="Link to Posts Page"
      href={navbarItems[1].href}
      class="{navbarItemClass} mr-0"
      class:underline={isPostsPage}
      title={navbarItems[1].name}
    >
      {navbarItems[1].name}
    </a>

    <!-- Add breadcrumb if in a post -->
    {#if isPostsPage && isPost}
      <div class="flex items-center">
        <ChevronRight />

        <!-- Post title -->
        <div class="opacity-50">
          {urlPath.slice(postsPath.length + 1)}
        </div>
      </div>
    {/if}
  </div>
</div>
