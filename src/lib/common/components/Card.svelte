<script lang="ts">
  import { theme } from "../../../stores";
</script>

<div class="hover:scale-105 rounded-xl {$theme.background} p-4 {$theme.boxShadow} border-2 {$theme.border} {$$props.class}">
  <slot />
</div>
