<script lang="ts">
  import Link from "$lib/common/components/Link.svelte";

  export let href: string;
  export let name: string;
  export let classProps: string = "";
</script>

<Link {href} {classProps} target="" title={name}>
  {name}
</Link>
