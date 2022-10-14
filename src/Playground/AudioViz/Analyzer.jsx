

export default class Analyzer {
    constructor(fftSize) {
        this.audioCtx = new AudioContext();
        this.analyser = audioCtx.createAnalyser();
        this.fftSize = fftSize;
        this.audioSrc;
        this.bufferLength;
        this.dataArray;
    }

    initSource() {

        if (this.analyser) {
            this.analyser.fftSize = this.fftSize;
        }

        if (this.audioCtx) {
            this.audioSrc = this.audioCtx.createMediaStreamSource()
        }
    }

}