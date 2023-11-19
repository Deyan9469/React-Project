
const Items = (
    _id,
    model,
    material,
    size,
    price,
    parts,
    color,
    imageUrl,
) => {
    return (

        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* Product image*/}
                            <img
                                className="card-img-top"
                                src={imageUrl}
                                alt="sheet"
                            />
                            {/* Product details*/}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* Product name*/}
                                    <h5 className="fw-bolder">{model}</h5>
                                    {/* Product price*/}
                                    {price}
                                </div>
                            </div>
                            {/* Product actions*/}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <a className="btn btn-outline-dark mt-auto" href="#">
                                        Details
                                    </a>
                                    <a className="btn btn-outline-dark mt-auto" href="#">
                                        Add to cart
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </section>
    );
}

export default Items;