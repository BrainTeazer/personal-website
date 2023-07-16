<script lang="ts">
  import type { projectProps } from "$lib/data/projects";
  import { theme } from "$lib/../stores";
  import Card from "./Card.svelte";
  import Tag from "./Tag.svelte";

  export let props: projectProps;

  export let classProps: string;

  export let imgWidth: number;
  export let imgHeight: number;

  let themeValue: any;
  theme.subscribe((val) => {
    themeValue = val;
  });
</script>

<Card title={props.title} imgSrc={props.imgSrc} {imgHeight} {imgWidth} classProp="h-96 p-8 max-w-xs sm:h-auto lg:h-96 md:max-w-xl {classProps}" imgProp={"mt-8"}>
  <div class="font-ibm-plex-serif {themeValue.onSecondary} text-center">{props.description}</div>
  <a href={props.source} target="_blank" rel="noopener noreferrer" class="hover:underline text-stone-400 hover:decoration-indigo-500 hover:text-blue-700 mt-5 transition-all duration-300 ease-linear">
    Source
  </a>
  <div class="flex gap-4 mt-4 lg:mt-auto flex-wrap justify-center">
    {#each props.languages as language}
      <Tag tag={language} />
    {/each}
  </div>
</Card>
