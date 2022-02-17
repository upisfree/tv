# ui/logo.coffee
# Logo init
element = require '../utils/element.coffee'
config = require '../config.coffee'
isMobile = require 'ismobilejs'
fullscreen = require '../utils/fullscreen.coffee'

e = null
fs = null

logo =
  init: ->
    e = element.byId('logo')

    if isMobile.apple.device
      e.textContent = config.iOSLogoText

    fs = element.byId('fullscreen')
    fs.addEventListener 'click', fullscreen.switch

  iOSReturnText: ->
    e.textContent = config.logoText

# export
module.exports = logo