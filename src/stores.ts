import { lightTheme } from "$lib/common/data/theme/theme";
import { writable } from "svelte/store";

export const theme = writable(lightTheme);
