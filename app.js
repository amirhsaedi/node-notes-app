const yargs = require('yargs');

// CREATE ADD COMMAND
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler() {
        console.log('Adding a new note!');
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

console.log(yargs.argv);
