// import react from "@vitejs/plugin-react";
// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),
//   ],
// })


import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react'; // If you're using React

export default defineConfig({
  plugins: [react(), tailwindcss()],
  
});