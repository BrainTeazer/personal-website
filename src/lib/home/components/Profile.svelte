<script lang="ts">
  import { onMount } from "svelte";
  import { theme } from "$lib/../stores";
  import ChevronUp from "$lib/common/components/icons/ChevronUp.svelte";
  import ChevronDown from "$lib/common/components/icons/ChevronDown.svelte";
  import { slide } from "svelte/transition";
  import profile from "$lib/home/data/profile";
  import Card from "$lib/common/components/Card.svelte";
  import { fontConfig } from "$lib/common/data/theme/typography";

  const urlClass: string =
    "underline decoration-black decoration-2 hover:underline-offset-4 text-blue-700";

  // if it is screen is smaller than 639px, about should not be visible
  let media = window.matchMedia("(max-width: 639px)");
  let visible = !media.matches;

  // hide personal description if screen is too small
  onMount(() => {
    media.addEventListener("change", (event) => {
      // if it is screen is smaller than 639px, about should not be visible
      visible = !event.matches;
    });
  });

  export let id: string;
</script>

<div
  class="flex flex-col md:flex-row md:gap-8 gap-4 justify-center items-center m-4 p-0.5"
  {id}
>
  <!-- Name, Prelim, Image and Contact -->
  <div class="flex flex-col items-center gap-2 justify-center text-center">
    <!-- Image -->
    <img
      src={profile.imgSrc}
      alt="profile pic"
      class="rounded-[50%] w-60 landscape:w-80 md:w-72 lg:w-96 {$theme.boxShadow} border-2 {$theme.border}"
    />

    <!-- Name -->
    <div class="text-4xl font-bold">
      {profile.name}
    </div>

    <!-- Prelim -->
    <div class={fontConfig.subheading}>
      {profile.prelim}
    </div>

    <!-- Contact Items -->
    <div class="flex gap-4">
      {#each profile.contactItems as contactItem}
        <a
          aria-label={contactItem.name}
          rel="noopener noreferrer"
          target="_blank"
          href={contactItem.link}
          class={fontConfig.headingHoverOpacity}
        >
          <svelte:component this={contactItem.icon} />
        </a>
      {/each}
    </div>
  </div>

  <!-- About -->
  <div class="sm:w-4/5 lg:w-[30em] md:w-[30em] text-center md:text-left">
    {#if visible}
      <Card
        class="{fontConfig.large} mb-2 {$theme.onSurface}"
        transition={slide}
      >
        <div>
          👋🏽 Hello there :-) . I am a Software Engineer, and avid open-source
          and privacy enthusiast. I am a <a
            href="https://en.wikipedia.org/wiki/Neophile"
            target="_blank"
            class={urlClass}>neophile</a
          >
          and enjoy learning/trying out new things, whether cutting-edge or just
          something I want to try. I love music, playing sports, and the command
          line.
        </div>
      </Card>
    {/if}

    <!-- Button to toggle visibility of About -->
    <button
      aria-label="Expand / Collapse description"
      on:click|preventDefault={() => {
        visible = !visible;
      }}
    >
      <svelte:component
        this={visible ? ChevronUp : ChevronDown}
        class="mb-4 sm:hidden"
      />
    </button>
  </div>
</div>
