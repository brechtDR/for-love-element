import {defineConfig} from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: 'src/for-love.ts',
            formats: ['es']
        },
        rollupOptions: {
            external:[/^lit/]
        }
    }
})