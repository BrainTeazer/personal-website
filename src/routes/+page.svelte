<script lang="ts">
  import Profile from "$lib/components/Profile.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import profile from "./../data/profile";
  import skills from "./../data/skills";
  import projects from "./../data/projects";
  import id from "./../data/id";
  import Skills from "$lib/components/Skills.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import { MoonIcon, SunIcon } from "svelte-feather-icons";
  import { darkTheme } from "./../theme/darkTheme";
  import { lightTheme } from "./../theme/lightTheme";
  import { theme } from "./../stores";

  let themeValue: any;
  theme.subscribe((val) => {
    themeValue = val;
  });

  let darkMode: boolean = themeValue == darkTheme ? true : false;

  const darkModeToggle = () => {
    darkMode = !darkMode;
    theme.set(darkMode ? darkTheme : lightTheme);
  };
</script>

<!-- <Card title={name} date={name} description={name} /> -->

<div class="flex flex-col items-center gap-16 {themeValue.background} {themeValue.onBackground} pb-8">
  {#if darkMode}
    <div on:click={darkModeToggle}>
      <SunIcon class="float-right right-0 m-8" />
    </div>
  {:else}
    <div on:click={darkModeToggle}>
      <MoonIcon class="float-right right-0 m-8" />
    </div>
  {/if}

  <Profile props={profile} id={id.profile} />
  <Skills id={id.skills} imgHeight={100} imgWidth={100} {skills} />
  <Projects id={id.projects} imgHeight={100} imgWidth={100} {projects} />

  <!-- <ProjectCard title={profile.name} description={profile.name} /> -->
</div>
<Footer {...id} />
