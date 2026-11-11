
let notesTitles = ['ba', 'Aufgabe'];
let notes = ['banana', 'rasen mähen'];

let trashNotesTitles = [];
let trashNotes = [];

function renderNotes() {
    let contentRef = document.getElementById('content');

    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content');

    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}

function getNoteTemplate(indexNote) {
    return `<p>+ title: ${notesTitles[indexNote]} -> 
    ${notes[indexNote]}<button onclick="deleteNote(${indexNote})">x</button></p>`;
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<p>+ title: ${trashNotesTitles[indexTrashNote]} -> 
    ${trashNotes[indexTrashNote]}<button onclick="deleteTrashNote(${indexTrashNote})">x</button></p>`;
}
function addNote() {
    let NoteInputRef = document.querySelector('#note_input');
    let noteInput = NoteInputRef.value;

    notes.push(noteInput);
    renderNotes();

    NoteInputRef.value = "";
}

function deleteNote(indexNote) {
    let trashNote = notes.splice(indexNote, 1)[0];
    trashNotes.push(trashNote);
    let trashNoteTitle = notesTitles.splice(indexNote, 1)[0];
    trashNotesTitles.push(trashNoteTitle);
    renderNotes();
    renderTrashNotes();
}

function deleteTrashNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);
    trashNotesTitles.splice(indexTrashNote, 1);
    renderTrashNotes();
}   