import Echo from "laravel-echo"
import Pusher from "pusher-js"
import axios from "axios"
console.log(Pusher)

axios
  .post("http://127.0.0.1:8000/api/sanctum/token", {
    email: "johndoe@example.org",
    password: "secret",
  })
  .then(({ data }) => {
    let token = data
    //
    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/api/user",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(({ data }) => {
      console.log(data)

      let echo = new Echo({
        broadcaster: "pusher",
        key: "socket_key",
        wsHost: "127.0.0.1",
        wsPort: 6001,
        forceTLS: false,
        cluster: "mt1",
        disableStats: true,
        authorizer: (channel, options) => {
          console.log(options)
          return {
            authorize: (socketId, callback) => {
              axios({
                method: "POST",
                url: "http://127.0.0.1:8000/api/broadcasting/auth",
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                data: {
                  socket_id: socketId,
                  channel_name: channel.name,
                },
              })
                .then((response) => {
                  callback(false, response.data)
                })
                .catch((error) => {
                  callback(true, error)
                })
            },
          }
        },
      })

      echo.private(`App.User.${data.id}`).listen(".new-message-event", (message) => {
        console.log(message)
      })
    })
  })