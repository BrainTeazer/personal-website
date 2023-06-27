<script lang="ts">
  import type { experienceProp } from "../../data/experiences";
  import ExperienceCard from "./ExperienceCard.svelte";
  import Section from "./Section.svelte";
  export let id: string;
  export let experiences: readonly experienceProp[];
</script>

<Section title="Experiences" {id}>
  <div class="grid grid-cols-project auto-rows-project grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
    {#each experiences as experience}
      <ExperienceCard props={experience} />
    {/each}
  </div>
</Section>
