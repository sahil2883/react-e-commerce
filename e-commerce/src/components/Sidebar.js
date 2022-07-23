import React from "react";
import { Link } from 'react-router-dom';
import {FaShoppingBag} from 'react-icons/fa';



const Sidebar = () => {
    return (
        <div className="flex-basics mt-3">
            <div className="container-fluid mt-3">
                <div className="box-shadow-1">
                    <ul className="list-dashboard">
                        <li><Link to="#"><FaShoppingBag className="umber-icons"/>Fashion</Link></li>
                        <li><Link to="#"><FaShoppingBag className="umber-icons"/>Electronic</Link></li>
                        <li><Link to="#"><FaShoppingBag className="umber-icons"/>Cars</Link></li>
                        <li><Link to="#"><FaShoppingBag className="umber-icons"/>Home & Garden</Link></li>
                        <li><Link to="#"><FaShoppingBag className="umber-icons"/>Gits</Link></li>
                        <li><Link to="#"><FaShoppingBag className="umber-icons"/>Music</Link></li>
                        <li><Link to="#"><FaShoppingBag className="umber-icons"/>Health & Beauty</Link></li>
                        <li><Link to="#"><FaShoppingBag className="umber-icons"/>Pets</Link></li>
                        <li><Link to="#"><FaShoppingBag className="umber-icons"/>Baby Toys</Link></li>
                        <li><Link to="#"><FaShoppingBag className="umber-icons"/>Groceries</Link></li>
                        <li><Link to="#"><FaShoppingBag className="umber-icons"/>Books</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Sidebar;