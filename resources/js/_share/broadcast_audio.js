export default class broadcastAudio {
    run() {
        const machoModal = document.querySelector('.js-macho_modal');

        if (!machoModal) return;

        let audioList = [];
        if (Number(machoModal.dataset.isCreation)) {
            audioList = [
                'http://localhost:3000/audio/kakugo.mp3',
                'http://localhost:3000/audio/ikuzo.mp3',
                'http://localhost:3000/audio/kyoteki.mp3',
            ];
        } else {
            audioList = [
                'http://localhost:3000/audio/sugoi.mp3',
                'http://localhost:3000/audio/yokudekita.mp3',
                'http://localhost:3000/audio/gambatta.mp3',
            ];
        }

        const index = Math.floor(Math.random() * 3);

        const music = new Audio(audioList[index]);
        music.play();
    }
}
