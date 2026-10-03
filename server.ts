import express from 'express'

const app = express() // express retorna um objeto

type InvoiceStatus = 'pending' | 'paid';

interface Customer {
    id: number,
    name: string,
    email: string
}

interface Invoice {
    id: number,
    amount: number,
    status: InvoiceStatus, // tipo criado
    issueDate: string,
    dueDate: string,
    customer: Customer // tipo criado
}

const invoices: Invoice[] = [{
    id: 1,
    amount: 125000,
    status: 'pending',
    issueDate: '01-10-2026',
    dueDate: '03-11-2026',
    customer: {
        id: 7,
        name: 'Construtora Meridiano',
        email: 'contato@meridiano.com'
    }
}, {
    id: 2,
    amount: 350000,
    status: 'paid',
    issueDate: '02-10-2026',
    dueDate: '05-11-2026',
    customer: {
        id: 7,
        name: 'Construtora Meridiano',
        email: 'contato@meridiano.com'
    }
}];

app.get('/api/health', (request, response) => {
    response.status(200).json({ status: 'ok' })
}); // capture a requisição GET no endpoint específico e executa uma expressão de função (arrow function)

app.get('/api/invoices', (request, response) => {
    response.status(200).json(invoices);
});

app.use((request, response) => {
    response.status(404).json({ error: { 
        status: 404,
        message: 'Recurso não encontrado.' 
    } })
});

app.listen(3000);