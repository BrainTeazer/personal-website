<script lang="ts">
  import { theme } from "$lib/../stores";

  export let title: string;
  export let isUnderlined: boolean = true;
  export let underlineColor: string = "red-500";

  let underlineClasses: string = `before:content-[''] before:absolute before:-bottom-1 before:inset-x-1/4 before:w-7/12 before:h-1 before:bg-${underlineColor} before:rounded-md`;
</script>

<div class="uppercase font-space-grotesk text-2xl relative {isUnderlined ? underlineClasses : ''}">
  {title}
</div>
