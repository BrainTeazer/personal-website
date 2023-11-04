<script lang="ts">
  import NavbarItem from "./NavbarItem.svelte";
  import { theme } from "$lib/../stores";
  import { flip } from "svelte/animate";
  import type { NavbarItemProp } from "$lib/data/navbarItemProp";

  export let navbarItems: NavbarItemProp[];

  const classProps = "flex gap-1 hover:bg-red-300 p-2";
</script>

<div class="flex justify-center items-center self-start {$theme.background} m-4 shadow-card border-2 {$theme.border} {$theme.onBackground}">
  <div class="flex {$theme.background} {$theme.onBackground}">
    {#each navbarItems as navbarItem}
      <NavbarItem href="/{navbarItem.name}" name={navbarItem.name} {classProps} />
    {/each}
  </div>
</div>
