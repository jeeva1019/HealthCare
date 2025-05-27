import Header from '../shared/Header'
import Button from '../shared/Button'
import { GoPlus } from "react-icons/go";

const TestSection = () => {
    return (
        <>
            <Header subtitle='Manage and track medical test results' title='Laboratory Tests'>
                <Button icon={<GoPlus size={20} />} label='order new test' />
            </Header>
        </>

    )
}

export default TestSection