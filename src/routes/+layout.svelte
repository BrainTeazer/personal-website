<script lang="ts">
  import "$lib/../app.css";
  import Navbar from "$lib/common/components/Navbar.svelte";
  import { darkTheme, lightTheme } from "$lib/common/data/theme/theme";
  import { theme } from "$lib/../stores";
  import Moon from "$lib/common/components/icons/Moon.svelte";
  import Sun from "$lib/common/components/icons/Sun.svelte";
  import { fontConfig } from "$lib/common/data/theme/typography";

  const darkModeToggle = () => {
    theme.set($theme == lightTheme ? darkTheme : lightTheme);
  };
</script>

<div class="flex {$theme.onBackground}">
  <Navbar />
  <!-- <button
    aria-label="Toggle theme"
    on:click|preventDefault={darkModeToggle}
    class={fontConfig.headingHoverOpacity}
  >
    <svelte:component this={$theme == lightTheme ? Moon : Sun} />
  </button> -->
</div>

<slot />
