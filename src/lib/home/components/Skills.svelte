<script lang="ts">
  import Card from "$lib/common/components/Card.svelte";
  import Section from "$lib/common/components/Section.svelte";
  import skills from "$lib/home/data/skills";

  export let id: string;

  let imgWidth: number = 100;
  let imgHeight: number = 100;
</script>

<Section title={"Skills"} {id}>
  <!-- Default size of each card is 10em and 10em is added as a buffer (e.g, 3 per row would be 30em + 10em = 40em) -->
  <div class="gap-4 mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {#each skills as skill}
      <Card class="p-4 m-2 flex flex-col items-center">
        <img
          src={skill.imgSrc}
          style="width:{imgWidth}px;height:{imgHeight}px"
          alt={skill.name}
        />
        <div class="font-medium text-3xl md:text-4xl">{skill.name}</div>
      </Card>
    {/each}
  </div>
</Section>
