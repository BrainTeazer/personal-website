import { writable } from "svelte/store";
import { lightTheme } from "$lib/theme/lightTheme";
import { darkTheme } from "$lib/theme/darkTheme";

export const theme = writable(lightTheme);
