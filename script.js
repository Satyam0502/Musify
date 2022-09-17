console.log("Welcome to Musify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('./song/s1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Mann Bhareyya", filePath: "./song/s1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Teri Hogaiyan", filePath: "./song/s2.mp3", coverPath: "cover/2.jpg"},
    {songName: "Zindgi", filePath: "./song/s3.mp3", coverPath: "cover/3.jpg"},
    {songName: "Dope Shope", filePath: "./song/s4.mp3", coverPath: "cover/4.jpg"},
    {songName: "Father-Saab", filePath: "song/s5.mp3", coverPath: "cover/5.jpg"},
    {songName: "Ganglaand", filePath: "./song/s6.mp3", coverPath: "cover/6.jpg"},
    {songName: "In the End", filePath: "./song/s7.mp3", coverPath: "cover/7.jpg"},
    {songName: "Mai hoo na", filePath: "./song/s8.mp3", coverPath: "cover/8.jpg"},
    {songName: "Playdate", filePath: "./song/s9.mp3", coverPath: "cover/9.jpg"},
    {songName: "Rab ne bana di jodi", filePath: "./song/s10.mp3", coverPath: "cover/10.jpg"},
];

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        .then(() => {
            // Audio is playing.
          })
          .catch(error => {
            console.log(error);
          });
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/s${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play()
        .then(() => {
            // Audio is playing.
          })
          .catch(error => {
            console.log(error);
          });
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/s${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play()
    .then(() => {
        // Audio is playing.
      })
      .catch(error => {
        console.log(error);
      });
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/s${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play()
    .then(() => {
        // Audio is playing.
      })
      .catch(error => {
        console.log(error);
      });
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})