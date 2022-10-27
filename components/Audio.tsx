'use client'

 const Audio = () => {

    function playAudio(){
        const audioEl = document.getElementById('test') as HTMLAudioElement
        if(audioEl.paused){
            audioEl.play()
        }else{
            audioEl.pause()
        }
    }

    return (
        <div style={{position:"absolute", bottom:"1rem", left:'1rem'}}>
            <button onClick={()=> playAudio()}>Toggle Calming Sounds</button>
            <audio id="test" loop typeof='audio/wav' src='./heavy-rain.wav'></audio>
        </div>
    )
}

export default Audio