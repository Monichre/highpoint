import React from 'react'
import Modal from '../modal'
import SearchInput, { createFilter } from 'react-search-input'
import './_search.scss'

export const Search = () => {

  const clickAnimation = e => {
    e.preventDefault()
    e.stopPropagation()

    document.querySelector('.search').classList.add('open')
    setTimeout(() => {
      document.querySelector('.search').classList.contains('open')
        ? document.querySelector('.search').classList.add('loading')
        : document.querySelector('.search').classList.remove('loading')
    }, 750)
  }

  const submitSearch = e => {
    const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name']
    const appCache = JSON.parse(localStorage.getItem('appCache'))
    console.log(appCache)
    if (e.key === 'Enter') {
      const search = e.target.value
      console.log(search)
    }
  }

  return (
    <Modal>
      <div className="search" onClick={e => clickAnimation(e)}>
        <div className="icon" onClick={e => clickAnimation(e)}>
          <span>
            <svg viewBox="0 0 40 40">
              <path d="M3,3 L37,37" />
            </svg>
          </span>
        </div>
        <div className="field">
          <input type="text" placeholder="Search for something..." onKeyPress={e => submitSearch(e)} />
        </div>
      </div>
    </Modal>
  )
}
