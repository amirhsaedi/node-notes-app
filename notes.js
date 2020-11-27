const fs = require('fs');
const chalk = require('chalk');

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push({ title, body });
        saveNotes(notes);
        console.log(chalk.green('New note added!'));
    } else {
        console.log(chalk.yellow('Note title teken!'));
    }
};

const removeNotes = title => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title);
    saveNotes(notesToKeep);

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'));
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
};

const listNotes = () => {
    const notes = loadNotes();
    const list = notes.map(note => note.title);
    console.log(`Your notes: ${chalk.green(list.join(' - '))}`);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
};

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

module.exports = { addNotes, removeNotes, listNotes };