import React, { useEffect, useState } from "react";
import banner from '../img/banner.png';
import product from '../img/4.jpg';
import axios from "axios";
import { Link } from "react-router-dom";

const Index = () => {
    const [data, setdata] = useState([])
    const [categories,setcategories] = useState([]);
    const fetch = () => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            setdata(res.data);
        })
    }

    const fetch2 = () =>{
        axios.get('https://fakestoreapi.com/products/categories').then((res)=>{
            setcategories(res.data);
        })
    }

    const handleApi = (e) =>{
        if(e === ''){
            fetch()
        }else{
        axios.get(`https://fakestoreapi.com/products/category/${e}`).then((res)=>{
            setdata(res.data);
        })
    }
    }



    useEffect(() => {
        fetch()
        fetch2()
    }, [])
    return (
        <div className="flex-basics-1 mt-3">
            <div className="container-fluid mt-3">
                <img src={banner} alt="banner" style={{ width: "100%", height: "400px" }} />
            </div>

            <div className="container mt-3">
                <div className="row mb-3">
                    <h3 className="text-danger bor">Product</h3>
                </div>

                <div className="row mb-3">
                    <div className="d-flex justify-content-center">
                        <p className="cate-box" onClick={()=>handleApi("")} >All</p>
                        {categories.map((e,index)=>{
                            return(
                                <p className="cate-box" onClick={()=>handleApi(e)} key={index}>{e}</p>
                            )
                        })}
                        
                    </div>
                </div>
                <hr></hr>

                <div className="row">
                    {data.map((e, index) => {
                        return (
                            <div className="col-md-3 mt-4" key={index}>
                                <Link to={`/product-Details/${e.id}`} className="text-dec">
                                    <div className="box-features">
                                        <img className="width-3" src={e.image} />
                                        <div className="detail-header">
                                            <h5 className="text-danger">{e.title.substring(0, 20)}</h5>
                                            <p>RS.{e.price}</p>
                                            <p>{e.description.substring(0, 110)}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Index;