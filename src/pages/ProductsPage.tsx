import React, {useContext} from 'react'
import { Products } from '../components/Products'
import { useProducts } from '../hooks/product'
import { Loader } from '../components/Loader'
import { ErrorMessage } from '../components/ErrorMessage'
import { Modal } from '../components/Modal'
import { CreateProducts } from '../components/CreateProducts'
import { IProduct } from '../models'
import { ModalContext} from '../context/ModalContext'





export function ProductsPage() {
  const { products, loading, error, addProduct} = useProducts()
    const {modal,open,close} = useContext(ModalContext)

  const createHandler = (product: IProduct) =>{
    close()
    addProduct(product)
  }  

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map(products => <Products products={products} key={products.id} />)}
      {modal && <Modal title='Create new product' onClose={close}>
        <CreateProducts onCreate={createHandler}/>
      </Modal>}
      <button className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2' onClick={open}>
        +</button>
    </div>

  )
}