import React, { useState, useEffect } from 'react'
import Header from './Header'
import { Modal, Container } from 'react-bulma-components'
import AddButton from './AddButton'
import Form from './Form'
import ListProducts from './ListProducts'
import { saveProducts } from '../services'
import { getProducts } from '../services/index'
import Loading from './Loading'

const ProductLayout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])

    async function loadProducts() {
        const response = await getProducts()

        if (response.status === 200) {
            setProducts(response.data.products)

        }
        setIsLoading(false)
    }

    useEffect(() => {

        loadProducts()

    }, [products])

    const handlesubmit = async (data) => {
        await saveProducts(data)
        loadProducts()
        setIsModalOpen(false)
        console.log(data)
    }

    return (
        <Container>
            <Header title="Products app" />
            <AddButton onClick={() => setIsModalOpen(true)} />
            {isLoading ?
                <Loading /> :
                products.length !== 0 ?
                    <h1 className="title has-text-centered">
                        Si hay productos
                    </h1> :
                    'No hay productos'}

            <ListProducts products={products} />
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)} >
                <Modal.Card>
                    <Modal.Card.Header>
                        <Modal.Card.Title>
                            Add Products
                        </Modal.Card.Title>
                    </Modal.Card.Header>
                    <Modal.Card.Body>
                        <Form handlesubmit={handlesubmit} />
                    </Modal.Card.Body>
                </Modal.Card>
            </Modal>

        </Container>
    )
}

export default ProductLayout