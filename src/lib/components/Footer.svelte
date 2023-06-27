<script lang="ts">
  import { HomeIcon, CodeIcon, InfoIcon, BriefcaseIcon } from "svelte-feather-icons";
  import { flip } from "svelte/animate";
  import { theme } from "../../stores";
  import { darkTheme } from "../../theme/darkTheme";
  import type { SvelteComponent } from "svelte";

  export let profile: string;
  export let skills: string;
  export let projects: string;

  let y: number;

  let themeValue: any;
  theme.subscribe((val) => {
    themeValue = val;
  });

  $: hoverColor = themeValue == darkTheme ? "text-blue-500" : "text-orange-700";
  console.log(hoverColor);

  type footerItem = {
    icon: any;
    href: string;
  };
</script>

<svelte:window bind:scrollY={y} />

<div class="flex justify-center items-center">
  <div class="flex m-4 fixed top-1/2 -translate-y-1/2 flex-col left-0 {themeValue.background} p-0.5 gap-4 shadow-card border-2 {themeValue.border} {themeValue.onBackground} transition-all p-2">
    <a href="#{profile}" rel="noopener noreferrer"><HomeIcon class="hover:{hoverColor}" /></a>
    <a href="#{skills}" rel="noopener noreferrer"><CodeIcon class="hover:{hoverColor}" /></a>
    <a href="#{projects}" rel="noopener noreferrer"><BriefcaseIcon class="hover:{hoverColor}" /></a>
    <!-- <a href="#4" rel="noopener noreferrer"><InfoIcon class="hover:{hoverColor}" /></a> -->
  </div>
</div>
