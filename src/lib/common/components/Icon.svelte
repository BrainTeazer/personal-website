<script lang="ts">
  import iconDefaultAttributes from "$lib/common/data/iconDefaultAttributes";
  export let color = "currentColor";
  export let size = 24;
  export let strokeWidth = 2;
  export let iconNode: any;
</script>

<svg
  {...iconDefaultAttributes}
  {...$$restProps}
  width={size}
  height={size}
  stroke={color}
  stroke-width={strokeWidth}
  class={`${$$props.class ?? ""}`}
>
  {#each iconNode as [tag, attrs]}
    <svelte:element this={tag} {...attrs} />
  {/each}
</svg>
