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
    issueDate: '2026-10-01',
    dueDate: '2026-11-03',
    customer: {
        id: 7,
        name: 'Construtora Meridiano',
        email: 'contato@meridiano.com.br'
    }
}, {
    id: 2,
    amount: 350000,
    status: 'paid',
    issueDate: '2026-10-02',
    dueDate: '2026-11-05',
    customer: {
        id: 7,
        name: 'Construtora Meridiano',
        email: 'grafica@nova.com.br'
    }
}, {
    id: 3,
    amount: 183000,
    status: 'pending',
    issueDate: '2026-10-05',
    dueDate: '2026-11-08',
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

app.get('/api/invoices/:id', (request, response) => {
    const id = +request.params.id // + (unário) transforma o valor em número

    const invoice = invoices.find(invoice => invoice.id === id ); // precisa tirar chaves para não pedir retorno

    if (!invoice) response.status(404).json({ error: {
        status: 404,
        message: 'Fatura não encontrada.'
    } })

    response.status(200).json(invoice);
    
});

app.use((request, response) => {
    response.status(404).json({ error: { 
        status: 404,
        message: 'Recurso não encontrado.' 
    } })
});

app.listen(3000);