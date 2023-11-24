<script lang="ts">
  import type { projectProps } from "$lib/home/data/projects";
  import { theme } from "$lib/../stores";
  import Card from "$lib/common/components/Card.svelte";
  import Tag from "$lib/common/components/Tag.svelte";
  import Link from "$lib/common/components/Link.svelte";

  export let props: projectProps;

  export let classProps: string;

  export let imgWidth: number;
  export let imgHeight: number;
</script>

<Card title={props.title} imgSrc={props.imgSrc} {imgHeight} {imgWidth} classProp="min-h-[24em] h-min p-8 max-w-xs md:max-w-xl {classProps}" imgProp={"mt-8"}>
  <!-- Project Description -->
  <div class="font-ibm-plex-serif {$theme.onSecondary} text-center">{props.description}</div>

  <!-- Link to source of project -->
  <Link href={props.source} classProps="hover:underline text-stone-400 hover:decoration-indigo-500 hover:text-blue-700 mt-5">Source</Link>

  <!-- Tags / Keywords of project -->
  <div class="flex gap-4 mt-4 lg:mt-auto flex-wrap justify-center last:pb-8">
    {#each props.languages as language}
      <Tag tag={language} />
    {/each}
  </div>
</Card>
