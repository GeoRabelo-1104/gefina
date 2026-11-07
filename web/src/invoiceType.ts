export type InvoiceStatus = 'pending' | 'paid';

interface Customer {
   id: number;
   name: string;
   email: string;
}

export interface Invoice {
   id: number;
   amount: number;
   status: InvoiceStatus; // tipo criado
   issueDate: string;
   dueDate: string;
   customer: Customer; // tipo criado
}