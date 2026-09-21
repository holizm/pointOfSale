import {
    DateTime,
    DialogForm,
    Numeric,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='pointOfSaleRegister'
        property='posRegister'
        required
    />
    <Text
        placeholder='pointOfSaleCashier'
        property='cashier'
        required
    />
    <DateTime
        placeholder='coreOpenedDate'
        property='openedDate'
        required
    />
    <Numeric
        placeholder='pointOfSaleOpeningCash'
        property='openingCash'
        required
    />
    <Select
        options={[
            'open',
            'closing',
            'closed',
        ]}
        placeholder='stateMachinesState'
        property='posSessionStatus'
        required
    />
</>

export default <DialogForm inputs={inputs} />
