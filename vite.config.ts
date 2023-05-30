import { defineConfig } from "vite"
import Unfonts from "unplugin-fonts/vite"

export default defineConfig({
  server: { port: 3000 },
  plugins: [
    Unfonts({
      fontsource: {
        families: [{ name: "Rubik", weights: [500, 700] }],
      },
    }),
  ],
})
