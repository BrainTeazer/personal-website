<script lang="ts">
  import { theme } from "$lib/../stores";
  import { page } from "$app/stores";
  import ChevronRight from "$lib/common/components/icons/ChevronRight.svelte";
  import Routes from "$lib/../routes";
  import { fontConfig } from "$lib/common/data/theme/typography";

  $: routeID = $page.route.id;

  // exclude Routes.Post
  const relevantRoutes = Object.entries(Routes).filter(
    (val) => val[1] !== Routes.Post,
  );
</script>

<div
  class="flex m-4 {fontConfig.medium} font-semibold capitalize {$$props.class}"
>
  {#each relevantRoutes as Route}
    <div class="flex items-center m-2 underline-offset-4 decoration-2">
      <!-- Link to Page -->
      <a
        aria-label="Link to {Route[0]}"
        href={Route[1]}
        class="opacity-100 hover:opacity-70"
        class:underline={routeID === Route[1]}
        title={Route[0]}
      >
        {Route[0]}
      </a>

      <!-- Add breadcrumb if in a post -->
      {#if routeID === Routes.Post && Route[1] === Routes.Posts}
        <ChevronRight />

        <!-- Post title -->
        <div class="opacity-50 underline underline-offset-4 decoration-2">
          {$page.data.content}
        </div>
      {/if}
    </div>
  {/each}
</div>
