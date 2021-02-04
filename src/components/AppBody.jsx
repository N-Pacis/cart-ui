import React from 'react'
import "./AppBody.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function AppBody(props) {
    return (
        <>
         <div className="cloth-image-div">
            <img src={props.image} alt={props.clothName} />
            <div>
                <ArrowBackIcon className="arrow"/>
                <FavoriteBorderIcon className="favorite"/>
            </div>
         </div>   
         <div className="cloth-description-div">
             <div className="cloth-description">
                    <h2>{props.clothName}</h2>
                    <h4>{props.price}</h4>
             </div>
             <p>{props.description}</p>
             <h2>Color</h2>
             <div className="colors">
                 <div className="color-code">
                 </div>
                 <div className="color-code">
                 </div>
                 <div className="color-code">
                 </div>
                 <div className="color-code">
                 </div>
                 <div className="pointer">
                    <p>-</p>
                 </div>
             </div>
             <h3>Size</h3>
             <div className="sizes">
                <div className="size-length">
                    S
                </div>
                <div className="size-length">
                    M
                </div>
                <div className="size-length">
                    L
                </div>
             </div>
             <button><ShoppingCartIcon />Add To Cart</button>
         </div>
        </>
    )
}
