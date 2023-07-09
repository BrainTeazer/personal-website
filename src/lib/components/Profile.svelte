<script lang="ts">
  import type { profileProp } from "../../data/profile";
  import { onMount } from "svelte";

  let ready = false;
  onMount(() => {
    ready = true;
    window.matchMedia("(max-width: 639px)").addEventListener("change", (event) => {
      if (event.matches == true) {
        visible = false;
      } else {
        visible = true;
      }
    });
  });
  import Button from "./Button.svelte";
  import { theme } from "../../stores";
  import { ChevronDownIcon, ChevronUpIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "svelte-feather-icons";
  import ContactItem from "./ContactItem.svelte";
  import { slide } from "svelte/transition";

  export let props: profileProp;
  export let id: string;

  export let el: any;

  function swipeColor(node: any, params: any) {
    const { duration, delay, easing } = params || {};
    const { color } = window.getComputedStyle(node);
    return {
      duration,
      delay,
      easing,
      css(t: number) {
        if (t > 0.5) {
          // transform t from range [0.5, 1] into percentage [0, 100]
          // t: 0.5 -> 1
          // u: 0 -> 0.5
          const u = t - 0.5;
          // percentage: 0 -> 100
          const percentage = u * 200;
          return `background: linear-gradient(to right, transparent 0, ${percentage}%, ${color} ${percentage}%); color: ${color}`;
        } else {
          // transform t from range [0, 0.5] into percentage [0, 100]
          // t: 0 -> 0.5
          // percentage: 0 -> 100
          const percentage = t * 200;
          return `background: linear-gradient(to right, ${color} 0, ${percentage}%, transparent ${percentage}%); color: transparent`;
        }
      },
    };
  }

  let visible: boolean = false;
  let showDescriptionIcon: any = visible ? ChevronUpIcon : ChevronDownIcon;
  let showDescriptionIconProps: string = visible ? "1000ms" : "0ms";

  const toggleDescription = () => {
    visible = !visible;
    showDescriptionIcon = visible ? ChevronUpIcon : ChevronDownIcon;
    showDescriptionIconProps = visible ? "1000ms" : "0ms";
  };

  let themeValue: any;
  theme.subscribe((val) => {
    themeValue = val;
  });
</script>

{#if ready}
  <div class="flex flex-col justify-center items-center overflow-hidden gap-2 m-4 {themeValue.onBackground}" {id} bind:this={el}>
    <div class="flex flex-col md:flex-row lg:flex-row items-center gap-4 justify-center items-center">
      <img
        src={props.imgSrc}
        alt=""
        class="rounded-profile-image gap-4 w-60 landscape:w-1/5 sm:w-2/5 md:w-3/12 lg:w-1/5 {themeValue.boxShadow} border-2 {themeValue.border} row-start-1 col-start-1 row-end-5 col-end-2"
      />
      <div class="flex flex-col sm:w-4/5 lg:w-2/5 md:w-3/5 text-center md:text-left lg:text-left">
        <div class="font-ibm-plex-serif {themeValue.onSecondary}">Hello there :-)</div>

        <div class="flex flex-col items-center md:items-start gap-2">
          <div class="font-space-grotesk text-4xl mt-2 mb-2" transition:swipeColor={{ delay: 0 }}>I'm {props.name}.</div>
          <div class="font-space-grotesk text-2xl mb-2">
            {props.prelim}
          </div>
        </div>

        <button on:click|preventDefault={toggleDescription} class="flex justify-center items-center order-1 {showDescriptionIconProps}">
          <svelte:component this={showDescriptionIcon} class="mb-4 sm:hidden" />
        </button>

        {#if visible}
          <div class="flex flex-col sm:opacity-100 sm:max-h-none" transition:slide>
            <div class="font-ibm-plex-serif {themeValue.onSecondary}">{props.description}</div>
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
    <Button text={props.buttonText} href={props.resumeSrc} classProp={"transition-all duration-300"} />
  </div>
{/if}
