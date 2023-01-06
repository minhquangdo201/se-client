import './index.css'
import { Button } from 'react-bootstrap'
const Home = () => {
    return (
        <div>
            <div className="invert">
                <div>
                    <div>BTC</div>
                    <div className='invert-inner'>
                        <div>
                            <div>Historical ROI</div>
                            <div>
                                <div>59.9%</div>
                                <div>
                                    <Button className='period-button'>5YR</Button>
                                    <Button className='period-button'>3YR</Button>
                                    <Button className='period-button'>1YR</Button>
                                    <Button className='period-button'>6M</Button>
                                    <Button className='period-button'>3M</Button>
                                    <Button className='period-button'>7D</Button>
                                    <Button className='period-button'>Chart</Button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>Spot Price</div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className='button-create'>
                    <Button>Create a plan</Button>
                </div>
            </div>
        </div>
    )
}

export default Home;