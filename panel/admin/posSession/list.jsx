import {
    DateTime,
    List,
} from 'list'
import Form from './form'

const headers = <>
    <th start>pointOfSaleRegister</th>
    <th>pointOfSaleCashier</th>
    <th>pointOfSaleOpenedDate</th>
    <th>pointOfSaleExpectedCash</th>
    <th>pointOfSaleActualCash</th>
    <th>pointOfSaleStatus</th>
</>

const row = item => <>
    <td>{item.posRegister?.title}</td>
    <td>{item.cashier?.title}</td>
    <DateTime value={item.openedDate} />
    <td>{item.expectedCash}</td>
    <td>{item.actualCash}</td>
    <td>{item.posSessionStatus}</td>
</>

export default <List
    create={Form}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
