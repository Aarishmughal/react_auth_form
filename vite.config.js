import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/react_auth_form/", // Set base for GitHub Pages deployment
});
