import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default ({ mode }) => {
  console.log(mode);

  return defineConfig({
    plugins: [
      react(),
      federation({
        name: "app",
        remotes: {
          remoteApp:
            mode === "development"
              ? "http://localhost:5001/assets/remoteEntry.js"
              : "https://web-vite-remote.vercel.app/assets/remoteEntry.js",
        },
        shared: ["react", "react-dom", "react-router-dom"],
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
  });
};
