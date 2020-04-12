import React, { Component } from 'react'
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../axios-orders';
class Orders extends Component {
    state = {
        orders: [],
        loading: false
    }

    async componentDidMount() {
        this.setState({
            loading: true
        })
        const result = await axios.get('/orders.json')
        let orders = []
        for (let key in result.data) {
            orders.push(result.data[key])
        }
        this.setState({
            orders: orders, loading: false
        })
    }
        render() {
            let orders = <Spinner show={this.state.loading} />

            if (this.state.orders.length) {
                orders = this.state.orders.map(order => {
                    return <Order ingredients={order.ingredients} price={order.price} />
                })
            }
            return orders
        }
}

export default Orders;