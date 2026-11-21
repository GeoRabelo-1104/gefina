import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({ 
    plugins: [react()],
    server: {
        proxy: {
            '/api': 'http://localhost:3000'
        } // toda requisição iniciada em API, será redirecionada para a url inserida
    } 

}); //exporta a configuração de volta para o vite