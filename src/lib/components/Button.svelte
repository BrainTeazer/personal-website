<script lang="ts">
  import { theme } from "../../stores";

  export let text: string;
  export let href: string = "";
  export let classProp: string = "";

  let themeValue: any;
  theme.subscribe((val) => {
    themeValue = val;
  });
</script>

<a {href} target="_blank" rel="noopener noreferrer">
  <button
    class="p-1.5 {themeValue.boxShadow} border-2 {themeValue.border} text-slate-100 uppercase font-space-grotesk {themeValue.secondary} hover:bg-red-300 hover:{themeValue.onBackground} {classProp}"
  >
    {text}
  </button>
</a>
