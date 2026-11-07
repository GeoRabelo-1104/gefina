import { Invoice } from "./invoiceType.ts";
import InvoiceRow from "./InvoiceRow.tsx";

interface InvoiceTableProps {
    datas: Invoice[];
} // é criado uma interface (objeto) para armazenar outros dados dentro dele.

export function InvoiceTable(props: InvoiceTableProps) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Cliente</th>
                    <th>Valor</th>
                    <th>Emissão</th>
                    <th>Vencimento</th>
                    <th>Situação</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.datas.map((invoice) => {
                        return <InvoiceRow key={invoice.id} data={invoice} />
                    }) // por meio do props, acessa os dados capturados na interface.
                }
            </tbody>
        </table>
    )
};