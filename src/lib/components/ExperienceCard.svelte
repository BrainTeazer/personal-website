<script lang="ts">
  import { CalendarIcon } from "svelte-feather-icons";
  import type { experienceProp } from "../../data/experiences";
  import Card from "./Card.svelte";
  import Tag from "./Tag.svelte";

  export let props: experienceProp;
  const formatDate = (date: Date) => {
    return `${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`;
  };
</script>

<Card title={props.title} classProp={"h-auto lg:h-96 p-8 max-w-xs lg:max-w-experience"}>
  <div class="flex flex-col lg:flex-row gap-2 justify-between w-full">
    <div class="flex gap-2 order-1 lg:order-none">
      <CalendarIcon />
      {formatDate(props.date[0])} - {formatDate(props.date[1])}
    </div>
    <a href={props.organization.href} target="_blank" rel="noopener noreferrer" class="text-zinc-500 hover:text-zinc-700">
      {props.organization.name}
    </a>
  </div>

  <ul class="list-disc list-inside self-start p-4">
    {#each props.description as description}
      <li class="mt-4">{description}</li>
    {/each}
  </ul>

  <div class="flex gap-4 mt-4 lg:mt-auto flex-wrap justify-center">
    {#each props.keywords as keyword}
      <Tag tag={keyword} />
    {/each}
  </div>
</Card>
