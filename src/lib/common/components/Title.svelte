<script lang="ts">
  import { theme } from "$lib/../stores";

  export let title: string;
</script>

<div
  class="text-5xl font-bold text-center {$theme.onBackground} {$$props.class}"
>
  {title}
</div>
