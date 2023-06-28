<script lang="ts">
  import { HomeIcon, CodeIcon, InfoIcon, BriefcaseIcon, BookIcon } from "svelte-feather-icons";
  import { theme } from "../../stores";
  import { darkTheme } from "../../theme/darkTheme";
  export let profile: string;
  export let skills: string;
  export let projects: string;
  export let experiences: string;

  let themeValue: any;
  theme.subscribe((val) => {
    themeValue = val;
  });

  // $: hoverColor = themeValue == darkTheme ? "text-blue-500" : "text-orange-700";
  let hoverColor = "text-blue-500";

  const scrollIntoView = ({ currentTarget }: any) => {
    const scrollToElement = document.querySelector(currentTarget.getAttribute("href"));

    if (!scrollToElement) return;

    scrollToElement.scrollIntoView({
      behavior: "smooth",
    });
  };
</script>

<div class="flex justify-center items-center">
  <div
    class="flex m-4 fixed bottom-0 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:flex-col lg:left-0 {themeValue.background} p-0.5 gap-4 shadow-card border-2 {themeValue.border} {themeValue.onBackground} transition-all p-2"
  >
    <a href="#{profile}" on:click|preventDefault={scrollIntoView} rel="noopener noreferrer"><HomeIcon class="hover:text-blue-700" /></a>
    <a href="#{skills}" on:click|preventDefault={scrollIntoView} rel="noopener noreferrer"><BookIcon class="hover:text-blue-700" /></a>
    <a href="#{projects}" on:click|preventDefault={scrollIntoView} rel="noopener noreferrer"><CodeIcon class="hover:text-blue-700" /></a>
    <a href="#{experiences}" on:click|preventDefault={scrollIntoView} rel="noopener noreferrer"><BriefcaseIcon class="hover:text-blue-700" /></a>
  </div>
</div>
