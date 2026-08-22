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
        placeholder='pointOfSaleOpenedDate'
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
        placeholder='pointOfSaleStatus'
        property='posSessionStatus'
        required
    />
</>

export default <DialogForm inputs={inputs} />
