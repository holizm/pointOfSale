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
        property='posRegister'
        required
    />
    <Text
        placeholder='cashier'
        property='cashier'
        required
    />
    <DateTime
        placeholder='openedDate'
        property='openedDate'
        required
    />
    <Numeric
        placeholder='openingCash'
        property='openingCash'
        required
    />
    <Select
        options={[
            'open',
            'closing',
            'closed',
        ]}
        placeholder='state'
        property='posSessionStatus'
        required
    />
</>

export default <DialogForm inputs={inputs} />
