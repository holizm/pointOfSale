import { DateTime } from 'list'

export default item => <>
    <td>{item.posRegister?.title}</td>
    <td>{item.cashier?.title}</td>
    <DateTime value={item.openedDate} />
    <td>{item.expectedCash}</td>
    <td>{item.actualCash}</td>
    <td>{item.posSessionStatus}</td>
</>
