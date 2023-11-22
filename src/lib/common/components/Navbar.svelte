<script lang="ts">
  import { theme } from "$lib/../stores";
  import type { NavbarItemProp } from "$lib/common/data/navbarItemProp";
  import NavbarItem from "$lib/common/components/NavbarItem.svelte";

  export let navbarItems: NavbarItemProp[];
</script>

<div class="flex justify-center items-center self-start m-4 {$theme.background} shadow-card border-2 {$theme.border} {$theme.onBackground}">
  {#each navbarItems as navbarItem}
    <NavbarItem href="/{navbarItem.href}" classProps={"flex gap-1 hover:bg-red-300 p-2 capitalize"} name={navbarItem.name} />
  {/each}
</div>
