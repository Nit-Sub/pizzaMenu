import React from 'react'
const Footer = () => {
  const hour = new Date().getHours();
  const openHour= 12;
  const closeHour=22;
  let message;
  if (hour>= openHour && hour <=closeHour){
    message= "We're currently open";
  }
  else{
    message= "We're not currently open";
  }
  console.log(hour)
  console.log(message)
  
  return (
    <div>{new Date().toLocaleDateString()}. 
    {message}
    </div>
  )
}
export default Footer