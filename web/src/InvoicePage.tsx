import { useState, useEffect } from 'react';
import { InvoiceTable } from "./InvoiceTable.tsx";
import { Invoice } from "./invoiceType.ts";

export default function InvoicePage() {
    // tipagem do useState, definindo que pode receber apenas uma lista de invoice
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [error, setError] = useState<null | string>(null); // valor inicial, e o que pode receber
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getInvoices() {
            try {
                setError(null); // limpeza

                const response = await fetch('/api/invoices');
                const datas = await response.json();
                setInvoices(datas); 
            } catch {
                setError('Não foi possível obter relação de faturas.');
            } finally {
                setLoading(false); // quando finalizar o carregamento o estado muda para false
            }
        }

        getInvoices();
    }, []);

    return <>
        <h1>Faturas</h1>

        <main>
            {loading ? <p>Carregando...</p> : error ? <p>{error}</p> : <InvoiceTable datas={invoices}/>}
        </main>
    </>

}