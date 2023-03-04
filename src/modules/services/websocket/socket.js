import Echo from 'laravel-echo'
import { api } from '../api-laravel'

//TODO TypeScript
let token
export let echo
export const socket = {

  async connection() {

    window.Pusher = require('pusher-js')
    await api.get("/sanctum/csrf-cookie")
    await api.get('api/user')

    let echo = new Echo({

      broadcaster: 'pusher',
      key: 'socket_key',
      cluster: 'mt1',
      forceTLS: false,
      disableStats: true,
      wsHost: '127.0.0.1',
      wsPort: 6001,
      authorizer: (channel, options) => {
        console.log('websocket connection is success')
        console.log(options)

        return {
          authorize: (socketId, callback) => {
            api.post('api/broadcasting/auth', {
              socket_id: socketId,
              channel_name: channel.name,
            })

              .then((response) => {

                callback(false, response.data)
              })
              .catch((error) => {
                callback(true, error)
              })
          }
        }
      }

    })

    echo.private(`send-post`)
      .listen('SendPost', (e) => {
        console.log(e)
        alert(e.post.body)
      })


    // })


  },

}