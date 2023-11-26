<script lang="ts">
  import Profile from "$lib/home/components/Profile.svelte";
  import Skills from "$lib/home/components/Skills.svelte";
  import Projects from "$lib/home/components/Projects.svelte";
  import Experiences from "$lib/home/components/Experiences.svelte";
  import Sidebar from "$lib/home/components/Sidebar.svelte";

  import id from "$lib/home/data/id";
  import { theme } from "$lib/../stores";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

{#await data.streamed.ready}
  <div class="m-4">Loading...</div>
{:then value}
  <div class="flex flex-col items-center gap-16 {$theme.background} {$theme.onBackground} pb-8 pt-16">
    <Profile id={id.profile} />
    <Skills id={id.skills} />
    <Projects id={id.projects} />
    <Experiences id={id.experiences} />
  </div>

  <div class="flex justify-center">
    <Sidebar {...id} />
  </div>
{/await}
