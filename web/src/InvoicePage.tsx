import { InvoiceTable } from "./InvoiceTable.tsx";
import { Invoice } from "./invoiceType.ts";

export default function InvoicePage() {
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
                id: 6,
                name: 'TendiTudo',
                email: 'tenditudo@nova.com.br'
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

    return <>
        <h1>Faturas</h1>

        <main>
            <InvoiceTable datas={invoices}/>
        </main>
    </>

}