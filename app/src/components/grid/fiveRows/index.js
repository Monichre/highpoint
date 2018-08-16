import React from 'react'
import './_five-rows.scss'

export default props => (
  <div className='five_row_grid_container'>
    <div className='blueprint edit-area'>
      <img src={props.process.blueprints[0].fields.file.url + '?w=1000&h=1000'} />
    </div>
    <div className='before'>
      <h4 style={{ fontSize: '14px', textAlign: 'center', margin: '10px 0' }}>BEFORE </h4>
      {props.process.beforeImages.map(image => (
        <div className='img__wrapper'>
          <img src={image.fields.file.url + '?w=300&h=400&fit=thumb'} />
        </div>
      ))}
    </div>
    <div className='after'>
      <h4 style={{ fontSize: '14px', textAlign: 'center', margin: '10px 0' }}>AFTER </h4>
      {props.process.afterImages.map(image => (
        <div className='img__wrapper'>
          <img src={image.fields.file.url + '?w=300&h=400&fit=thumb'} />
        </div>
      ))}
    </div>
  </div>
)
