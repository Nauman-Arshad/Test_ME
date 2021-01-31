import React, {Fragment, useEffect, useState} from 'react';
import './home.css';
import CarouselSlider from './../../components/Carousel/CarouselSlider';
import Products from './../../components/Products/Products';

type productType = {
    id: string
    title: string,
    image: string,
    price: number,
}

function Home() {

    const [products, setProducts] = useState<productType[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await fetch('/api/products');
            const result = await products.json();
            setProducts(result.products);
        }
        fetchProducts();
    }, [])

    return (
        <Fragment>
            <div className="section">
                <CarouselSlider/>
                <div className="product_bars">
                    <h3 className="head_betwwen">Featured Items</h3>
                    <div className="slider-frame">
                        {
                            products.map(product => (
                                <Products product={product} key={product.id} description={"Featured"} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Home;
