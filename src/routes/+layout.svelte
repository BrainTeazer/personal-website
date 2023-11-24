<script lang="ts">
  import "$lib/../app.css";
  import Navbar from "$lib/common/components/Navbar.svelte";
  import navbarItemProp from "$lib/common/data/navbarItemProp";
  import { darkTheme, lightTheme } from "$lib/common/data/theme/theme";
  import { theme } from "$lib/../stores";
  import { Moon, Sun } from "lucide-svelte";

  const darkModeToggle = () => {
    theme.set($theme == lightTheme ? darkTheme : lightTheme);
  };
</script>

<div class="flex flex-row items-center {$theme.background} {$theme.onBackground}">
  <Navbar navbarItems={navbarItemProp} />

  <!-- <button on:click|preventDefault={darkModeToggle}>
    <svelte:component this={$theme == lightTheme ? Moon : Sun} />
  </button> -->
</div>
<slot />
