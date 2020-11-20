import React, { useState } from 'react'

export default function Addnew() {

    const [product, setproduct] = useState({})
    const handleInputs = (e)=> {
        setproduct({
            ...product,
            [e.target.name]:e.target.value
        })
    }
    return (
        <div>
            <div className="form-group offset-2 col-md-8 mt-5">
            <input type="text" name="name" onChange={handleInputs} className="form-control mt-4" placeholder="Product name" />
            <input type="text" name="price"onChange={handleInputs} className="form-control mt-4"  placeholder="Product price" />
            <input type="email" name="stockItem" onChange={handleInputs} className="form-control mt-4" placeholder="Product stock item" />
            <textarea style={{resize: "none"}} name='description' onChange={handleInputs} type="message" rows="5" className="form-control mt-4 resize-none"placeholder="Product description" />
            <button  className="btn btn-primary offset-5 col-md-3 mt-4">Entrer</button>
        </div> 

        </div>
    )
}
