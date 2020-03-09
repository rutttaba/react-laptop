import React, {Component} from 'react';
import './Total.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class Total extends Component {
   

    render() {
        const total = Object.keys(this.props.sum).reduce(
            (acc, curr) => acc + this.props.sum[curr].cost,
            0
        );

        return(
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {USCurrencyFormat.format(total)}
                </div>
            </div>
        )

    }
}

export default Total;



