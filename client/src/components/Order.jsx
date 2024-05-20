import {orders} from "../constants/foodItems.js";
import './styles/Order.css'
export const Order = () => {
    return (
        <>
            <section className='order-container'>
                <h1>How To Order ?</h1>
                <div className='order-content'>
                    {orders.map((order,index)=>{
                        return (
                            <div key={index} className='order-steps'>
                                <h2>0{index+1}</h2>
                                <div>
                                    <span>{order.icon}</span>
                                    <p>{order.name}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}