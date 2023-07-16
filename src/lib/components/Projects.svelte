<script lang="ts">
  import type { projectProps } from "$lib/data/projects";
  import ProjectCard from "./ProjectCard.svelte";
  import Section from "./Section.svelte";

  export let id: string;
  export let projects: readonly projectProps[];

  export let imgHeight: number;
  export let imgWidth: number;
  export let el: any;
</script>

<Section title={"Projects"} {id} bind:el>
  <div class="grid grid-cols-project auto-rows-project grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
    {#each projects as project}
      <ProjectCard props={project} {imgHeight} {imgWidth} classProps={"last:self-center md:col-span-2 lg:col-span-2 xl:col-span-2 xl:last:col-end-4"} />
    {/each}
  </div>
</Section>
