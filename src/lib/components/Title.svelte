<script lang="ts">
  import { theme } from "../../stores";

  export let title: string;

  let themeValue: any;
  theme.subscribe((val) => {
    themeValue = val;
  });
</script>

<div class="uppercase font-space-grotesk text-2xl relative before:content-[''] before:absolute before:-bottom-1 before:inset-x-1/4 before:w-7/12 before:h-1 before:bg-red-500 before:rounded-md">
  {title}
</div>
