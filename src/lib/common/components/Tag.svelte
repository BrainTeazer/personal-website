<script lang="ts">
  import { theme } from "$lib/../stores";

  export let tag: string;
</script>

<div class="rounded-xl bg-gray-300 p-2 opacity-50 hover:bg-black hover:text-slate-100 transition:all duration-300 {$$props.class}">
  {tag}
</div>
