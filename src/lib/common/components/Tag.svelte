<script lang="ts">
  import { theme } from "$lib/../stores";

  export let tag: string;
</script>

<div
  class="rounded-[30px] {$theme.primary} p-2 opacity-50 {$theme.hoverPrimary} {$theme.hoverOnPrimary} transition:all duration-300 {$$props.class}"
>
  {tag}
</div>
