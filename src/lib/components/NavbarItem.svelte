<script lang="ts">
  import { capitalizeFirstLetter } from "$lib/functions/capitalizeFirstLetter";
  import Link from "./Link.svelte";

  export let href: string;

  export let classProps: string;
  export let name: string;
  export let target = "";
</script>

<Link {href} {classProps} {target} title={capitalizeFirstLetter(name)}>{capitalizeFirstLetter(name)}</Link>
