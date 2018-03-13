/**
 * Created by Administrator on 2018/3/9.
 */
// 连接MySQL
var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'user'
});

function query(sql, callback) {
    pool.getConnection(function (err, connection) {
        // use the connection
        connection.query(sql, function (err, rows) {
            callback(err, rows);
            connection.release();   // 释放链接
        })
    })
}

exports.query = query;