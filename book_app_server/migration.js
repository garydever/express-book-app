const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

db.run('CREATE TABLE IF NOT EXISTS ReadingList '+
'(`id` INTEGER NOT NULL, '+
'`title` TEXT NOT NULL, '+
'`author` TEXT NOT NULL, '+
'`publisher` TEXT NOT NULL, '+
'`img` TEXT NOT NULL, '+
'`is_read` INTEGER DEFAULT 0, '+
'PRIMARY KEY(`id`))');