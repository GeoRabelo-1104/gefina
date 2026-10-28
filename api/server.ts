import express from 'express';

import invoiceRouter from './invoice.route.ts';

const app = express(); // express retorna um objeto

app.get('/api/health', (_request, response) => {
   response.status(200).json({ status: 'ok' });
}); // capture a requisição GET no endpoint específico e executa uma expressão de função (arrow function)

app.use('/api/invoices', invoiceRouter); // middle - intermediario que captura um roteamento

app.use((_request, response) => {
   response.status(404).json({
      error: {
         status: 404,
         message: 'Recurso não encontrado.'
      }
   });
});

app.listen(3000);
