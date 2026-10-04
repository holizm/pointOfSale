import {
    DialogForm,
    Select,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='code'
        property='code'
        required
    />
    <Text
        placeholder='place'
        property='place'
    />
    <Select
        options={[
            'active',
            'inactive',
            'underMaintenance',
        ]}
        placeholder='state'
        property='posRegisterStatus'
        required
    />
</>

export default <DialogForm inputs={inputs} />
