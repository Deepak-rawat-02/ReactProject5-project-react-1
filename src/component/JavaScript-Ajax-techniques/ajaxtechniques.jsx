import { useEffect, useState } from "react";
import { moment } from "moment";
import $, { error } from "jquery";
import axios from "axios";
export function Mobile() {
    const [product, setProduct] = useState({ "title": '', "price": 0, "rating": { "rate": 0, "ratings": 0, "rewiews": 0 }, "offers": [], "image": '' })
    function Loaddata() {
// this is the technique of XMLHttpRequest this is good but not best
        // var http = new XMLHttpRequest();
        // http.open("get", "product.json", true);
        // http.send();
        // http.onreadystatechange = function () {
        //     if (http.readyState == 4) {
        //         setProduct(JSON.parse(http.responseText));
        //     }
        // }


        // this is fetch technique this is better but also have some issue in error handling
        // but we have to use this in second priority of the time
        // fetch("product.json").then(response=>
        // {
        //    return response.json();
        // }
        // ).then(product=>
        // {
        //     setProduct(product);
        // }
        // )


        // this is JQuery technique this is good for error handling 
        // we give second priority to this technique
        // $.ajax(
        //     {
        //         method:"get",
        //         url:"product.json",
        //         success:(response=>
        //         {
        //             setProduct(response);
        //         }
        //         ),
        //         error:(message=>{
        //             alert(message);
        //         })
        //     }
        // )
        
   // this the the third party app axios we will give them first priority(react technique)
       axios.get("product.json").then(response=>{
        setProduct(response.data);
       }).catch(error=>{
        console.log(error);
       })

    }

    useEffect(() => {
        Loaddata();
    }, [])
    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-3">
                    <img src={product.image} width="100%" />
                </div>
                <div className="col-9">
                    <div>
                        <h5 className="fs-4 fw-bold" >{product.title} </h5>
                    </div>
                    <div className="mt-3">
                        <span className="bg-success rounded text-white p-1"><span>{product.rating.rate}</span><span className="bi bi-star-fill"></span></span>
                        <span className="ms-3 fw-bold text-secondary">{product.rating.ratings} ratings & {product.rating.rewiews} rewiews</span>
                    </div >
                    <div className="mt-3"><span className="fw-bold fs-3">{product.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</span></div>
                    <div className="mt-3">
                        <h3>Available Offers</h3>
                        <ul className="list-unstyled">
                        {product.offers.map(offer=><li key={offer} className="bi bi-tag-fill text-success my-2"><span className="text-secondary">{offer}</span></li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}