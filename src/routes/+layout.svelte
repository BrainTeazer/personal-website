<script lang="ts">
  import "$lib/../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import navbarItemProp from "$lib/data/navbarItemProp";
</script>

<div class="flex flex-col items-center">
  <Navbar navbarItems={navbarItemProp} />
</div>
<slot />
