export default () => ({
  container: {
    background: 'rgba(255, 255, 255, 0.9)'
  },
  arrow: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    fill: '#333',
    opacity: 0.6,
    transition: 'opacity 200ms',
    ':hover': {
      opacity: 1
    }
  },
  arrow__size__medium: {
    borderRadius: 40,
    height: 25,
    marginTop: -20,

    '@media (min-width: 768px)': {
      height: 40,
      padding: 15
    }
  },
  arrow__direction__left: { marginLeft: 10 },
  arrow__direction__right: { marginRight: 10 },
  close: {
    display: 'none'
  },
  footer: {
    color: 'black'
  },
  footerCount: {
    color: 'rgba(0, 0, 0, 0.6)'
  },
  thumbnail: {},
  thumbnail__active: {
    boxShadow: '0 0 0 2px #00D8FF'
  }
})
