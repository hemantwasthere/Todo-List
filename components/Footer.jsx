import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center items-center gap-5 py-3'>
      <a target="_blank" rel="noreferrer" href="https://github.com/hemantwasthere">
        <i className="fa-brands fa-github duration-300 hover:opacity-30 cursor-pointer"></i>
      </a>
      <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/hemantwasthere">
        <i className="fa-brands fa-linkedin duration-300 hover:opacity-30 cursor-pointer"></i>
      </a>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/hemantwasthere">
        <i className="fa-brands fa-twitter duration-300 hover:opacity-30 cursor-pointer"></i>
      </a>
    </div>
  )
}

export default Footer