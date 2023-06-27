<script lang="ts">
  import type { projectProps } from "../../data/projects";
  import { theme } from "../../stores";
  import Card from "./Card.svelte";

  export let props: projectProps;

  export let imgWidth: number;
  export let imgHeight: number;

  let themeValue: any;
  theme.subscribe((val) => {
    themeValue = val;
  });
</script>

<Card title={props.title} imgSrc={props.imgSrc} {imgHeight} {imgWidth} classProp={"h-96 p-8 max-w-xl"}>
  <div class="font-ibm-plex-serif {themeValue.onSecondary} text-center">{props.description}</div>
  <a href={props.source} target="_blank" rel="noopener noreferrer" class="underline decoration-indigo-500 hover:decoration-2"> Source </a>
</Card>
