<script lang="ts">
  import { theme } from "$lib/../stores";
  import type { NavbarItemProp } from "$lib/common/data/navbarItemProp";
  import NavbarItem from "$lib/common/components/NavbarItem.svelte";

  export let navbarItems: NavbarItemProp[];
</script>

<div class="flex m-4 w-full {$theme.background} {$theme.onBackground} last:border-r border-black">
  {#each navbarItems as navbarItem}
    <NavbarItem href="/{navbarItem.href}" classProps={"hover:text-red-500 text-xl font-semibold m-2 capitalize"} name={navbarItem.name} />
  {/each}
</div>
