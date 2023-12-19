<script lang="ts">
  import Section from "$lib/common/components/Section.svelte";
  import Card from "$lib/common/components/Card.svelte";
  import { Calendar } from "lucide-svelte";
  import { formatDate } from "$lib/home/functions/formatDate";
  import experiences from "$lib/home/data/experiences";
  import Tag from "$lib/common/components/Tag.svelte";
  import { fontConfig } from "$lib/common/data/theme/typography";

  export let id: string;
</script>

<Section title="Experiences" {id}>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 m-8">
    {#each experiences as experience}
      <Card class="flex flex-col text-left gap-2 p-2">
        <!-- Job Title -->
        {#if experience.jobLink}
          <a
            aria-label={experience.title}
            href={experience.jobLink}
            target="_blank"
            rel="noopener noreferrer"
            class="text-xl md:{fontConfig.heading} md:font-medium font-bold {fontConfig.headingHoverOpacity} max-w-fit"
            >{experience.title}</a
          >
        {:else}
          <div class="md:font-medium font-bold text-xl md:{fontConfig.heading}">
            {experience.title}
          </div>
        {/if}

        <!-- Company Name and Link -->
        <a
          aria-label={experience.organization.name}
          href={experience.organization.href}
          target="_blank"
          rel="noopener noreferrer"
          title={experience.organization.name}
          class="opacity-50 hover:underline"
        >
          {experience.organization.name}
        </a>

        <!-- Work Duration -->
        <div class="flex gap-2">
          <Calendar />
          {formatDate(experience.date[0])} - {formatDate(experience.date[1])}
        </div>

        <!-- Job tags -->
        <div class="flex flex-wrap gap-2 mt-4 max-w-[40em]">
          {#each experience.keywords as keyword}
            <Tag tag={keyword} />
          {/each}
        </div>
      </Card>
    {/each}
  </div>
</Section>
