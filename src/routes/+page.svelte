<script lang="ts">
  import Profile from "$lib/components/Profile.svelte";
  import profile from "./../data/profile";
  import skills from "./../data/skills";
  import projects from "./../data/projects";
  import experiences from "./../data/experiences";
  import id from "./../data/id";
  import Skills from "$lib/components/Skills.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import { MoonIcon, SunIcon } from "svelte-feather-icons";
  import { darkTheme } from "./../theme/darkTheme";
  import { lightTheme } from "./../theme/lightTheme";
  import { theme } from "./../stores";
  import Experiences from "$lib/components/Experiences.svelte";
  import { afterUpdate } from "svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import type { PageData } from "./$types";

  let themeValue: any;
  theme.subscribe((val) => {
    themeValue = val;
  });

  
  let y: any;

  let darkMode: boolean = themeValue == darkTheme ? true : false;

  const darkModeToggle = () => {
    darkMode = !darkMode;
    theme.set(darkMode ? darkTheme : lightTheme);
  };

  let profileContainer: any;
  let skillsContainer: any;
  let projectsContainer: any;
  let experiencesContainer: any;

  $: afterUpdate(() => {
    let containers = [profileContainer, skillsContainer, projectsContainer, experiencesContainer];

    if (y <= profileContainer?.offsetTop) {
      document.querySelector(".active")?.classList.remove("active");
      document.querySelector("a[href*=" + profileContainer.id + "]")?.classList.add("active");
    }

    containers.forEach((val) => {
      if (val?.offsetTop < y + 50) {
        document.querySelector(".active")?.classList.remove("active");
        document.querySelector("a[href*=" + val.id + "]")?.classList.add("active");
      }
    });
  });


  export let data : PageData;

</script>

<svelte:window bind:scrollY={y} />

{#await data.streamed.ready}
  <div class='font-ibm-plex-serif'>Loading...</div>
{:then value}
<div class="flex flex-col items-center gap-16 {themeValue.background} {themeValue.onBackground} pb-8 pt-16 sm:pt-32">
  <!-- {#if darkMode}
    <div on:click={darkModeToggle}>
      <SunIcon class="float-right right-0 m-8" />
    </div>
  {:else}
    <div on:click={darkModeToggle}>
      <MoonIcon class="float-right right-0 m-8" />
    </div>
  {/if} -->
  <Profile props={profile} id={id.profile} bind:el={profileContainer} />

  <Skills id={id.skills} imgHeight={100} imgWidth={100} {skills} bind:el={skillsContainer} />
  <Projects id={id.projects} imgHeight={100} imgWidth={100} {projects} bind:el={projectsContainer} />
  <Experiences id={id.experiences} {experiences} bind:el={experiencesContainer} />
</div>
<Sidebar {...id} />
{:catch error}
 {error.message}
{/await}
