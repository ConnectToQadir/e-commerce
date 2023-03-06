import {useEffect} from 'react'

const ProductDetail = () => {

    useEffect(()=>{
        console.log(window.location)
    },[])

    return (
        <div className='ProductDetail'>
            <div className="detailSection">
                <div className="upper">
                    <h1>Beats Studio3 Wireless Over‑Ear Headphones - Matte Black</h1>
                    <span>$ 349.95</span>

                    {/* Delivery */}
                    <div className="delivery">
                        <div className="head">
                            <i className="fa-solid fa-truck-fast"></i>Delivery:
                        </div>
                        <div className="body">
                            <p>In Stockbr</p>
                            <p> Free Shipping</p>
                            <a href="/">Get delivery dates</a>
                        </div>
                    </div>

                    {/* Availability */}
                    <div className="delivery">
                        <div className="head">
                        <i className="fa-solid fa-bag-shopping"></i>Availability:
                        </div>
                        <div className="body">
                            <p>In Stockbr</p>
                            <p> Free Shipping</p>
                            <a href="/">Get delivery dates</a>
                        </div>
                    </div>

                    <button className="addToCartBtn">Add To Cart</button>
                </div>


                <div className="helpSection">
                    <i className="fa-regular fa-comments"></i> Need some help? <a href="/">Contact us</a>.
                </div>
            </div>
            <div className="imagesSection">
                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXJ92?wid=532&hei=582&fmt=png-alpha&.v=1580420175341" alt="" />
            </div>
        </div>
    )
}

export default ProductDetail