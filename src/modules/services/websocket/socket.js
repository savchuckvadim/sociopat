import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'sp_socket',
    cluster: 'mt1',
    forceTLS: true
});