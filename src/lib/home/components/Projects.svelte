<script lang="ts">
  import Card from "$lib/common/components/Card.svelte";
  import Section from "$lib/common/components/Section.svelte";
  import Tag from "$lib/common/components/Tag.svelte";
  import projects from "$lib/home/data/projects";

  export let id: string;
</script>

<Section title={"Projects"} {id}>
  <div class="gap-4 m-8 grid grid-cols-1 md:grid-cols-1 lg:md:grid-cols-2">
    {#each projects as project}
      <Card class="p-2 gap-4 flex flex-col text-left">
        <!-- Title -->
        <a href={project.source} class="text-4xl font-semibold hover:opacity-10">
          {project.title}
        </a>

        <!-- Description -->
        <div class="text-[#909090]">
          {project.description}
        </div>

        <!-- Toolset -->
        <div class="gap-2 flex flex-wrap">
          {#each project.toolset as tool}
            <Tag class="opacity-30" tag={tool} />
          {/each}
        </div>
      </Card>
    {/each}
  </div>
</Section>
