<script lang="ts">
  export let href: string;
  export let scrollIntoView = ({ currentTarget }: any) => {
    const scrollToElement = document.querySelector(currentTarget.getAttribute("href"));

    if (!scrollToElement) return;

    scrollToElement.scrollIntoView({
      behavior: "smooth",
    });
  };

  export let classProps: string;
  export let icon: any;
  export let name: string;
</script>

<a {href} on:click|preventDefault={scrollIntoView} rel="noopener noreferrer" class="group {classProps}" title={name.charAt(0).toUpperCase() + name.slice(1)}>
  <svelte:component this={icon} />
  <!-- <div class="hidden group-hover:block capitalize font-ibm-plex-serif">{name}</div> -->
</a>
