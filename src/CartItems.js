import React, {Component} from 'react';
import './CartItems.css';
import Total from './Total';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class CartItems extends Component {
    

    render() {
        const summary = Object.keys(this.props.items).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.items[feature];

            return (
                <div className="summary__option" key={featureHash}>
                    <div className="summary__option__label">{feature} </div>
                    <div className="summary__option__value">{selectedOption.name}</div>
                    <div className="summary__option__cost">
                        {USCurrencyFormat.format(selectedOption.cost)}
                    </div>
                </div>
            );
        });

        return (
            <section>
                {summary}
                <Total sum={this.props.items} /> 
            </section>
           
        )
    }
}

export default CartItems;



  