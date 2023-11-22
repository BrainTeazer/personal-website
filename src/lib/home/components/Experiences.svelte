<script lang="ts">
  import type { experienceProp } from "$lib/home/data/experiences";
  import ExperienceCard from "$lib/home/components/ExperienceCard.svelte";
  import Section from "$lib/common/components/Section.svelte";
  export let id: string;
  export let experiences: readonly experienceProp[];
  export let el: any;
</script>

<Section title="Experiences" {id} bind:el>
  <div class="grid auto-rows-project grid-cols-1 xl:grid-cols-4 gap-4 mt-8">
    {#each experiences as experience}
      <ExperienceCard props={experience} classProps={"xl:col-span-2"} />
    {/each}
  </div>
</Section>
