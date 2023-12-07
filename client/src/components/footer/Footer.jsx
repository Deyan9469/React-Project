import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <>
            <footer className="py-5 bg-dark">
                <div className="container">
                    <p className="m-0 text-center text-white">
                    BigBusiness&CO&copy; Your favorite website for Bedsheets. <Link to={"/contacts"}>Learn more about us.</Link>
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer;