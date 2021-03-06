# controls/mouse.coffee
# Mouse things
config = require '../../config.coffee'
player = require('../player.coffee')()
fullscreen = require '../../utils/fullscreen.coffee'

mouse = ->
  # single / double click detecting
  window._clicks = 0
  window.onclick = (e) ->
    window._clicks++

    if window._clicks is 1
      setTimeout ->
        if window._clicks is 1
          player.playNext() # single click
        else if 2
          fullscreen.switch() # double click
        else
          return

        window._clicks = 0
      , config.doubleClickInterval

  # volume
  window.onmousewheel = (e) ->
    current = player.getVolume()

    if e.wheelDelta > 0
      player.setVolume current + config.volumeStep
    else
      player.setVolume current - config.volumeStep

# export
module.exports = mouse