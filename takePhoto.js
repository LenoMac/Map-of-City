function startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            var video = document.getElementById('video');
            video.srcObject = stream;
            video.play();
        })
        .catch(function (err) {
            console.log("Ошибка: " + err);
        });
}

function takeSnapshot() {
    var video = document.getElementById('video');
    var canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    var img = canvas.toDataURL();
    var snapshot = document.getElementById('snapshot');
    // snapshot.src = img;
    var panel = document.getElementById('panel')
    var out = `<img class="w-[100px]" id="snapshot" src=${img}>`
    panel.insertAdjacentHTML("beforeend", out)

}