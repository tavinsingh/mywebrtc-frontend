import React from 'react';


const ViewerPage = () => (
    <>
    <h1>Viewing Stream</h1>
    <video playsInline autoPlay muted></video>
    <script src="/socket.io/socket.io.js"></script>
    <script src="../viewer.js"></script>
    </>

);

export default ViewerPage