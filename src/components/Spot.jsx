import React from 'react'

const spotStyle = {
  display: 'flex',
  gap: '1.2rem',
}

export default function Spot(props) {
  
  return (
    <div className="spot" style={spotStyle}>
      <img src={props.item.imageUrl}  
           className="spot--img" 
           width="125px"
           height="168px"
      />
      <div className="spot--info">
        <div className="spot--info--loc">
          <img src="/src/assets/location-icon.png" 
               className="spot--loc-info" 
               width="7px"
               height="10px"
               />
          <h5 className="spot--loc--country">{props.item.location}</h5>
          <a href={props.item.googleMapsUrl} className="spot--loc--link">
            <h6 className="spot--loc--link">View on Google Maps</h6>
          </a>
        </div>
        <h2 className="spot--name">{props.item.title}</h2>
        <h5 className="spot--timing">{props.item.startDate} - {props.item.endDate}</h5>
        <p className="spot--description">{props.item.description}</p>
      </div>
    </div>
  )
}
