<script lang="ts">
  import type { profileProp } from "$lib/data/profile";
  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  import { theme } from "$lib/../stores";
  import { ChevronDownIcon, ChevronUpIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "svelte-feather-icons";
  import ContactItem from "./ContactItem.svelte";
  import { slide } from "svelte/transition";
  import { swipeColor } from "$lib/functions/swipeColor";
  import { toggle } from "$lib/functions/toggle";

  let visible: boolean;
  $: showDescriptionIcon = visible ? ChevronUpIcon : ChevronDownIcon;

  // hide personal description if screen is too small
  onMount(() => {
    let media = window.matchMedia("(max-width: 639px)");
    visible = toggle(media.matches);

    media.addEventListener("change", (event) => {
      visible = toggle(event.matches);
    });
  });

  export let props: profileProp;
  export let id: string;
  export let el: any;
</script>

<div class="flex flex-col justify-center items-center overflow-hidden gap-2 m-4 p-0.5 {$theme.onBackground}" {id} bind:this={el}>
  <div class="flex flex-col md:flex-row lg:flex-row items-center gap-4 justify-center items-center">
    <img
      src={props.imgSrc}
      alt="profile pic"
      class="rounded-profile-image gap-4 w-60 landscape:w-1/5 sm:w-2/5 md:w-3/12 lg:w-1/5 {$theme.boxShadow} border-2 {$theme.border} row-start-1 col-start-1 row-end-5 col-end-2"
    />
    <div class="flex flex-col sm:w-4/5 lg:w-2/5 md:w-3/5 text-center md:text-left lg:text-left">
      <div class="flex flex-col items-center md:items-start gap-2 font-space-grotesk">
        <div class="font-ibm-plex-serif {$theme.onSecondary}">Hello there :-)</div>
        <div class="text-4xl mt-2 mb-2" transition:swipeColor={{ delay: 500 }}>I'm {props.name}.</div>
        <div class="text-2xl mb-2">
          {props.prelim}
        </div>
      </div>

      <button
        on:click|preventDefault={() => {
          visible = toggle(visible);
        }}
        class="flex justify-center items-center order-1"
      >
        <svelte:component this={showDescriptionIcon} class="mb-4 sm:hidden" />
      </button>
      {#if visible}
        <div class="flex flex-col sm:opacity-100 sm:max-h-none" transition:slide>
          <div class="font-ibm-plex-serif {$theme.onSecondary}">{props.description}</div>
        </div>
      {/if}
    </div>
  </div>

  <div class="flex gap-4 mb-4 pt-4 md:pt-2">
    <ContactItem href={props.links.linkedin} icon={LinkedinIcon} classProps={"hover:text-blue-500"} />
    <ContactItem href={props.links.github} icon={GithubIcon} classProps={"hover:text-slate-500"} />
    <ContactItem href={props.links.mail} icon={MailIcon} classProps={"hover:text-green-500"} />
    <ContactItem href={props.links.number} icon={PhoneIcon} classProps={"hover:text-gray-500"} />
  </div>
  <!-- <Button text={props.buttonText} href={props.resumeSrc} classProp={"transition-all duration-300"} /> -->
</div>
