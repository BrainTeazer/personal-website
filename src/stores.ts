import { writable } from "svelte/store";
import { lightTheme } from "./theme/lightTheme";
import { darkTheme } from "./theme/darkTheme";

export const theme = writable(lightTheme);
