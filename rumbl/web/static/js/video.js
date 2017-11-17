import Player from "./player"

let video = {
  init(socket, element){ if(!element){ return }
    let playerId = element.getAttribute("data-player-id")
    let videoId = element.getAttribute("data-id")
    socket.connect()
    Player.init(element.id, playerId, () => {
      this.onReady(videoId, socket)
    })
  },

  onReady(videoId, socket) {
    let msgContainer = document.getElementById("msg-container")
    let msgInput     = document.getElementById("msg-input")
    let vidChannel   = socket.channel("videos:" + videoId)
    // TODO join the vidChannel
  }
}
export default Video
