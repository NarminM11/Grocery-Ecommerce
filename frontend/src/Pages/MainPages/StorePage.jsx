import React, { useState, useEffect } from 'react';
import { useCart } from 'react-use-cart';
import axios from 'axios';

const StorePage = () => {
  const { addItem } = useCart();
  const [data, setData] = useState([]);

  const addProductToCart = (product) => {
    const item = {
      id: product.product_id, 
      ...product,
    };
    addItem(item);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8081/products');
      setData(response.data);
      return response.data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filterItems = async (categoryItem) => {
    let allData = await fetchData()
    const result = allData.filter((currentData) => {
      return currentData.category === categoryItem;
    });
    setData(result);
  };

  return (
      <div className='storePage'>
        <div className='row'>
          <div className='stateComponents mt-5 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6'>
            <ul>
              <li onClick={() => filterItems('fruits')}>Fruits</li> <hr />
              <li onClick={() => filterItems('vegetables')}>Vegetables</li> <hr />
            </ul>
          </div>
          <div className='storeElements col-xl-9 col-lg-9 col-md-9 col-sm-6 col-6'>
            <h1>Products</h1>
            <div className='row storeProducts'>
              {data.map((product) => {
                const { product_id, product_name, price, image_url } = product;
                return (
                    <div className='storeElement col-xl-4 col-lg-4 col-md-3 col-sm-12 col-12' key={product_id}>
                      <div className='item d-flex flex-column mb-4'>
                        <div className='inside-item d-flex justify-content-center flex-column'>
                          <div className='storeImg'>
                            <img src={image_url} alt={product_name} width={260} height={330} />
                            <div
                                className='addtoCart d-flex align-items-center justify-content-center'
                                onClick={() => addProductToCart(product)}>
                              Add to cart
                            </div>
                          </div>
                        </div>
                        <p>{product_name}</p>
                        <span>{price} azn</span>
                      </div>
                    </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
  );
};

export default StorePage;
