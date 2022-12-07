import { Table, Thead, Tbody } from './TransactionHistory.styled';

export function TransactionHistory(props) {
    return (
        <Table data-action="id-4">
            <Thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </Thead>
            <Tbody>{template(props)}</Tbody>
        </Table>
    );
}

function template({ items }) {
    return items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    ));
}
