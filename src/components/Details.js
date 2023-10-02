import {Component} from 'react';
export default class Details extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        const t=101
        return(
            <div>

                {/* conditonal randering */}
                {t>100 && <p>{this.props.para}</p>}
                <button>{this.props.buttonText}</button>

            </div>
        )
    }
}