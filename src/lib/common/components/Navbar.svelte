<script lang="ts">
  import { theme } from "$lib/../stores";
  import type { NavbarItemProp } from "$lib/common/data/navbarItemProp";
  import { page } from "$app/stores";

  export let navbarItems: NavbarItemProp[];
</script>

<div class="flex m-4 {$theme.background} {$theme.onBackground}">
  {#each navbarItems as navbarItem}
    <a
      href="/{navbarItem.href}"
      class="decoration-black underline-offset-4 decoration-2 hover:text-red-500 text-xl font-semibold m-2 capitalize"
      class:underline={$page.url.pathname == `/${navbarItem.href}`}
      rel="noopener noreferrer"
      title={navbarItem.name}
    >
      {navbarItem.name}
    </a>
  {/each}
</div>
