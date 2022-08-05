import { IoLocationSharp } from "react-icons/io5"

function Card(prop) {
    return (
        <div className="card">
            <img src={prop.item.image} alt="" className="card-image"/>
            <div className="card-info-section">
                <div className="card-location">
                    <a href={prop.item.locationLink} target="_blank" rel="noopener noreferrer"><IoLocationSharp className="card-location-icon"/></a>
                    <h6>{prop.item.location}</h6>
                    <a className="card-location-link" href={prop.item.locationLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
                <h1 className="card-heading">{prop.item.heading}</h1>
                <h6 className="card-date">{prop.item.date.start} - {prop.item.date.end}</h6>
                <p className="card-description">{prop.item.description}</p>
            </div>
        </div>
    )
    
}

export default Card;