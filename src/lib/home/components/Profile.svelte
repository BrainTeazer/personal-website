<script lang="ts">
  import type { profileProp } from "$lib/home/data/profile";
  import { onMount } from "svelte";
  import { theme } from "$lib/../stores";
  import { ChevronDown, ChevronUp } from "lucide-svelte";
  import ContactItem from "$lib/home/components/ContactItem.svelte";
  import { slide } from "svelte/transition";
  import { swipeColor } from "$lib/home/functions/swipeColor";

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

  export let props: profileProp;
  export let id: string;
  export let el: any;

  $: console.log(visible);
</script>

<div class="flex flex-col md:flex-row gap-8 justify-center items-center m-4 p-0.5 {$theme.onBackground}" {id} bind:this={el}>
  <!-- Image and Contact -->
  <div class="flex flex-col items-center justify-center">
    <!-- Image -->
    <img src={props.imgSrc} alt="profile pic" class="rounded-[50%] w-60 landscape:w-80 md:w-72 lg:w-96 {$theme.boxShadow} border-2 {$theme.border}" />

    <!-- Contact Items -->
    <div class="flex gap-4 pt-4">
      {#each props.contactItems as contactItem}
        <ContactItem href={contactItem.link} icon={contactItem.icon} classProps={contactItem.hoverColor} />
      {/each}
    </div>
  </div>

  <!-- Introduction and About -->
  <div class="font-ibm-plex-serif sm:w-4/5 lg:w-2/5 md:w-3/5 text-center md:text-left gap-2">
    <div class="text-4xl mb-2 font-bold" transition:swipeColor={{ delay: 500 }}>
      {props.name}
    </div>

    <div class="text-2xl mt-4 mb-2">
      {props.prelim}
    </div>

    {#if visible}
      <div class="mt-4 {$theme.onSecondary}" transition:slide>
        👋🏽 Hello there :-) . {props.description}
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
