<script lang="ts">
  import { Home, Code, Briefcase, Book } from "lucide-svelte";
  import { theme } from "$lib/../stores";
  import SidebarItem from "$lib/home/components/SidebarItem.svelte";
  export let profile: string;
  export let skills: string;
  export let projects: string;
  export let experiences: string;

  const classProps = "flex gap-1 hover:opacity-10";
</script>

<div
  class="flex m-4 rounded-3xl fixed bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:flex-col md:left-0 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:flex-col lg:left-0 {$theme.background} gap-4 shadow-card border-2 {$theme.border} {$theme.onBackground} p-2"
>
  <SidebarItem href="#{profile}" name={profile} class={classProps} icon={Home} />
  <SidebarItem href="#{skills}" name={skills} class={classProps} icon={Book} />
  <SidebarItem href="#{projects}" name={projects} class={classProps} icon={Code} />
  <SidebarItem href="#{experiences}" name={experiences} class={classProps} icon={Briefcase} />
</div>
