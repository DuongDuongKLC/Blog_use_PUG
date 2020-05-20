const pool = require('./pool');
const bcrypt = require('bcrypt');

function Databese_blog(){};

Databese_blog.prototype = {
    // get all comment
    get: function(callback)
    {
        let sql = "SELECT * FROM comment_blog ORDER BY id_comment DESC";
        pool.query(sql, function(err, result){
            if(err) throw err
            callback(result);
        });
    },
    // insert comment
    insert: function(comment , callback)
    {
        let sql = " INSERT INTO comment_blog(name_fr, content_blog) VALUES (? , ?)";
        pool.query(sql ,comment , function(err, lastID){
            if(err) throw err
            callback(lastID);
        })
    }
}
module.exports = Databese_blog;