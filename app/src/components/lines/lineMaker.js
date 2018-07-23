import anime from 'animejs'
/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */

// Helper vars and functions.
function extend(a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key]
    }
  }
  return a
}

/**
     * Line obj.
     */
class Line {
  constructor(options) {
    this.options = {
      // top, left, width, height: numerical for pixels or string for % and viewport units. Examples: 2 || '20%' || '50vw'.
      // color: the (bg)color of the
      // hidden: defines if the line is rendered initially or hidden by default.
      // animation: animation properties for the line
      // 		duration: animation speed.
      // 		easing: animation easing (animejs easing. To see all possible values console animejs.easings).
      // 		delay: animation delay.
      // 		direction: line animation direction. Possible values: TopBottom || BottomTop || LeftRight || RightLeft || CenterV || CenterH.
      width: 1,
      height: '100%',
      left: '50%',
      top: '0%',
      color: '#000',
      hidden: false,
      animation: {
        duration: 500,
        easing: 'linear',
        delay: 0,
        direction: 'TopBottom'
      }
    }
    this.options = extend({}, this.options)
    extend(this.options, options)
    this._init()
  }

  _init = function() {
    console.log("Im in the Line init")

    this.el = document.createElement('div')
    this.el.className = 'decoline'
    var opts = this.options
    this.el.style.width = typeof opts.width === 'number' ? opts.width + 'px' : opts.width
    this.el.style.height = typeof opts.height === 'number' ? opts.height + 'px' : opts.height
    this.el.style.left = typeof opts.left === 'number' ? opts.left + 'px' : opts.left
    this.el.style.top = typeof opts.top === 'number' ? opts.top + 'px' : opts.top
    this.el.style.background = opts.color || opts.color
    this.el.style.opacity = opts.hidden ? 0 : 1
    this._setOrigin()
    this.rendered = !opts.hidden
  }

  /**
       * Transform origin is set according to the animation direction.
       */
  _setOrigin = function() {
    var opts = this.options,
      tOrigin = '50% 50%'

    if (opts.animation.direction === 'TopBottom') {
      tOrigin = '50% 0%'
    } else if (opts.animation.direction === 'BottomTop') {
      tOrigin = '50% 100%'
    } else if (opts.animation.direction === 'LeftRight') {
      tOrigin = '0% 50%'
    } else if (opts.animation.direction === 'RightLeft') {
      tOrigin = '100% 50%'
    }

    this.el.style.WebkitTransformOrigin = this.el.style.transformOrigin = tOrigin
  }

  /**
       * Animates the 
       */
  animate = function(settings) {
    if (this.isAnimating) {
      return false
    }
    this.isAnimating = true

    var animeProps = {
      targets: this.el,
      duration: settings && settings.duration != undefined ? settings.duration : this.options.animation.duration,
      easing: settings && settings.easing != undefined ? settings.easing : this.options.animation.easing,
      delay: settings && settings.delay != undefined ? settings.delay : this.options.animation.delay
    }

    if (settings && settings.direction) {
      this.options.animation.direction = settings.direction
    }

    // Sets origin again. Settings might contain a different animation direction?
    this._setOrigin()

    if (
      this.options.animation.direction === 'TopBottom' ||
      this.options.animation.direction === 'BottomTop' ||
      this.options.animation.direction === 'CenterV'
    ) {
      animeProps.scaleY = this.rendered ? [1, 0] : [0, 1]
    } else {
      animeProps.scaleX = this.rendered ? [1, 0] : [0, 1]
    }

    if (!this.rendered) {
      this.el.style.opacity = 1
    }

    var self = this
    animeProps.complete = function() {
      self.rendered = !self.rendered
      if (settings && settings.complete) {
        settings.complete()
      }
      self.isAnimating = false
    }

    anime(animeProps)
  }

  /**
       * Show the 
       */
  show = function() {
    this.el.style.opacity = 1
    this.el.style.WebkitTransform = this.el.style.transform = 'scale3d(1,1,1)'
    this.rendered = true
  }

  /**
       * Hide the 
       */
  hide = function() {
    this.el.style.opacity = 0
    this.rendered = false
  }
}

/**
     * LineMaker obj.
     */
class LineMaker {
  constructor(options) {
    this.options = {
      // Where to insert the lines container.
      // element: the DOM element or a string to specify the selector, e.g. '#id' or '.classname'.
      // position: Whether to prepend or append to the parent.element
      parent: { element: document.querySelector('.component'), position: 'prepend' },
      // position: if fixed the lines container will have fixed position.
      position: 'absolute',
      // The lines settings.
      lines: []
    }
    this.options = extend({}, this.options)
    extend(this.options, options)
    this._init()
  }

  /**
     * Create the lines and its structure.
     */
  _init = function() {

   
    this.lines = []

    this.decolines = document.createElement('div')
    this.decolines.className = 'decolines'
    if (this.options.position === 'fixed') {
      this.decolines.className += ' decolines--fixed'
    }

    for (var i = 0, len = this.options.lines.length; i < len; ++i) {
      var lineconfig = this.options.lines[i],
        line = new Line(lineconfig)

      this.decolines.appendChild(line.el)
      this.lines.push(line)
    }

    var p = this.options.parent,
      pEl = typeof p.element === 'string' ? document.querySelector(p.element) : p.element

    if (p.position === 'prepend') {
      pEl.insertBefore(this.decolines, pEl.firstChild)
    } else {
      pEl.appendChild(this.decolines)
    }
  }

  /**
     * Shows/Hides one line with an animation.
     */
  _animateLine = function(lineIdx, dir, settings) {
    var line = this.lines[lineIdx]
    if ((line && dir === 'in' && !line.rendered) || (dir === 'out' && line.rendered)) {
      line.animate(settings)
    }
  }

  /**
     * Shows/Hides all lines with an animation.
     */
  _animateLines = function(dir, callback) {
    var completed = 0,
      totalLines = this.lines.length

    if (totalLines === 0) {
      callback()
      return
    }

    var checkCompleted = function() {
      completed++
      if (completed === totalLines && typeof callback === 'function') {
        callback()
      }
    }

    for (var i = 0; i < totalLines; ++i) {
      var line = this.lines[i]
      if ((dir === 'in' && !line.rendered) || (dir === 'out' && line.rendered)) {
        line.animate({
          complete: function() {
            checkCompleted()
          }
        })
      } else {
        checkCompleted()
      }
    }
  }

  /**
     * Shows/Hides one line.
     */
  _toggleLine = function(lineIdx, action) {
    var line = this.lines[lineIdx]
    if (!line) {
      return
    }

    if (action === 'show' && !line.rendered) {
      line.show()
    } else if (action === 'hide' && line.rendered) {
      line.hide()
    }
  }

  /**
     * Shows/Hides all lines.
     */
  _toggleLines = function(action) {
    for (var i = 0, len = this.lines.length; i < len; ++i) {
      this._toggleLine(i, action)
    }
  }

  /**
     * Shows one line with an animation.
     * lineIndex: index/position of the line in the options.lines array.
     * animationSettings is optional: if not passed, the animation settings defined in options.lines for each line will be used.
     */
  animateLineIn = function(lineIdx, settings) {
    this._animateLine(lineIdx, 'in', settings)
  }

  /**
     * Hides one line with an animation.
     * lineIndex: index/position of the line in the options.lines array.
     * animationSettings is optional: if not passed, the animation settings defined in options.lines for each line will be used.
     */
  animateLineOut = function(lineIdx, settings) {
    this._animateLine(lineIdx, 'out', settings)
  }

  /**
     * Shows all lines with an animation.
     */
  animateLinesIn = function(callback) {
    this._animateLines('in', callback)
  }

  /**
     * Hides all lines with an animation.
     */
  animateLinesOut = function(callback) {
    this._animateLines('out', callback)
  }

  /**
     * Shows one line.
     * lineIndex: index/position of the line in the options.lines array.
     */
  showLine = function(lineIdx) {
    this._toggleLine(lineIdx, 'show')
  }

  /**
     * Hides one line.
     * lineIndex: index/position of the line in the options.lines array.
     */
  hideLine = function(lineIdx) {
    this._toggleLine(lineIdx, 'hide')
  }

  /**
     * Shows all lines.
     */
  showLines = function() {
    this._toggleLines('show')
  }

  /**
     * Hides all lines.
     */
  hideLines = function() {
    this._toggleLines('hide')
  }

  /**
     * Removes a line.
     * lineIndex: index/position of the line in the options.lines array.
     */
  removeLine = function(lineIdx) {
    var line = this.lines[lineIdx]
    if (line) {
      this.lines.splice(lineIdx, 1)
      this.decolines.removeChild(this.decolines.children[lineIdx])
    }
  }

  /**
     * Removes all lines.
     */
  removeLines = function() {
    this.lines = []
    this.decolines.innerHTML = ''
  }

  /**
     * Creates a line.
     * settings is optional: same settings passed in options.lines for one line.
     */
  createLine = function(settings) {
    var line = new Line(settings)
    this.decolines.appendChild(line.el)
    this.lines.push(line)
  }

  /**
     * Returns the total number of lines.
     */
  getTotalLines = function() {
    return this.lines.length
  }
}

export { LineMaker }
