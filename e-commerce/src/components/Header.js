import React, { useState } from "react";
import { Link } from 'react-router-dom';
import pic from '../img/3.png'
import flag from '../img/flag.png'
import { BsTelephoneFill, BsFillBagFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import { useSelector,useDispatch } from "react-redux/es/exports";
const Header = () => {
    const value = useSelector((state)=>{
        return(
            state.Add.list
        )
    })
     const data =  value.length;


    return (
        <header>
            {/* top header */}
            <nav className="top-header">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center">

                        < div className="first-half">
                            <ul className="d-flex ">
                                <li><Link to=""><BsTelephoneFill className="icons" />+8801234577894</Link></li>
                                <li><Link to=""><HiOutlineMail className="icons" />example@gmail.com</Link></li>
                            </ul>
                        </div>

                        <div className="second-half">
                            <ul className="d-flex">
                                <li><Link to=''>Theme FAQ'S</Link></li>
                                <li><Link to=''>Need Helps</Link></li>
                                <li><Link to=''><img src={flag} className="width-1" />EN</Link></li>
                                <li><Link to=''><img src={flag} className="width-1" />USD</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="box-shadow">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-2">
                            <Link to="/">
                                <img src={pic} className="img-fluid-1" />
                            </Link>
                        </div>
                        <div className="col-md-8">
                            <div className="d-flex">
                                <BiSearch className="custom-icons" />
                                <input className="input-custom" placeholder="search Here..." type="text" />
                                <button className="bnt" >Search</button>
                            </div>
                        </div>
                        <div className="col-md-2 ">
                            <div className="d-flex justify-content-evenly">
                                <div className="box">
                                    <FaUser className="box-icons" />
                                </div>

                                <div className="box">
                                    <Link to="/cart"><BsFillBagFill className="box-icons" /></Link>
                                </div>

                                <div className="red-bot">{data}</div>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;