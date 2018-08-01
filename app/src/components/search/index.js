import React from 'react'
import './_search.scss'

export const Search = () => {
  const clickAnimation = e => {
    e.preventDefault()
    document.querySelector('.search').classList.add('open')
    setTimeout(() => {
      document.querySelector('.search').classList.add('loading')
    }, 750)
  }

  return (
    <div className="search" onClick={e => clickAnimation(e)}>
      <div className="icon" onClick={e => clickAnimation(e)}>
        <span>
          <svg viewBox="0 0 40 40">
            <path d="M3,3 L37,37" />
          </svg>
        </span>
      </div>
      <div className="field">
        <input type="text" placeholder="Search for something..." />
      </div>
    </div>
  )
}
