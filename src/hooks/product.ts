import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IProduct } from '../models'

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')


    function addProduct (products: IProduct) {
        setProducts(prev => [...prev, products])
    } 

    async function fetchProducts() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
            setProducts(response.data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as Error
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return { products, loading, error, addProduct }
}