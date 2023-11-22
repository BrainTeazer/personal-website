<script lang="ts">
  import Profile from "$lib/home/components/Profile.svelte";
  import profile from "$lib/home/data/profile";
  import skills from "$lib/home/data/skills";
  import projects from "$lib/home/data/projects";
  import experiences from "$lib/home/data/experiences";
  import id from "$lib/home/data/id";
  import Skills from "$lib/home/components/Skills.svelte";
  import Projects from "$lib/home/components/Projects.svelte";
  import { theme } from "$lib/../stores";
  import Experiences from "$lib/home/components/Experiences.svelte";
  import { afterUpdate } from "svelte";
  import Sidebar from "$lib/home/components/Sidebar.svelte";
  import type { PageData } from "./$types";
  let y: any;

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
      if (val?.offsetTop < y + 100) {
        document.querySelector(".active")?.classList.remove("active");
        document.querySelector("a[href*=" + val.id + "]")?.classList.add("active");
      }
    });
  });

  export let data: PageData;
</script>

<svelte:window bind:scrollY={y} />

{#await data.streamed.ready then ready}
  <div class="flex flex-col items-center gap-16 {$theme.background} {$theme.onBackground} pb-8 pt-16 sm:pt-32">
    <Profile props={profile} id={id.profile} bind:el={profileContainer} />
    <Skills id={id.skills} imgHeight={100} imgWidth={100} {skills} bind:el={skillsContainer} />
    <Projects id={id.projects} imgHeight={100} imgWidth={100} {projects} bind:el={projectsContainer} />
    <Experiences id={id.experiences} {experiences} bind:el={experiencesContainer} />
  </div>

  <div class="flex justify-center items-center">
    <Sidebar {...id} />
  </div>
{/await}
