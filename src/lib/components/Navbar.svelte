<script>
  import NavbarItem from "./NavbarItem.svelte";
  import { theme } from "$lib/../stores";
  import { flip } from "svelte/animate";

  const classProps = "flex gap-1 hover:bg-red-300 p-2";
</script>

<div class="flex justify-center items-center self-end">
  <div class="flex m-4 {$theme.background} gap-4 {$theme.onBackground}">
    <NavbarItem href="/" name={"Home"} {classProps} />
    <NavbarItem href="/blog" name={"Blog"} {classProps} />
  </div>
</div>
