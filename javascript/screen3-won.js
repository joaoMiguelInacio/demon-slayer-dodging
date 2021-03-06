function gameWon(){
    gameBoardElement.classList.add("hidden");
    gameWonElement.classList.remove("hidden");
    
    reset();

    pauseMusic();
    wowMusic.play();

    document.body.style.backgroundColor = "black";
    footerElement.style.backgroundColor = "whitesmoke";

    wonGameText.style.color = "white";
    wonGameText.style.fontSize = "24px";
    wonGameText.style.padding = "2%";
    
    //the following is to stay commented until I find a way to access the play video button
    /*music = new Audio('./assets/music/GameOver.mp3');
    playMusic();
    wonGameText.style.color = "black";
    wonGameText.style.fontSize = "24px";
    document.body.style.backgroundColor = "whitesmoke";
    */
    
    video.style = "position: absolute; top: 45%; left: 50%; transform: translate(-50%, -50%);";
    
    slayAgaintButton.style = "position: absolute; top: 85%;";
    woundsButton.style = "position: absolute; top: 80%;";
    
    slayAgaintButton.addEventListener('click', startGame );
    woundsButton.addEventListener('click', backToStart );
}