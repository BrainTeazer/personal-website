<script lang="ts">
  import { CalendarIcon } from "svelte-feather-icons";
  import type { experienceProp } from "$lib/data/experiences";
  import Card from "$lib/components/Card.svelte";
  import Tag from "$lib/components/Tag.svelte";
  import { formatDate } from "$lib/functions/formatDate";
  import Link from "$lib/components/Link.svelte";

  export let props: experienceProp;
  export let classProps: string = "";
</script>

<Card title={props.title} classProp="h-auto sm:h-96 p-8 max-w-xs sm:max-w-experience {classProps}">
  <div class="flex flex-col sm:flex-row gap-2 justify-between w-full">
    <div class="flex gap-2 order-1 font-ibm-plex-serif justify-center sm:order-none sm:justify-start">
      <CalendarIcon />
      {#if props.date.length == 2}
        {formatDate(props.date[0])} - {formatDate(props.date[1])}
      {:else if props.date.length == 1}
        {formatDate(props.date[0])} - Present
      {/if}
    </div>
    <Link href={props.organization.href} classProps="font-ibm-plex-serif text-zinc-500 hover:text-zinc-700">
      {props.organization.name}
    </Link>
  </div>

  <!-- Job Description -->
  <ul class="list-disc list-inside self-start p-4 font-ibm-plex-serif text-center">
    {#each props.description as description}
      <li class="mt-4">{description}</li>
    {/each}
  </ul>

  <!-- Job keywords -->
  <div class="flex gap-4 mt-4 lg:mt-auto flex-wrap justify-center">
    {#each props.keywords as keyword}
      <Tag tag={keyword} />
    {/each}
  </div>
</Card>
