import React, {Component} from 'react';
import './Cart.css';
import CartItems from './CartItems';


class Cart extends Component {
   

    render() {
     

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <CartItems items = {this.props.items} />
            </section>

        )

        
    }

}

export default Cart;