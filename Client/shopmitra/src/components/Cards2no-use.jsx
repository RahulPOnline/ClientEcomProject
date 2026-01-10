import React from 'react';
import "../style/Style.css";

export default function Cards({ data }) {
    const products = [
  {
    id: 1,
    badge: "BIG1 + EXTRA 5% OFF",
    image: "https://images.mamaearth.in/catalog/product/1/_/1_197.jpg?format=auto&width=400&height=400",
    title: "Ubtan Natural Glow Face Wash with Turmeric & Saffron for Tan...",
    subtitle: "Removes Tan | Brightens Skin",
    size: "200ml",
    rating: 4.9,
    reviews: 170,
    price: 549
  },
  {
    id: 2,
    badge: "BIG1 + EXTRA 5% OFF",
    image: "https://images.mamaearth.in/catalog/product/1/_/1_192.jpg?format=auto&width=400&height=400",
    title: "Rice Dewy Bright Face Wash With Rice Water & Niacinamide for Gla...",
    subtitle: "Gently Cleanses Skin | Hydrates Skin",
    size: "200ml",
    rating: 4.8,
    reviews: 93,
    price: 549
  },
  {
    id: 3,
    badge: "BIG1 + EXTRA 5% OFF",
    image: "https://images.mamaearth.in/catalog/product/1/_/1_199.jpg?format=auto&width=400&height=400",
    title: "Lemon Anti-Dandruff Shampoo with Lemon & Aloe Vera for Itchy...",
    subtitle: "Up to 100% Dandruff Reduction in 1 Wash*",
    size: "250ml",
    rating: 4.8,
    reviews: 110,
    price: 310
  },
  {
    id: 4,
    badge: "BIG1 + EXTRA 5% OFF",
    image: "https://images.mamaearth.in/catalog/product/v/i/vitamin_c_fw_50g.jpg?format=auto&width=400&height=400",
    title: "Mamaearth Vitamin C Daily Glow Sunscreen SPF 50 PA++++ – In-Vivo...",
    subtitle: "Removes Tan | Brightens Skin",
    size: "50g",
    rating: 5.0,
    reviews: 261,
    price: 349
  }
];


    return (
        <>
            <h1 style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "24px",
                width: "88%",
                margin: "50px auto 0"
            }}>
                Best Sellers
            </h1>

            <p style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "15px",
                width: "88%",
                margin: "auto",
                marginBottom: "30px"
            }}>
                Explore best-selling safe, natural, and 100% toxin-free baby and beauty products from Mamaearth.
            </p>

            <div id="cartcontainer">
                {products.map((item) => (
                    <div id="cart2" key={item.id}>

                        <div id="bestseller">{item.badge}</div>

                        <div id="box1">
                            <img className="product" src={item.image} alt={item.title} />
                        </div>

                        <div id="headingdiv">
                            <p id="heading">{item.title}</p>
                            <p className="heading2">{item.subtitle}</p>
                        </div>

                        <div id="review">
                            <p>{item.size}</p>
                        </div>

                        <div id="ratings">
                            <i className="fa-regular fa-star staricon"></i>
                            <p>{item.rating}</p>
                            <i className="fa-solid fa-check verified"></i>
                            <p>{item.reviews} Reviews</p>
                        </div>

                        <div id="pricingdiv">
                            <p style={{
                                fontFamily: "Arial, Helvetica, sans-serif",
                                fontSize: "16px",
                                fontWeight: 600
                            }}>
                                ₹{item.price}
                            </p>
                        </div>

                        <div id="addbtn">
                            <button className="btncart">Add To Cart</button>
                        </div>

                    </div>
                ))}
            </div>



            <div id="cart2">

                <div id="bestseller">
                    BIG1 + EXTRA 5% OFF
                </div>

                <div id="box1">
                    <img
                        className="product"
                        src="https://images.mamaearth.in/catalog/product/1/_/1_192.jpg?format=auto&width=400&height=400"
                        alt="Product"
                    />
                </div>

                <div id="headingdiv">
                    <p id="heading">Rice Dewy Bright Face Wash With Rice Water & Niacinamide for Gla...</p>
                    <p className="heading2">Gently Cleanses Skin | Hydrates Skin</p>
                </div>

                <div id="review">
                    <p>200ml</p>
                </div>

                <div id="ratings">
                    <i className="fa-regular fa-star staricon"></i>
                    <p>4.8</p>
                    <i className="fa-solid fa-check verified"></i>
                    <p>93 Reviews</p>
                </div>

                <div id="pricingdiv">
                    <p style={{
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontSize: "16px",
                        fontWeight: 600,
                        display: "flex",
                        gap: "5px"
                    }}>
                        ₹549
                    </p>
                </div>

                <div id="addbtn">
                    <button className="btncart">Add To Cart</button>
                </div>

            </div>



            <div id="cart2">

                <div id="bestseller">
                    BIG1 + EXTRA 5% OFF
                </div>

                <div id="box1">
                    <img
                        className="product"
                        src="https://images.mamaearth.in/catalog/product/1/_/1_199.jpg?format=auto&width=400&height=400"
                        alt="Product"
                    />
                </div>

                <div id="headingdiv">
                    <p id="heading">Lemon Anti-Dandruff Shampoo with Lemon & Aloe Vera for Itchy...</p>
                    <p className="heading2">Up to 100% Dandruff Reduction in 1 Wash*</p>
                </div>

                <div id="review">
                    <p>250ml</p>
                </div>

                <div id="ratings">
                    <i className="fa-regular fa-star staricon"></i>
                    <p>4.8</p>
                    <i className="fa-solid fa-check verified"></i>
                    <p>110 Reviews</p>
                </div>

                <div id="pricingdiv">
                    <p style={{
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontSize: "16px",
                        fontWeight: 600,
                        display: "flex",
                        gap: "5px"
                    }}>
                        ₹310
                        {/* <span style={{ textDecoration: "line-through", color: "grey" }}>
                        ₹269
                    </span> */}
                    </p>

                    {/* <div id="centoff">
                    15% Off
                </div> */}
                </div>

                <div id="addbtn">
                    <button className="btncart">Add To Cart</button>
                </div>

            </div>


            <div id="cart2">

                <div id="bestseller">
                    BIG1 + EXTRA 5% OFF
                </div>

                <div id="box1">
                    <img
                        className="product"
                        src="https://images.mamaearth.in/catalog/product/v/i/vitamin_c_fw_50g.jpg?format=auto&width=400&height=400"
                        alt="Product"
                    />
                </div>

                <div id="headingdiv">
                    <p id="heading">Mamaearth Vitamin C Daily Glow Sunscreen SPF 50 PA++++ In-Vivo...</p>
                    <p className="heading2">Removes Tan | Brightens Skin</p>
                </div>

                <div id="review">
                    <p>50g</p>
                </div>

                <div id="ratings">
                    <i className="fa-regular fa-star staricon"></i>
                    <p>5.0</p>
                    <i className="fa-solid fa-check verified"></i>
                    <p>261 Reviews</p>
                </div>

                <div id="pricingdiv">
                    <p style={{
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontSize: "16px",
                        fontWeight: 600,
                        display: "flex",
                        gap: "5px"
                    }}>
                        ₹349
                        {/* <span style={{ textDecoration: "line-through", color: "grey" }}>
                        ₹269
                    </span> */}
                    </p>

                    {/* <div id="centoff">
                    15% Off
                </div> */}
                </div>

                <div id="addbtn">
                    <button className="btncart">Add To Cart</button>
                </div>

            </div>





        </>
    )
}
