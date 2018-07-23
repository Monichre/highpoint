import React from 'react'
import './_process-piece.scss'

export const ProcessPieceDefault = props => (
  <section className="interactive-points" id="interactive-1" tabIndex="0">
    <img className="static" src={props.process.blueprints[0].file.url} alt="" />
    <div className="backgrounds">
    {props.process.afterImages.map(img => (
      <div className="background__element" style={{ backgroundImage: `url(${img.file.url})` }} />
    ))}
      
    </div>
    <svg className="points" viewBox="0 0 1885 1080" width="100%" height="100%">
      <path
        className="point"
        d="M409.2,195.4L409.2,195.4c-7.1-7.1-18.6-7.1-25.7,0l0,0c-6.4,6.4-7.1,18.4-1.7,25.7l14.5,21l14.5-21C416.3,213.8,415.6,201.8,409.2,195.4z"
      />
      <path
        className="point"
        d="M1069.3,589.7L1069.3,589.7c-7.1-7.1-18.6-7.1-25.7,0l0,0c-6.4,6.4-7.1,18.4-1.7,25.7l14.5,21l14.5-21C1076.4,608.2,1075.7,596.1,1069.3,589.7z"
      />
      <path
        className="point"
        d="M1533.8,114.2L1533.8,114.2c-7.1-7.1-18.6-7.1-25.7,0l0,0c-6.4,6.4-7.1,18.4-1.7,25.7l14.5,21l14.5-21C1541,132.6,1540.2,120.6,1533.8,114.2z"
      />
      <path
        className="point"
        d="M878.9,247.4L878.9,247.4c-7.1-7.1-18.6-7.1-25.7,0l0,0c-6.4,6.4-7.1,18.4-1.7,25.7l14.5,21l14.5-21C886,265.8,885.3,253.8,878.9,247.4z"
      />
      <path
        className="point"
        d="M615.2,658.3L615.2,658.3c-7.1-7.1-18.6-7.1-25.7,0l0,0c-6.4,6.4-7.1,18.4-1.7,25.7l14.5,21l14.5-21C622.3,676.8,621.6,664.7,615.2,658.3z"
      />
      <path
        className="point"
        d="M183.5,524L183.5,524c-7.1-7.1-18.6-7.1-25.7,0l0,0c-6.4,6.4-7.1,18.4-1.7,25.7l14.5,21l14.5-21C190.6,542.5,189.9,530.4,183.5,524z"
      />
    </svg>
    <div className="points-tooltips">
      <div className="point-tooltip">
        <h2 className="point-tooltip__title">Kitchen</h2>
        <br />
        <p className="point-tooltip__description">description</p>
      </div>
      <div className="point-tooltip">
        <h2 className="point-tooltip__title">Kitchen</h2>
        <br />
        <p className="point-tooltip__description">description</p>
      </div>
      <div className="point-tooltip">
        <h2 className="point-tooltip__title">Kitchen</h2>
        <br />
        <p className="point-tooltip__description">description</p>
      </div>
    </div>
    <div className="points-content">
      <div className="point-content">
        <h3 className="point-content__title">Kitchen</h3>
        <p className="point-content__subtitle">
          12<sup>th</sup> of August, 2017
        </p>
        <p className="point-content__text">
          A mote of dust suspended in a sunbeam are creatures of the cosmos decipherment, Orion's sword corpus callosum
          galaxies shores of the cosmic ocean.
        </p>
      </div>
      <div className="point-content">
        <h3 className="point-content__title">Kitchen</h3>
        <p className="point-content__subtitle">
          26<sup>th</sup> of March, 2017
        </p>
        <p className="point-content__text">
          Extraplanetary concept of the number one vanquish the impossible culture trillion the sky calls to us.
        </p>
      </div>
      <div className="point-content">
        <h3 className="point-content__title">Kitchen</h3>
        <p className="point-content__subtitle">
          14<sup>th</sup> of January, 2017
        </p>
        <p className="point-content__text">
          Birth, are creatures of the cosmos Cambrian explosion colonies great turbulent clouds cosmos are creatures of
          the cosmos! Great turbulent clouds.
        </p>
      </div>
    </div>
  </section>
)

export const ProcessPieceVariant = props => (
  <section className="interactive-points interactive-points--alter" id="interactive-2" tabindex="0">
    <img className="static" src={props.process.img} alt="" />
    <div className="backgrounds">
      <div className="background__element" style={{ backgroundImage: 'url(/gallery/kitchen.jpg)' }} />
      <div className="background__element" style={{ backgroundImage: 'url(/gallery/kitchen-2.jpg)' }} />
      <div className="background__element" style={{ backgroundImage: 'url(/gallery/kitchen-3.jpg)' }} />
      <div className="background__element" style={{ backgroundImage: 'url(/gallery/white-wall.jpg)' }} />
      <div className="background__element" style={{ backgroundImage: 'url(/gallery/white-wall-2.jpg)' }} />
    </div>
    <svg className="points" viewBox="0 0 1885 1080" width="100%" height="100%">
      <path
        className="point"
        d="M409.2,195.4L409.2,195.4c-7.1-7.1-18.6-7.1-25.7,0l0,0c-6.4,6.4-7.1,18.4-1.7,25.7l14.5,21l14.5-21C416.3,213.8,415.6,201.8,409.2,195.4z"
      />
      <path
        className="point"
        d="M1069.3,589.7L1069.3,589.7c-7.1-7.1-18.6-7.1-25.7,0l0,0c-6.4,6.4-7.1,18.4-1.7,25.7l14.5,21l14.5-21C1076.4,608.2,1075.7,596.1,1069.3,589.7z"
      />
      <path
        className="point"
        d="M1533.8,114.2L1533.8,114.2c-7.1-7.1-18.6-7.1-25.7,0l0,0c-6.4,6.4-7.1,18.4-1.7,25.7l14.5,21l14.5-21C1541,132.6,1540.2,120.6,1533.8,114.2z"
      />
      <path
        className="point"
        d="M878.9,247.4L878.9,247.4c-7.1-7.1-18.6-7.1-25.7,0l0,0c-6.4,6.4-7.1,18.4-1.7,25.7l14.5,21l14.5-21C886,265.8,885.3,253.8,878.9,247.4z"
      />
      <path
        className="point"
        d="M615.2,658.3L615.2,658.3c-7.1-7.1-18.6-7.1-25.7,0l0,0c-6.4,6.4-7.1,18.4-1.7,25.7l14.5,21l14.5-21C622.3,676.8,621.6,664.7,615.2,658.3z"
      />
      <path
        className="point"
        d="M183.5,524L183.5,524c-7.1-7.1-18.6-7.1-25.7,0l0,0c-6.4,6.4-7.1,18.4-1.7,25.7l14.5,21l14.5-21C190.6,542.5,189.9,530.4,183.5,524z"
      />
    </svg>
    <div className="points-tooltips">
      <div className="point-tooltip">
        <h2 className="point-tooltip__title">Kitchen</h2>
        <br />
        <p className="point-tooltip__description">description</p>
      </div>
      <div className="point-tooltip">
        <h2 className="point-tooltip__title">Kitchen</h2>
        <br />
        <p className="point-tooltip__description">description</p>
      </div>
      <div className="point-tooltip">
        <h2 className="point-tooltip__title">Kitchen</h2>
        <br />
        <p className="point-tooltip__description">description</p>
      </div>
      <div className="point-tooltip">
        <h2 className="point-tooltip__title">Kitchen</h2>
        <br />
        <p className="point-tooltip__description">description</p>
      </div>
      <div className="point-tooltip">
        <h2 className="point-tooltip__title">Kitchen</h2>
        <br />
        <p className="point-tooltip__description">description</p>
      </div>
      <div className="point-tooltip">
        <h2 className="point-tooltip__title">Kitchen</h2>
        <br />
        <p className="point-tooltip__description">description</p>
      </div>
    </div>
    <div className="points-content">
      <div className="point-content">
        <h3 className="point-content__title">Kitchen</h3>
        <p className="point-content__subtitle">
          24<sup>th</sup> of February, 2017
        </p>
        <p className="point-content__text">
          Descended from astronomers encyclopaedia galactica from which we spring worldlets intelligent beings gathered
          by gravity billions.
        </p>
      </div>
      <div className="point-content">
        <h3 className="point-content__title">Kitchen</h3>
        <p className="point-content__subtitle">
          3<sup>rd</sup> of March, 2017
        </p>
        <p className="point-content__text">
          Hydrogen atoms circumnavigated Cambrian explosion, a mote of dust suspended in a sunbeam Hypatia.
        </p>
      </div>
      <div className="point-content">
        <h3 className="point-content__title">Kitchen</h3>
        <p className="point-content__subtitle">
          19<sup>th</sup> of July, 2017
        </p>
        <p className="point-content__text">
          From which we spring the ash of stellar alchemy from which we spring emerged into consciousness, great
          turbulent clouds rich in heavy atoms.{' '}
        </p>
      </div>
      <div className="point-content">
        <h3 className="point-content__title">Kitchen</h3>
        <p className="point-content__subtitle">
          12<sup>th</sup> of August, 2017
        </p>
        <p className="point-content__text">
          A mote of dust suspended in a sunbeam are creatures of the cosmos decipherment, Orion's sword corpus callosum
          galaxies shores of the cosmic ocean.
        </p>
      </div>
      <div className="point-content">
        <h3 className="point-content__title">Kitchen</h3>
        <p className="point-content__subtitle">
          26<sup>th</sup> of March, 2017
        </p>
        <p className="point-content__text">
          Extraplanetary concept of the number one vanquish the impossible culture trillion the sky calls to us.
        </p>
      </div>
      <div className="point-content">
        <h3 className="point-content__title">Kitchen</h3>
        <p className="point-content__subtitle">
          14<sup>th</sup> of January, 2017
        </p>
        <p className="point-content__text">
          Birth, are creatures of the cosmos Cambrian explosion colonies great turbulent clouds cosmos are creatures of
          the cosmos! Great turbulent clouds.
        </p>
      </div>
    </div>
  </section>
)

export const ProcessPieceContent = props => (
  <section className="content">
    <div className="content__inner">
      <h1>{props.header}</h1>
      <h3 className="content__subtitle">{props.subheader}</h3>
      <p>{props.body}</p>
      <p className="margin-paragraph">
        <strong>The following example shows some different configuration options:</strong>
      </p>
    </div>
  </section>
)
