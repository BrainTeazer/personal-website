<script lang="ts">
  import type { experienceProp } from "$lib/data/experiences";
  import ExperienceCard from "./ExperienceCard.svelte";
  import Section from "./Section.svelte";
  export let id: string;
  export let experiences: readonly experienceProp[];
  export let el: any;
</script>

<Section title="Experiences" {id} bind:el>
  <!-- <div class="flex flex-wrap gap-4 mt-8 justify-center items-center w-full"> -->
  <div class="grid auto-rows-project grid-cols-1 xl:grid-cols-4 gap-4 mt-8">
    {#each experiences as experience}
      <!-- <ExperienceCard props={experience} classProps={"h-auto w-full"} /> -->
      <ExperienceCard props={experience} classProps={"xl:col-span-2"} />
      <!-- <ExperienceCard props={experience} classProps={"xl:col-span-2 xl:last:col-end-3"} /> -->
    {/each}
  </div>
</Section>
