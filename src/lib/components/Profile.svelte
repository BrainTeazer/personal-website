<script lang="ts">
  import type { profileProp } from "../../data/profile";
  import { onMount } from "svelte";

  let ready = false;
  onMount(() => (ready = true));
  import Button from "./Button.svelte";
  import { theme } from "../../stores";
  import { GithubIcon, LinkedinIcon, MailIcon } from "svelte-feather-icons";

  export let props: profileProp;
  export let id: string;

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

  let themeValue: any;
  theme.subscribe((val) => {
    themeValue = val;
  });
</script>

{#if ready}
  <div class="flex flex-col justify-center items-center gap-2 m-4 {themeValue.onBackground}" {id}>
    <div class="flex items-center gap-4 justify-center">
      <img src={props.imgSrc} alt="" class="rounded-profile-image gap-4 w-1/5 {themeValue.boxShadow} border-2 {themeValue.border} row-start-1 col-start-1 row-end-5 col-end-2" />
      <div class="flex flex-col w-2/5">
        <div class="font-ibm-plex-serif {themeValue.onSecondary}">Hello there :-)</div>

        <div class="font-space-grotesk text-4xl mt-2 mb-2" transition:swipeColor={{ delay: 0 }}>I'm {props.name}.</div>
        <div class="font-space-grotesk text-2xl mb-2">{props.prelim}</div>
        <div class="font-ibm-plex-serif {themeValue.onSecondary}">{props.description}</div>
      </div>
    </div>
    <div class="flex gap-4 mb-4">
      <a href={props.links.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
      <a href={props.links.github} target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
      <a href={props.links.mail} target="_blank" rel="noopener noreferrer"><MailIcon /></a>
    </div>
    <Button text={props.buttonText} href={props.resumeSrc} classProp={"transition-all duration-300"} />
  </div>
{/if}
