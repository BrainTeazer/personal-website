<script lang="ts">
  import type { experienceProp } from "../../data/experiences";
  import ExperienceCard from "./ExperienceCard.svelte";
  import Section from "./Section.svelte";
  export let id: string;
  export let experiences: readonly experienceProp[];
  export let el: any;
</script>

<Section title="Experiences" {id} bind:el>
  <div class="grid grid-cols-project auto-rows-project grid-cols-1 sm:grid-cols-1 xl:grid-cols-4 gap-4 mt-8">
    {#each experiences as experience}
      <ExperienceCard props={experience} classProps={"last:self-center xl:col-span-2 xl:last:col-end-4"} />
    {/each}
  </div>
</Section>
