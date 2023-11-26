<script lang="ts">
  import Section from "$lib/common/components/Section.svelte";
  import Card from "$lib/common/components/Card.svelte";
  import { Calendar } from "lucide-svelte";
  import { formatDate } from "../functions/formatDate";
  import experiences from "$lib/home/data/experiences";
  import Tag from "$lib/common/components/Tag.svelte";
  import Link from "$lib/common/components/Link.svelte";

  export let id: string;
</script>

<Section title="Experiences" {id}>
  <div class="gap-4 m-8 grid grid-cols-1 md:grid-cols-2">
    {#each experiences as experience}
      <Card class="p-2 flex flex-col text-left gap-2">
        <!-- Job Title -->
        {#if experience.jobLink}
          <a href={experience.jobLink} target="_blank" rel="noopener noreferrer" class="font-medium text-4xl hover:opacity-10">{experience.title}</a>
        {:else}
          <div class="font-medium text-4xl">{experience.title}</div>
        {/if}

        <!-- Company Name and Link -->
        <Link href={experience.organization.href} class="text-[#909090] hover:underline hover:decoration-indigo-500 hover:text-blue-700">
          {experience.organization.name}
        </Link>

        <!-- Work Duration -->
        <div class="flex gap-2">
          <Calendar />
          {formatDate(experience.date[0])} - {experience.date.length == 2 ? formatDate(experience.date[1]) : "Present"}
        </div>

        <!-- Job tags -->
        <div class="flex flex-wrap gap-2 mt-4 max-w-[40em]">
          {#each experience.keywords as keyword}
            <Tag class="opacity-30" tag={keyword} />
          {/each}
        </div>
      </Card>
    {/each}
  </div>
</Section>
