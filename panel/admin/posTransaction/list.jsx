import {
    DateTime,
    List,
    Text,
} from 'list'
import Form from './form'

const headers = <>
    <th start>pointOfSaleNumber</th>
    <th>pointOfSaleTransactionType</th>
    <th>pointOfSaleTransactionDate</th>
    <th>pointOfSaleTotal</th>
    <th>pointOfSaleStatus</th>
</>

const row = item => <>
    <td>{item.number}</td>
    <td>{item.posTransactionType}</td>
    <DateTime value={item.transactionDate} />
    <td>{item.total}</td>
    <td>{item.posTransactionStatus}</td>
</>

export default <List
    create={Form}
    filters={<Text property='number' />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
