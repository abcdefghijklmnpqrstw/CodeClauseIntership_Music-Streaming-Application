var audioPlayer = document.getElementById('audioPlayer');

        function playSong(song) {
            audioPlayer.src = song;
            play();
        }

        function play() {
            audioPlayer.play();
        }

        function pause() {
            audioPlayer.pause();
        }

        function stop() {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
        }