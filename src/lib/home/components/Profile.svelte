<script lang="ts">
  import { onMount } from "svelte";
  import { theme } from "$lib/../stores";
  import { ChevronDown, ChevronUp } from "lucide-svelte";
  import { slide } from "svelte/transition";
  import { swipeColor } from "$lib/home/functions/swipeColor";
  import profile from "$lib/home/data/profile";

  let visible: boolean = false;

  // hide personal description if screen is too small
  onMount(() => {
    let media = window.matchMedia("(max-width: 639px)");

    // if it is screen is smaller than 639px, about should not be visible
    visible = !media.matches;

    media.addEventListener("change", (event) => {
      // if it is screen is smaller than 639px, about should not be visible
      visible = !event.matches;
    });
  });

  export let id: string;
</script>

<div class="flex flex-col md:flex-row gap-8 justify-center items-center m-4 p-0.5 {$theme.onBackground}" {id}>
  <!-- Image and Contact -->
  <div class="flex flex-col items-center justify-center">
    <!-- Image -->
    <img src={profile.imgSrc} alt="profile pic" class="rounded-[50%] w-60 landscape:w-80 md:w-72 lg:w-96 {$theme.boxShadow} border-2 {$theme.border}" />

    <!-- Contact Items -->
    <div class="flex gap-4 pt-4">
      {#each profile.contactItems as contactItem}
        <a rel="noopener noreferrer" target="_blank" href={contactItem.link} class={contactItem.hoverColor}>
          <svelte:component this={contactItem.icon} />
        </a>
      {/each}
    </div>
  </div>

  <!-- Name, Introduction and About -->
  <div class="font-ibm-plex-serif sm:w-4/5 lg:w-2/5 md:w-3/5 text-center md:text-left gap-2">
    <div class="text-4xl mb-2 font-bold text-white bg-black p-2">
      {profile.name}
    </div>

    <div class="text-2xl mt-4 mb-2">
      {profile.prelim}
    </div>

    {#if visible}
      <div class="mt-4 {$theme.onSecondary}" transition:slide>
        👋🏽 Hello there :-) . {profile.description}
      </div>
    {/if}

    <button
      on:click|preventDefault={() => {
        visible = !visible;
      }}
    >
      <svelte:component this={visible ? ChevronUp : ChevronDown} class="mb-4 sm:hidden" />
    </button>
  </div>
</div>
