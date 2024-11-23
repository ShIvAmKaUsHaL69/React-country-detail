import React from 'react'

export default function Header() {
  return (
<header className="header-container">
  <div className="header-content">
    <h2 className="title">
      <a href="/">Where in the world?</a>
    </h2>
    <p className="theme" onClick={() => {document.body.classList.toggle('dark')
      const mode = document.querySelector("#mode")
      mode.classList.toggle('fa-moon')
      mode.classList.toggle('fa-sun')
      const theme = document.querySelector('.theme')
      if(mode.classList.contains('fa-sun')){
        theme.innerHTML= `<i class="fa-regular fa-sun" id="mode"></i>
      &nbsp;&nbsp;Light Mode`
      }else{
        theme.innerHTML= `<i class="fa-regular fa-moon" id="mode"></i>
      &nbsp;&nbsp;Dark Mode`
      }
    }}>
      <i className="fa-regular fa-moon" id="mode"/>
      &nbsp;&nbsp;Dark Mode
    </p>
  </div>
</header>
  )
}

