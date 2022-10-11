import React from "react";

const headerStyle = {
  background: '#F55A5A',
  color: 'white', 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  width: '100%',
  height: '55px'
}

export default function Header () {
  return (
  <div className="header" style={headerStyle}>
    <img src="/src/assets/header-logo.png"
         width="30px" />
    <h4>my travel journal</h4>
  </div>
  )
}