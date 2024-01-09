<script lang="ts">
  import Icon from "$lib/common/components/Icon.svelte";
  const iconNode = [
    ["polyline", { points: "16 18 22 12 16 6" }],
    ["polyline", { points: "8 6 2 12 8 18" }],
  ];
</script>

<Icon {...$$props} {iconNode} />
