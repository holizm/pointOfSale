import {
    DialogForm,
    Select,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        code
        required
    />
    <Text place />
    <Select
        options={[
            'active',
            'inactive',
            'underMaintenance',
        ]}
        placeholder='state'
        posRegisterStatus
        required
    />
</>

export default <DialogForm inputs={inputs} />
