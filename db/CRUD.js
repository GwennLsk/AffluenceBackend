const connection = require("./MySQLConnect");

function Create(table, body) {
    return new Promise((resolve, reject) => {
        let keys = "";
        let values = "";
        let i = 0;
        Object.entries(body).forEach(fields => {
            if (i != Object.entries(body).length - 1) {
                keys += '`' + fields[0] + '`, ';
                values += '\'' + fields[1] + '\', ';
            } else {
                keys += '`' + fields[0] + '`';
                values += '\'' + fields[1] + '\'';
            }
            i++
        });

        let sql ='INSERT INTO '+table+' ('+keys+') VALUES ('+values+');'
        connection.connection.query(sql, function (error, results, fields) {
            if (error) reject(error);
            else resolve(results)
        });
    })
}

// READ
function ReadAll(table) {
    return new Promise((resolve, reject) => {
        connection.connection.query('SELECT * FROM '+table+';', function (error, results, fields) {
            if (error) reject(error);
            else resolve(results)
        });
    })

}

function ReadOne(table, id) {
    return new Promise((resolve, reject) => {
        connection.connection.query('SELECT * FROM '+table+' WHERE id'+table+' = '+id+';', (error, results, fields) => {
            if (error) reject(error);
            else resolve(results)
        })
    })
}

function Update(table, body, id) {
    let updates = '';
    let i = 0;
    Object.entries(body).forEach(fields => {
        if (i != Object.entries(body).length - 1) {
            updates += '`' + fields[0] + '`=\'' + fields[1] + '\', ';
        } else {
            updates += '`' + fields[0] + '`=\'' + fields[1]+'\'';
        }
        i++
    });
    let sql = 'UPDATE '+table+' SET '+updates+' WHERE id'+table+'='+id+';'
    return new Promise((resolve, reject) => {
        console.log(sql);
        connection.connection.query(sql, (error, results, fields) => {
            if (error) reject(error);
            else resolve(results)
        })
    })
}

function Delete(table, id) {
    return new Promise((resolve, reject) => {
        connection.connection.query('DELETE FROM '+table+' WHERE id'+table+' = '+id+';', (error, results, fields) => {
            if (error) reject(error);
            else resolve(results)
        })
    })
}

module.exports = {
    Create,
    readAll: ReadAll,
    readOne: ReadOne,
    Update: Update,
    Delete
};
