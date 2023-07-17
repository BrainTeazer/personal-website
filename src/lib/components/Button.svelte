<script lang="ts">
  import { theme } from "$lib/../stores";

  export let text: string;
  export let href: string = "";
  export let classProp: string = "";
</script>

<a {href} target="_blank" rel="noopener noreferrer">
  <button class="p-1.5 {$theme.boxShadow} border-2 {$theme.border} text-slate-100 uppercase font-space-grotesk {$theme.secondary} hover:bg-red-300 hover:{$theme.onBackground} {classProp}">
    {text}
  </button>
</a>
