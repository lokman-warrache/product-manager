import React, { useContext } from 'react'
import { Context } from '../api/Datacenter'
import Product from './Product'



export default function Products() {
    const {products} = useContext(Context)
    return (
        <div>
            {products.map(product=>(
                <Product data={product} />
                
            ))}
        </div>
    )
}
