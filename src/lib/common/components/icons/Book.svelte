<script lang="ts">
  import Icon from "$lib/common/components/Icon.svelte";
  const iconNode = [
    [
      "path",
      { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" },
    ],
  ];
</script>

<Icon {...$$props} {iconNode} />
