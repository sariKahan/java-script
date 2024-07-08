const arrSongsChosen = JSON.parse(sessionStorage.getItem('arrSongsChosen'));
let indexSong = JSON.parse(sessionStorage.getItem('indexSong'));

let videosShow=["/נגינה/אורגים.mov","נגינה/אורגן אדיר.mov","נגינה/חצוצרה מסתובבת.mp4",
"נגינה/מערכת תופים.mov","נגינה/קצוות גיטרה.mov","נגינה/רמקול.mov",
"נגינה/רמקולים צורמים.mov","נגינה/רמקולים.mov","נגינה/תווים בריבוע.mov","נגינה/תווים זוהרים.mp4",
"נגינה/תווים כחול.mov","נגינה/תווים+עולם.mov","נגינה/תוים כתום.mov"];


const createAudio = () => {
    const audio = document.querySelector('#audio');
    audio.innerHTML = "";
    const aoudio = document.createElement('audio');
    const image = document.createElement('img');
    image.src = arrSongsChosen[indexSong].image;
    if (arrSongsChosen[indexSong].image == "image/shutterstock_33144181.jpg") {
        const video = document.createElement('video');
        const random = Math.round(Math.random() * 13);
        video.src = videosShow[random];
        video.width = `900`;
        video.controls = "controls";
        video.autoplay = "autoplay";
        video.repeat ="repeat";
        audio.append(video);
        aoudio.controls = "controls";
        const sourse = document.createElement('source');
        sourse.src = arrSongsChosen[indexSong].location;
        sourse.type = "audio/mp3";
        aoudio.append(sourse);
        audio.append(aoudio);
        aoudio.play();
        songName.innerHTML = arrSongsChosen[indexSong].songName;
    }
    else {
        image.width = `900`;
        aoudio.controls = "controls";
        const sourse = document.createElement('source');
        sourse.src = arrSongsChosen[indexSong].location;
        sourse.type = "audio/mp3";
        aoudio.append(sourse);
        audio.append(image);
        audio.append(aoudio);
        aoudio.play();
        songName.innerHTML = arrSongsChosen[indexSong].songName;
    }
}
///////////////////////////////////////////////////////////////////////










createAudio();
//פונקציה לצמצום מערך
const arrPush = (arr) => {
    const newArr = [];
    for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

//הכנסת השיר לlocalstorage
//בשביל השירים האחרונים
const arrPrivateItems = JSON.parse(localStorage.getItem('arrItems'));
const password = JSON.parse(sessionStorage.getItem('password'));
arrPrivateItems.forEach(user => {
    if (user.password === password) {
        user.arrLastSongs.push(arrSongsChosen[indexSong].location);
        if (user.arrLastSongs.length > 3) {
            user.arrLastSongs= arrPush(user.arrLastSongs);
        }
        localStorage.setItem('arrItems', JSON.stringify(arrPrivateItems));
        return;
    }
});
after.onclick = () => {
    if (indexSong + 1 < arrSongsChosen.length) {
        indexSong++;
        createAudio();
    }

}
before.onclick = () => {
    if (indexSong - 1 >= 0) {
        indexSong--;
        createAudio();
    }
}
back.onclick = () =>{
    location.href ="song.html";
}





