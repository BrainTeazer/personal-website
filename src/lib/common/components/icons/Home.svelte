<script lang="ts">
  import Icon from "$lib/common/components/Icon.svelte";
  const iconNode = [
    ["path", { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }],
    ["polyline", { points: "9 22 9 12 15 12 15 22" }],
  ];
</script>

<Icon {...$$props} {iconNode} />
