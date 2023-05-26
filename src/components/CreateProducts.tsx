
import React, { useState } from 'react'
import { IProduct } from '../models'
import axios from 'axios'
import { ErrorMessage } from './ErrorMessage'


const productData: IProduct = 
    {
        title: '',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
            rate: 43,
            count: 10
        }

    }


interface CreateProductsProps {
        onCreate: (product: IProduct) => void
}

export function CreateProducts({onCreate} :CreateProductsProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const SubmitHandler =  async(event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if(value.trim().length === 0){
            setError('Please enter valid title')
            return
        }


        productData.title = value
     const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)


     onCreate(response.data)
    }
   
    return (
        <form onSubmit={SubmitHandler}>
            <input type="text" 
            className='border py-2 px-4 mb-2 w-full outline-0' 
            placeholder='Enter ptoduct title...'
            value={value}
            onChange={event => setValue(event.target.value)}
            />
            
            { error && <ErrorMessage error={error}/>}

            <button className='py-2 px-4  border bg-yellow-400 hover:text-white' 
            type='submit'>Create</button>
        </form>
    )
}