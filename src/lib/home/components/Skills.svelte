<script lang="ts">
  import type { skillProps } from "$lib/home/data/skills";
  import Card from "$lib/common/components/Card.svelte";
  import Section from "$lib/common/components/Section.svelte";

  export let id: string;
  export let skills: readonly skillProps[];
  export let imgWidth: number;
  export let imgHeight: number;
  export let el: any;
</script>

<Section title={"Skills"} {id} bind:el>
  <!-- Default size of each card is 10em and 10em is added as a buffer (e.g, 3 per row would be 30em + 10em = 40em) -->
  <div class="flex flex-wrap justify-center items-center gap-4 mt-8 w-[30em] lg:w-[50em] sm:w-[40em]">
    {#each skills as skill}
      <Card title={skill.name} imgSrc={skill.imgSrc} {imgWidth} {imgHeight} classProp={"h-auto w-0 p-4 min-w-0 max-w-1/3 w-1/3 sm:max-w-1/4 sm:w-1/4 lg:max-w-1/5 lg:w-1/5"} imgProp="w-24" />
    {/each}
  </div>
</Section>
