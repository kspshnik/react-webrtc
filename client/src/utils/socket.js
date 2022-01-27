import { io } from 'socket.io-client'

const SERVER_URI = import.meta.DEV ? 'http://localhost:4000' : ''

const socket = io(SERVER_URI, {
  transports: ['websocket']
})

export default socket
