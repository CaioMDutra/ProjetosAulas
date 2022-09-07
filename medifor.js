const notes = [10, 6.5, 8, 7.5]

let numNotes = 0;

for (i = 0; i < notes.length; i++){
    numNotes += notes[i];
}

let media = numNotes/notes.length;

console.log(media)