import {
    DateTime,
    DialogForm,
    Numeric,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        number
        required
    />
    <Text
        placeholder='session'
        posSession
        required
    />
    <Text
        order
        required
    />
    <Select
        options={[
            'sale',
            'return',
            'exchange',
        ]}
        placeholder='transactionType'
        posTransactionType
        required
    />
    <DateTime
        required
        transactionDate
    />
    <Numeric
        required
        total
    />
</>

export default <DialogForm inputs={inputs} />
