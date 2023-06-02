const fs = require("fs");

/*
fs.mkdir(path[, options], callback)

path <string> | <Buffer> | <URL>
options <Object> | <integer> (??) 
recursive <boolean> Default: false
mode <string> | <integer> Not supported on Windows. Default: 0o777.
callback <Function>
err <Error>
path <string> | <undefined> Present only if a directory is 
created with recursive set to true.
Asynchronously creates a directory. 
*/

fs.mkdir( 
    "/Users/karlaherzo/Desktop/BACKEND/newDirectory",
    (err) => {
        if (err) {
            console.log("No se puede crear este directorio");
        }
    }
);


