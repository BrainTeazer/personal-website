<script lang="ts">
  import type { skillProps } from "$lib/data/skills";
  import Card from "$lib/components/Card.svelte";
  import Section from "$lib/components/Section.svelte";

  export let id: string;
  export let skills: readonly skillProps[];
  export let imgWidth: number;
  export let imgHeight: number;
  export let el: any;
</script>

<Section title={"Skills"} {id} bind:el>
  <div class="flex flex-wrap justify-center items-center w-skills sm:w-skillsSm lg:w-skillsLg gap-4 mt-8">
    {#each skills as skill}
      <Card
        title={skill.name}
        imgSrc={skill.imgSrc}
        {imgWidth}
        {imgHeight}
        classProp={"h-auto w-0 p-4 min-w-0 max-w-skill w-skill sm:max-w-skillSm sm:w-skillSm lg:max-w-skillLg lg:w-skillLg grow"}
        imgProp="w-24"
      />
    {/each}
  </div>
</Section>
