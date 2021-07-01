import React from 'react'

const Home = (props) => {
    console.warn('home',props.cartData)
    return (
        <div>
            Home Component
            <div>
                <div> Name : I Phone </div> 
                <div> Price : 1000 USD  </div> 
                <div> <button
                onClick={
                    ()=>props.addToCartHandler({price:1000, name:" I Phone X"})
                }
                > Add To Cart </button>  </div> 
            </div>
        </div>
    )
}

export default Home
