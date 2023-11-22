<script lang="ts">
  import type { projectProps } from "$lib/home/data/projects";
  import ProjectCard from "$lib/home/components/ProjectCard.svelte";
  import Section from "$lib/common/components/Section.svelte";

  export let id: string;
  export let projects: readonly projectProps[];

  export let imgHeight: number;
  export let imgWidth: number;
  export let el: any;
</script>

<Section title={"Projects"} {id} bind:el>
  <div class="gap-4 mt-8 grid auto-rows-project grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
    {#each projects as project}
      <ProjectCard props={project} {imgHeight} {imgWidth} classProps={"col-span-1 md:col-span-2 xl:last:col-end-4"} />
    {/each}
  </div>
</Section>
