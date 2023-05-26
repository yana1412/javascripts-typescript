import React, { useState } from 'react'

import { IProduct } from "../models"

interface ProductsProps {
    products: IProduct
}

export function Products({ products }: ProductsProps) {
    const [details, setDetails] = useState(false)
    const betnClassDetails  = details  ? 'bg-yellow-400' : 'bg-red-400'

    const btnClasess = [
        'py-2 px-4 border',
        betnClassDetails
    ]
    
    return (
        <div className="border px-4 py-2 rounded flex flex-col items-center mb-2">{products.title}
            <img src={products.image} className="w-1/6" alt={products.title} />
            <p>{products.title}</p>
            <p className="bold">{products.price}</p>

            <button className={btnClasess.join( ' ')} 
            onClick={() => setDetails(prev => !prev)}>
                {details ? 'hide' : 'show'}
            </button>

            {details && <div>
                <p>{products.description}</p>
                <p>Rate : <span style={{fontWeight : 'bold'}}>{products?.rating?.rate}</span></p>
            </div>}
        </div>
    )
} 
