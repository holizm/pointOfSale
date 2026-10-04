import {
    DateTime,
    DialogForm,
    Numeric,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='number'
        property='number'
        required
    />
    <Text
        placeholder='session'
        property='posSession'
        required
    />
    <Text
        placeholder='order'
        property='order'
        required
    />
    <Select
        options={[
            'sale',
            'return',
            'exchange',
        ]}
        placeholder='transactionType'
        property='posTransactionType'
        required
    />
    <DateTime
        placeholder='transactionDate'
        property='transactionDate'
        required
    />
    <Numeric
        placeholder='total'
        property='total'
        required
    />
</>

export default <DialogForm inputs={inputs} />
