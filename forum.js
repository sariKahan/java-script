const file = document.querySelector('#file');

let videosShow = ["/נגינה/אורגים.mov", "נגינה/אורגן אדיר.mov", "נגינה/חצוצרה מסתובבת.mp4",
     "נגינה/מערכת תופים.mov", "נגינה/קצוות גיטרה.mov", "נגינה/רמקול.mov",
    "נגינה/רמקולים צורמים.mov", "נגינה/רמקולים.mov", "נגינה/תווים בריבוע.mov", "נגינה/תווים זוהרים.mp4",
    "נגינה/תווים כחול.mov", "נגינה/תווים+עולם.mov", "נגינה/תוים כתום.mov"];
const form = document.querySelector('#form');
form.onsubmit = (event) => {
      sound.controls = true;
      videos.innerHTML ="";
   
   const video=document.createElement('video');
   const random = Math.round(Math.random() * 13);
   video.src = videosShow[random];
   video.width = `900`;
   video.controls = "controls"; 
   video.autoplay = "autoplay";
   videos.append(video);
      sound.play();
   event.preventDefault();
}
file.onchange = (event) => {
   let reader = new FileReader();
   reader.onload = (e) => {
      sound.src = e.target.result;
     }
     reader.readAsDataURL(event.target.files[0]);
   }
    sound.play();