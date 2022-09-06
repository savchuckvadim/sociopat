import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');
// let pusher = new Pusher('sp_socket', {});

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'socket_key',
    cluster: 'mt1',
    // forceTLS: true,
    // wsHost: '127.0.0.1',
    // wsPort: 6001,
    // enabledTransports: ['ws', 'wss']

    wsHost: window.location.hostname,
    wssHost: window.location.hostname,
    wsPort: 6001,
    wssPort: 6001,
    disableStats: true,
    forceTLS: false,
    enabledTransports: ['ws', 'wss'],
    authorizer: (channel, options) => {
        console.log(options);
        return {
          authorize: (socketId, callback) => {
            axios({
              method: "POST",
              url: "http://localhost:8000/api/broadcasting/auth",
              data: {
                socket_id: socketId,
                channel_name: channel.name,
              },
            })
              .then((response) => {
                callback(false, response.data);
              })
              .catch((error) => {
                callback(true, error);
              });
          }
        };
    }
});


//prefences from laravel-websocket 
// broadcaster: 'pusher',
// key: 'your-pusher-key',
// wsHost: window.location.hostname,
// wsPort: 6001,
// forceTLS: false,
// disableStats: true,