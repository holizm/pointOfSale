import {
    DateTime,
    DialogForm,
    Numeric,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='pointOfSaleNumber'
        property='number'
        required
    />
    <Text
        placeholder='pointOfSaleSession'
        property='posSession'
        required
    />
    <Text
        placeholder='pointOfSaleOrder'
        property='order'
        required
    />
    <Select
        options={[
            'sale',
            'return',
            'exchange',
        ]}
        placeholder='pointOfSaleTransactionType'
        property='posTransactionType'
        required
    />
    <DateTime
        placeholder='pointOfSaleTransactionDate'
        property='transactionDate'
        required
    />
    <Numeric
        placeholder='pointOfSaleTotal'
        property='total'
        required
    />
</>

export default <DialogForm inputs={inputs} />
