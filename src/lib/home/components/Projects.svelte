<script lang="ts">
  import Card from "$lib/common/components/Card.svelte";
  import Section from "$lib/common/components/Section.svelte";
  import Tag from "$lib/common/components/Tag.svelte";
  import { fontConfig } from "$lib/common/data/theme/typography";
  import projects from "$lib/home/data/projects";

  export let id: string;
</script>

<Section title={"Projects"} {id}>
  <div class="grid grid-cols-1 lg:md:grid-cols-2 text-left gap-4 m-8">
    {#each projects as project}
      <Card class="flex flex-col p-2 gap-4">
        <!-- Title -->
        <a
          href={project.source}
          class="{fontConfig.heading} font-semibold {fontConfig.headingHoverOpacity} max-w-fit"
        >
          {project.title}
        </a>

        <!-- Description -->
        <div class="opacity-50">
          {project.description}
        </div>

        <!-- Toolset -->
        <div class="flex flex-wrap gap-2">
          {#each project.toolset as tool}
            <Tag tag={tool} />
          {/each}
        </div>
      </Card>
    {/each}
  </div>
</Section>
