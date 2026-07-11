import { init } from "@emailjs/browser";

export const emailInit = () => init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
