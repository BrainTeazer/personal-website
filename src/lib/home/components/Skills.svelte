<script lang="ts">
  import Card from "$lib/common/components/Card.svelte";
  import Section from "$lib/common/components/Section.svelte";
  import skills from "$lib/home/data/skills";

  export let id: string;
</script>

<Section title={"Languages, Frameworks & Tools"} {id}>
  <!-- Default size of each card is 10em and 10em is added as a buffer (e.g, 3 per row would be 30em + 10em = 40em) -->
  <div class="gap-4 mt-8 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
    {#each skills as skill}
      <Card class="p-4 m-2 flex flex-col items-center shadow-none">
        <div class="font-medium text-2xl md:text-3xl">{skill}</div>
      </Card>
    {/each}
  </div>
</Section>
