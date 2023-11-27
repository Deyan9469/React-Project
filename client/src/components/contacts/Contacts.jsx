import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/all.min.js"
import "./contactCSS.css"
const Contacts = () =>{
    const locationUlr = "https://www.google.com/maps/place/42%C2%B042'03.2%22N+23%C2%B022'23.8%22E/@42.7013827,23.3547691,15z/data=!4m13!1m8!3m7!1s0x40a8fec1c85bf089:0xa01269bf4c10!2z0JHRitC70LPQsNGA0LjRjw!3b1!8m2!3d42.733883!4d25.48583!16zL20vMDE1cWg!3m3!8m2!3d42.700894!4d23.373271?hl=bg&entry=ttu"

    return(
        <section className="contactsPage">
            <h2> Contact us </h2>

            <ul>
                <li>BigBusiness&CO</li>
                <li><i className="fa-solid fa-envelope"></i> BigBusiness&CO@abv.bg</li>
                <li><i className="fa-solid fa-phone"></i> Phone: +359 666 555 333</li>
                <li><i className="fa-solid fa-location-dot"></i><a href={locationUlr}> BigBusiness&CO</a></li>
            </ul>
        </section>
    );
}

export default Contacts;