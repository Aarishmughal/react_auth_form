import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/mern_auth/", // Set base for GitHub Pages deployment
});
