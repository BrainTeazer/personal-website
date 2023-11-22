<script lang="ts">
  import "$lib/../app.css";
  import Navbar from "$lib/common/components/Navbar.svelte";
  import navbarItemProp from "$lib/common/data/navbarItemProp";
  import { darkTheme, lightTheme } from "$lib/common/data/theme/theme";
  import { theme } from "$lib/../stores";
  import { MoonIcon, SunIcon } from "svelte-feather-icons";

  const darkModeToggle = () => {
    theme.set($theme == lightTheme ? darkTheme : lightTheme);
  };
</script>

<div class="flex flex-row items-center {$theme.background} {$theme.onBackground}">
  <Navbar navbarItems={navbarItemProp} />

  <!-- <button on:click|preventDefault={darkModeToggle}>
    <svelte:component this={$theme == lightTheme ? MoonIcon : SunIcon} />
  </button> -->
</div>
<slot />
