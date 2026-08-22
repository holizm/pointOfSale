import {
    List,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>pointOfSaleRegister</th>
    <th>pointOfSaleCode</th>
    <th>pointOfSalePlace</th>
    <th>pointOfSaleStatus</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
    <td>{item.place?.title}</td>
    <td>{item.posRegisterStatus}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
