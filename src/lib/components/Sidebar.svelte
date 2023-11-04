<script lang="ts">
  import { HomeIcon, CodeIcon, InfoIcon, BriefcaseIcon, BookIcon } from "svelte-feather-icons";
  import { theme } from "$lib/../stores";
  import { darkTheme } from "$lib/theme/darkTheme";
  import SidebarItem from "./SidebarItem.svelte";
  export let profile: string;
  export let skills: string;
  export let projects: string;
  export let experiences: string;

  const classProps = "flex gap-1 hover:text-blue-700";
</script>

<div class="flex justify-center items-center">
  <div
    class="flex m-4 fixed bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:flex-col md:left-0 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:flex-col lg:left-0 {$theme.background} gap-4 shadow-card border-2 {$theme.border} {$theme.onBackground} p-2"
  >
    <SidebarItem href="#{profile}" name={profile} {classProps} icon={HomeIcon} />
    <SidebarItem href="#{skills}" name={skills} {classProps} icon={BookIcon} />
    <SidebarItem href="#{projects}" name={projects} {classProps} icon={CodeIcon} />
    <SidebarItem href="#{experiences}" name={experiences} {classProps} icon={BriefcaseIcon} />
  </div>
</div>
