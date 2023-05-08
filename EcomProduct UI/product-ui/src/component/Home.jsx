import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import productService from '../service/product.service';

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService
      .getAllProduct()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    productService
      .deleteProduct(id)
      .then((res) => {
        setMsg("Deleted Successfully");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  return (
    <div>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-header fs-3 text-center'>
                All Product List
                {msg && <p className='fs-4 text-center text-danger'>{msg}</p>}
              </div>
              <div className='card-body'>
                <div class='row'>
                  {productList.map((p, num) => (
                    <div class='col-sm-6'>
                      <div className='card m-2'>
                        <div class='card-header'>

                          <h3> {p.productName}</h3>
                        </div>
                        <div class='card-body'>
                          <h5 class='card-title'>
                            Price: <b>₹{p.price}</b>
                          </h5>
                          <p class='card-text'>Description: {p.description}</p>
                          <p>
                            <span class='badge rounded-pill bg-dark'>
                              {p.status}
                            </span>
                          </p>
                          <button
                            onClick={() => deleteProduct(p.id)}
                            class='btn btn-sm btn-danger'>
                            Delete
                          </button>
                          <Link to={'editProduct/'+p.id} class='btn btn-sm btn-warning ms-3'>
                            Update
                          </Link>
                        </div>
                        <p>Product Serial No. : {num + 1}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
