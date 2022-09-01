import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'sp_socket',
    cluster: 'mt1',
    forceTLS: true
});

//prefences from laravel-websocket 
// broadcaster: 'pusher',
// key: 'your-pusher-key',
// wsHost: window.location.hostname,
// wsPort: 6001,
// forceTLS: false,
// disableStats: true,