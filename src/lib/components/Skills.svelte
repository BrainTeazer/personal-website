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
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 justify-items-center">
    {#each skills as skill}
      <Card title={skill.name} imgSrc={skill.imgSrc} {imgWidth} {imgHeight} />
    {/each}
  </div>
</Section>
