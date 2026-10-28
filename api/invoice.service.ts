type InvoiceStatus = 'pending' | 'paid';

interface Customer {
   id: number;
   name: string;
   email: string;
}

interface Invoice {
   id: number;
   amount: number;
   status: InvoiceStatus; // tipo criado
   issueDate: string;
   dueDate: string;
   customer: Customer; // tipo criado
}

const invoices: Invoice[] = [
   {
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
   },
   {
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
   },
   {
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
   }
];

export function findAllInvoices(): Invoice[] {
    return invoices;
} // mostra todas as invoices - exporta para outros arquivos que solicitem a lista de invoice

export function findInvoiceById(id:number): Invoice | undefined {
    const invoice = invoices.find(invoice => invoice.id === id) // retorna o elemento caso id seja igual

    if (!invoice) return invoice;

    return invoice;
} // mostra a invoice especificada pelo id - exporta para a camada route