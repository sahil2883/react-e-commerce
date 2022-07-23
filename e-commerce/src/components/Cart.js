import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";




const Cart = () => {
    const value = useSelector((state) => {
        return (
            state.Add.list
        )
    })

    const recept = useSelector((val)=>{
        const goal = val.Add.list.filter((e)=> e.id )
        const va = value.map((e)=> e)
        const next = va.id === goal.id
        const nex = next.length
        return nex;
    })

    

    console.log(recept);

    const data = value.length;
    return (
        <div className="flex-basics-1 mt-3">
            <div className="container-fluid mt-3">
                <h3 className="text-danger">Cart Items</h3>
            </div>
            <div className="container mt-3">


                {data === 0 ? <h1>No data is available</h1> : <>
                    {value.map((e, index) => {
                        return (
                            <div className="box-shadow p-2 mb-4">
                                <div className="row" key={index} >
                                    <div className="col-md-3">
                                        <img src={e.image} className="img-fluid-p" />
                                    </div>
                                    <div className="col-md-9">
                                        <h5>{e.title}</h5>
                                        <h6>Price : Rs. {e.price}</h6>
                                        <div className="d-flex cart-system align-items-center">
                                            <p>Quantity: </p>
                                            <button>+</button>
                                            <input className=""/>
                                            <button>-</button>
                                        </div>
                                        <p className="para">Remove</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}</>}

            </div>
        </div>
    )
}

export default Cart;