import {Component} from 'react';
import Image from './Image'
import Details from './Details';
export default class App extends Component {
    render() {
        return(
            <div>
                <Image 
                url="https://randomuser.me/portraits/men/12.jpg"
                />
                <Details
                para="this para which is sent from Details class"
                buttonText="Click me"
                />
            </div>
        )
    }
}