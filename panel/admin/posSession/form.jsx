import {
    DateTime,
    DialogForm,
    Numeric,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='register'
        posRegister
        required
    />
    <Text
        cashier
        required
    />
    <DateTime
        openedDate
        required
    />
    <Numeric
        openingCash
        required
    />
    <Select
        options={[
            'open',
            'closing',
            'closed',
        ]}
        placeholder='state'
        posSessionStatus
        required
    />
</>

export default <DialogForm inputs={inputs} />
