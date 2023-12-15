<script lang="ts">
  import Card from "$lib/common/components/Card.svelte";
  import { fontConfig } from "$lib/common/data/theme/typography";
  import { theme } from "../../stores";
  export let data: any;
</script>

<div
  class="flex justify-center {$theme.background} {$theme.onBackground} h-screen"
>
  <div class="flex flex-col items-start w-3/4 gap-2">
    {#each data.posts as post}
      <a aria-label="Link to Post" href="/posts/{post.slug}">
        <Card class="m-2 p-2">
          <div class="{fontConfig.heading} font-bold">
            {post.title}
          </div>
        </Card>
      </a>
    {/each}
  </div>
</div>
