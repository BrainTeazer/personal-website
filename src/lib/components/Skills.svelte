<script lang="ts">
  import type { skillProps } from "../../data/skills";
  import Card from "./Card.svelte";
  import Section from "./Section.svelte";

  export let id: string;
  export let skills: readonly skillProps[];
  export let imgWidth: number;
  export let imgHeight: number;
</script>

<Section title={"Skills"} {id}>
  <!-- <div class="flex lg:flex-row flex-wrap justify-center items-center gap-2 mt-8"> -->
  <div class="grid grid-cols-skill auto-rows-skill grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
    {#each skills as skill}
      <Card title={skill.name} imgSrc={skill.imgSrc} {imgWidth} {imgHeight} classProp={"h-auto p-4 max-w-xs lg:max-w-xl"} />
    {/each}
  </div>
</Section>
