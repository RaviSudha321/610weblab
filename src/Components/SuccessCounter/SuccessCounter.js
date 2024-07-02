import SuccessCounterItem from '../SuccessCounterItem/SuccessCounterItem';
import './successCounter.css';


function SuccessCounter(){
    return(
        <div className='success_counter'>
            <SuccessCounterItem number="300" title="Successful Projects" />
            <SuccessCounterItem number="97" title="Success Rate" />
            <SuccessCounterItem number="1500" title="Happy Clients" />
        </div>
    )
}

export default SuccessCounter;