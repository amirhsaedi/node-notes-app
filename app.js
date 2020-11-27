const { command, parse } = require('yargs');
const { addNote, removeNote, listNotes, readNote } = require('./notes');

// CREATE ADD COMMAND
command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        addNote(argv.title, argv.body);
    }
});

// CREATE REMOVE COMMAND
command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },  
    handler(argv) {
        removeNote(argv.title);
    }
});

// CREATE LIST COMMAND
command({
    command: 'list',
    describe: 'List the notes',
    handler() {
        listNotes();
    }
});

// CREATE READ COMMAND
command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        readNote(argv.title);
    }
});

parse();