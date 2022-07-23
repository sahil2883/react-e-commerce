import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { useSelector,useDispatch } from "react-redux/es/exports";
import { Addtocart } from "./action";



const Detail = () => {
    const { id } = useParams();
    const [data, setdata] = useState({})
    const [rate, setrate] = useState({})
    const dispatch = useDispatch();
    const fetch = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
            setdata(res.data);
            setrate(res.data.rating)
        })
    }



    useEffect(() => {
        fetch();
    }, [])
    return (
        <div className="flex-basics-1 mt-3">
            <div className="container-fluid mt-3">
                <h3 className="text-danger">About Product</h3>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="img-size">
                            <img src={data.image} className="img-fluid" />
                        </div>

                    </div>

                    <div className="col-md-6">
                        <div className="product-Descriptions">
                            <h5>{data.title}</h5>
                            <h5>Rating {rate.rate} <AiFillStar className="umber-icons-1" /></h5>
                            <h6>Rs {data.price}</h6>
                            <p>{data.description}</p>
                        </div>
                        <div className="add-cart">
                            <button className="cart-button" onClick={()=>{dispatch(Addtocart(data),alert("successfully Added"))}}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Detail;