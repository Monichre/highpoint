import React from 'react'
import './_four-rows.scss'

export default props => (
  <div className='four_rows_grid_container'>
    <div className='blueprint edit-area'>
      <div className='img__wrapper blueprint__wrapper'>
        <img src={props.process.blueprints[0].fields.file.url + '?w=1000&h=1000'} />
      </div>
    </div>
    <div className='before'>
      <h4 style={{ fontSize: '16px', textAlign: 'center', margin: '10px 0' }}>BEFORE </h4>
      {props.process.beforeImages.map(image => (
        <div className='img__wrapper'>
          <img src={image.fields.file.url + '?w=300&h=400&fit=thumb'} />
        </div>
      ))}
    </div>
    <div className='after'>
      <h4 style={{ fontSize: '16px', textAlign: 'center', margin: '10px 0' }}>AFTER </h4>
      {props.process.afterImages.map(image => (
        <div className='img__wrapper'>
          <img src={image.fields.file.url + '?w=300&h=400&fit=thumb'} />
        </div>
      ))}
    </div>
  </div>
)
