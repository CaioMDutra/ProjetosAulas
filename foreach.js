const notes = [10, 6.5, 8, 7.5]

let numNotes = 0;

notes.forEach( note =>{
    numNotes += note
})

let media = numNotes/notes.length;

console.log(media)