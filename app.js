const yargs = require('yargs');
const { addNotes } = require('./notes');

// CREATE ADD COMMAND
yargs.command({
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
        addNotes(argv.title, argv.body);
    }
});

// CREATE REMOVE COMMAND
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler() {
        console.log('Removing a note!');
    }
});

// CREATE LIST COMMAND
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler() {
        console.log('Listing the notes!');
    }
});

// CREATE READ COMMAND
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler() {
        console.log('Reading a note!');
    }
});

yargs.parse();