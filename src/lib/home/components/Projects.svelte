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
  <div class="gap-4 mt-8 w-screen flex flex-wrap justify-center items-center">
    {#each projects as project}
      <ProjectCard props={project} {imgHeight} {imgWidth} classProps={"flex-1 h-8 basis-1/2"} />
    {/each}
  </div>
</Section>
