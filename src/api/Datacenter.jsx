import React, { createContext, useEffect, useState } from 'react'
import { db } from '../firebase/Config'

export const Context = createContext()

export function Datacenter(props) {
    const[products, setproducts] = useState([])

    useEffect(() => {
        function fetchdata(){
           db.collection("products").get()
           .then(result=>{
              const data=result.docs.map(product=>{
                 return {
                     id:product.id,
                     ...product.data()
                    }
              })
              setproducts(data)
           })
        }
        fetchdata()
    }, [])
    
    return (
        <div>
            <Context.Provider value={{
                
                products,


            }}>
             {props.children}
            </Context.Provider>
        </div>
    )
}
