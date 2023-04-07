function startVideoFromCamera(){

    const specs = {video:true}

    navigator.mediaDevices.getUserMedia({video:true}).then(stream=>{

        const videoElement = document.querySelector("#video")
        videoElement.srcObject = stream

    }).catch(error=>{console.log(error)})


}

window.addEventListener("DOMContentLoaded", startVideoFromCamera)