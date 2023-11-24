<script lang="ts">
  import { page } from "$app/stores";

  export let href: string;
  export let name: string;
  export let classProps: string = "";
</script>

<a {href} class="decoration-black {classProps}" class:underline={$page.url.pathname == href} rel="noopener noreferrer" target="" title={name}>
  {name}
</a>
