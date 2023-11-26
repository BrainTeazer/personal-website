<script lang="ts">
  import { theme } from "../../../stores";

  export let transition: any | null = null;
</script>

<div
  class="hover:scale-105 rounded-xl {$theme.background} p-4 {$theme.boxShadow} border-2 {$theme.border} {$$props.class}"
  transition:transition
>
  <slot />
</div>
