import React from 'react'

export default function Product(props) {
    console.log(props.data);
    return (

        <div className="card" style={{width: '18rem'}}>
   
        <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <h6 className="card-title">{props.data.price}</h6>
        <p className="card-text">{props.data.stockItem}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
}
