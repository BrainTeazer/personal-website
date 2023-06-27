<script lang="ts">
  import type { projectProps } from "../../data/projects";
  import ProjectCard from "./ProjectCard.svelte";
  import Section from "./Section.svelte";

  export let id: string;
  export let projects: readonly projectProps[];
  export let imgHeight: number;
  export let imgWidth: number;
</script>

<Section title={"Projects"} {id}>
  <div class="grid grid-cols-project auto-rows-project grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
    {#each projects as project}
      <ProjectCard props={project} {imgHeight} {imgWidth} />
    {/each}
  </div>
</Section>
