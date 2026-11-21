import { Router } from 'express'; // função responsável pelos roteamentos

import {
    findAllInvoices,
    findInvoiceById
} from './invoice.service.ts';

const router = Router();

// http://localhost:3000/api/invoices

router.get('/', (_request, response) => {
   const invoices = findAllInvoices();
   
   setTimeout(() => response.status(200).json(invoices), 3000);
});

router.get('/:id', (request, response) => {
   const id = Number(request.params.id);

   const invoice = findInvoiceById(id);

   if (!invoice)
      response.status(404).json({
         error: {
            status: 404,
            message: 'Fatura não encontrada.'
         }
      });

   response.status(200).json(invoice);
});

export default router;