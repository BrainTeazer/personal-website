<script lang="ts">
  import { theme } from "$lib/../stores";
  import { fontConfig } from "$lib/common/data/theme/typography";
  import sections from "../data/sections";
  import { scrollIntoView } from "../functions/scrollIntoView";
</script>

<div
  class="flex m-4 rounded-[30px] fixed bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:flex-col md:left-0 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:flex-col lg:left-0 {$theme.surface} gap-4 border-2 {$theme.border} {$theme.onSurface} p-2"
>
  {#each sections as section}
    <a
      href="#{section.id}"
      on:click|preventDefault={scrollIntoView}
      class={fontConfig.headingHoverOpacity}
      title={section.id}
    >
      <svelte:component this={section.icon} />
    </a>
  {/each}
</div>
