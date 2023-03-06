import React from 'react'

const ProductsCards = () => {

    const productsData = [
        {
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=532&hei=582&fmt=png-alpha&.v=1660803972361",
            name: "AirPods Pro (2nd generation)",
            brand: "Apple",
            price: "249.00"
        },
        {
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-select-midnight-202210?wid=532&hei=582&fmt=png-alpha&.v=1670557210097",
            name: "AirPods Pro (2nd generation)",
            brand: "Apple",
            price: "249.00"
        },
        {
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXJ92?wid=532&hei=582&fmt=png-alpha&.v=1580420175341",
            name: "Beats Studio3 Wireless Over‑Ear Headphones - Matte Black",
            brand: "Apple",
            price: "249.00"
        },
        {
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJQK3?wid=532&hei=582&fmt=png-alpha&.v=1665496505001",
            name: "AirPods Pro (2nd generation)",
            brand: "Apple",
            price: "249.00"
        },
        {
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDT3?wid=532&hei=582&fmt=png-alpha&.v=1664481896795",
            name: "AirPods Pro (2nd generation)",
            brand: "Apple",
            price: "249.00"
        },
        {
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDP3_FV401?wid=532&hei=582&fmt=png-alpha&.v=1664481416885",
            name: "AirPods Pro (2nd generation)",
            brand: "Apple",
            price: "249.00"
        },
        {
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK0C2?wid=532&hei=582&fmt=png-alpha&.v=1564075356758",
            name: "AirPods Pro (2nd generation)",
            brand: "Apple",
            price: "249.00"
        },
    ]

    return (
        <div className='ProductsCards' >
            {
                productsData.map((v, i) => {
                    return (
                        <div key={i} className="eachCard">
                            <div className="imgDiv">
                                <img src={v.image} alt="" />
                            </div>
                            <div className="detail">
                                <h2>{v.name}</h2>
                                <h3>{v.brand}</h3>
                                <p>$ {v.price}</p>
                            </div>
                            <div className="buyBtn">
                                <button>Buy Now</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductsCards