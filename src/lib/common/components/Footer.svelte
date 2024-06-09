<script lang="ts">
  import { name } from "../data/constants";

  const urlClass: string =
    "underline underline-offset-2 decoration-gray-400 decoration-2 hover:underline-offset-4";
</script>

<footer
  class="bg-gray-200 text-gray-600 flex justify-between {$$props.class} p-4"
>
  <div>
    Hosted on <a
      href="https://pages.github.com/"
      class={urlClass}
      target="_blank"
    >
      Github Pages
    </a>
  </div>

  <div id="copyright">&copy; {new Date().getFullYear()} {name}</div>
</footer>
