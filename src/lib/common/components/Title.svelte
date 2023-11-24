<script lang="ts">
  import { theme } from "$lib/../stores";

  export let title: string;
  export let isUnderlined: boolean = true;
</script>

<div class="uppercase text-2xl font-bold {isUnderlined ? 'decoration-2 underline underline-offset-8 decoration-black' : ' '}">
  {title}
</div>
