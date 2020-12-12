let
    audio = document.querySelectorAll('audio'),
    currentSong = -1,
    audioLoop = 0


playAudio = (index) => {
    switch (index) {
        case 1: {
            document.querySelector('p').innerHTML = 'Popov - Odgovor'

            document.querySelector('img:nth-child(1)').style.display = 'block'
            document.querySelector('img:nth-child(2)').style.display = 'none'
            document.querySelector('img:nth-child(3)').style.display = 'none'
            
            // audio[0].play()
            currentSong = 0
            audioLoop = 1

            break
        }

        case 2: {
            document.querySelector('p').innerHTML = 'DJEXON x LEPI MICA - MA GDE GOD BILA'

            document.querySelector('img:nth-child(2)').style.display = 'block'
            document.querySelector('img:nth-child(1)').style.display = 'none'
            document.querySelector('img:nth-child(3)').style.display = 'none'
            
            // audio[1].play()
            currentSong = 1
            audioLoop = 1

            break
        }

        case 3: {
            document.querySelector('p').innerHTML = 'Hai Phút Hon Remix'

            document.querySelector('img:nth-child(3)').style.display = 'block'
            document.querySelector('img:nth-child(2)').style.display = 'none'
            document.querySelector('img:nth-child(1)').style.display = 'none'
            
            // audio[2].play()
            currentSong = 2
            audioLoop = 1

            break
        }
    }
}

audioStatus = (status) => {
    if (status)
        audio[currentSong].pause()

    else
        audio[currentSong].play()
}

nextAudio = (direction) => {
    if (direction) {
        if (currentSong === 0)
            audio[currentSong].currentTime = 0, audio[currentSong].pause(), playAudio(2)

        else if (currentSong === 1)
            audio[currentSong].currentTime = 0, audio[currentSong].pause(), playAudio(3)
    }

    else {
        if (currentSong === 2)
            audio[currentSong].currentTime = 0, audio[currentSong].pause(), playAudio(2)

        else if (currentSong === 1)
            audio[currentSong].currentTime = 0, audio[currentSong].pause(), playAudio(1)
    }
}

playAudio(1)

setInterval(() => {
    document.querySelector('.time').innerHTML = `${audio[currentSong].currentTime.toFixed(0)}sec`
}, 1000)

// document.querySelector('button:nth-child(2)').addEventListener("click", function() {
//     playAudio(1)
// });

document.body.addEventListener("click", function(event) {
    console.log('clicked')
  });