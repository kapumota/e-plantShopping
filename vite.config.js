import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Ajusta la base a la subcarpeta que uses en GitHub Pages:
//  la ruta sería '/CC-3S2/e-plantShopping/'.
  base: '/CC-3S2/e-plantShopping/',
  plugins: [react()]
})

