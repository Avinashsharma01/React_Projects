import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 5174,  // Change the port number here
  // },
  server: {
    host: 'localhost', // Specify the server IP address
    port: 5001 // Specify the desired port
  }
})
