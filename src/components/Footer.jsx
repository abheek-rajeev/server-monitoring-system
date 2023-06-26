import React from 'react'

function Footer() {
    var currentdate=new Date();
    var year=currentdate.getFullYear();
  return (
    <div>
    <footer> <p>Copyright@{year}</p></footer>
    </div>
  )
}

export default Footer