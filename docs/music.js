import * as Tone from "tone/build/Tone.js";


//attach a click listener to a play button
document.querySelector('button').addEventListener('click', async () => {
    await Tone.start()
    console.log('audio is ready')
    //create a synth and connect it to the master output (your speakers)
    const synth = new Tone.Synth().toMaster();

    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("C4", "8n");



})