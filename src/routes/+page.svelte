<script lang="ts">
  import Profile from "$lib/home/components/Profile.svelte";
  import Skills from "$lib/home/components/Skills.svelte";
  import Projects from "$lib/home/components/Projects.svelte";
  import Experiences from "$lib/home/components/Experiences.svelte";
  import Sidebar from "$lib/home/components/Sidebar.svelte";

  import sections from "$lib/home/data/sections";
  import { theme } from "$lib/../stores";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

{#await data.streamed.ready}
  <div class="m-4">Loading...</div>
{:then value}
  <div
    class="flex flex-col items-center gap-16 pb-8 pt-16 {$theme.background} {$theme.onBackground}"
  >
    <Profile id={sections[0].id} />
    <Skills id={sections[1].id} />
    <Projects id={sections[2].id} />
    <Experiences id={sections[3].id} />
  </div>

  <div class="flex justify-center">
    <Sidebar />
  </div>
{/await}
