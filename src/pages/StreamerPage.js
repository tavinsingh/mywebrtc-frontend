import React from 'react';


const StreamerPage = () => (
    <>
    <h1>Watch Stream!</h1>
    <video playsInline autoPlay muted></video>
    <script src="/socket.io/socket.io.js"></script>
    <script src="../streamer.js"></script>
    </>

);

export default StreamerPage