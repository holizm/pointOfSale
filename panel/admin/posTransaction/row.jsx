import { DateTime } from 'list'

export default item => <>
    <td>{item.number}</td>
    <td>{item.posTransactionType}</td>
    <DateTime value={item.transactionDate} />
    <td>{item.total}</td>
    <td>{item.posTransactionStatus}</td>
</>
