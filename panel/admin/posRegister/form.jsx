import {
    DialogForm,
    Select,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='pointOfSaleCode'
        property='code'
        required
    />
    <Text
        placeholder='pointOfSalePlace'
        property='place'
    />
    <Select
        options={[
            'active',
            'inactive',
            'underMaintenance',
        ]}
        placeholder='pointOfSaleStatus'
        property='posRegisterStatus'
        required
    />
</>

export default <DialogForm inputs={inputs} />
