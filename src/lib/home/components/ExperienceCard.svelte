<script lang="ts">
  import { Calendar } from "lucide-svelte";
  import type { experienceProp } from "$lib/home/data/experiences";
  import Card from "$lib/common/components/Card.svelte";
  import Tag from "$lib/common/components/Tag.svelte";
  import { formatDate } from "$lib/home/functions/formatDate";
  import Link from "$lib/common/components/Link.svelte";

  export let props: experienceProp;
  export let classProps: string = "";
</script>

<Card title={props.title} classProp="h-auto sm:h-96 p-8 max-w-xs sm:max-w-[37em] font-ibm-plex-serif {classProps}">
  <div class="flex flex-col sm:flex-row gap-2 justify-between w-full">
    <!-- Work Duration -->
    <div class="flex gap-2 order-1 justify-center sm:order-none sm:justify-start">
      <Calendar />
      {formatDate(props.date[0])} - {props.date.length == 2 ? formatDate(props.date[1]) : "Present"}
    </div>

    <!-- Company Name and Link -->
    <Link href={props.organization.href} classProps="text-zinc-500 hover:underline hover:decoration-indigo-500 hover:text-blue-700">
      {props.organization.name}
    </Link>
  </div>

  <!-- Job Description -->
  <ul class="list-disc list-inside self-start p-4 text-center">
    {#each props.description as description}
      <li class="mt-4">{description}</li>
    {/each}
  </ul>

  <!-- Job tags -->
  <div class="flex gap-4 mt-4 lg:mt-auto flex-wrap justify-center">
    {#each props.keywords as keyword}
      <Tag tag={keyword} />
    {/each}
  </div>
</Card>
