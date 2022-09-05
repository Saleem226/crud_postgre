const pool = require('../database/pgClient')
const queries = require('../database/queries')

class UserController {

    static async getAllUser(req, res) {
        try {
            pool.query(
                queries.getAllUser, (err, results) => {
                    if (!err) {
                        res.status(200).json(results.rows)
                    } else {
                        res.send(err.message)
                    }
                }
            )
        } catch (error) {
            console.log(error)
        }
    }
    static async getOneUser(req, res) {
        try {
            const id = parseInt(req.params.id);
            pool.query(
                queries.getUserById, [id], (err, results) => {
                    if (!err && results.rows.length) {
                        res.status(200).json(results.rows)
                    } else if (err) {
                        res.send(err.message)
                    } else {
                        res.send("User id is not valid")
                    }
                }
            )
        } catch (error) {
            console.log(error)
        }
    }
  
    static async postOneUSer(req, res) {
        const { name, email } = req.body
        try {
            pool.query(queries.postUser, [name, email],
                (err, results) => {
                    if (!err) {
                        res.send(`User added with ID: `)
                    } else {
                        res.send(err.message)
                    }
                }
            )
        } catch (error) {
            console.log(error)
        }
    }
    static async updateOneUser(req, res) {
        const id = parseInt(req.params.id)
        try {
            const { name, email } = req.body

            pool.query(queries.getUserById, [id], (err, results) => {
                const noUserFound = !results.rows.length;
                if (noUserFound) { res.send("User Not Found") }
                else if(err){res.send(err.message)}
                else{

                pool.query(queries.updateUser, [name, email, id], (err, result) => {
                    err ? res.send(err.message) : res.send("Successfullyupdated")
                })}
            })
        } catch (error) {
            console.log(error)
        }
    }
    static async deleteOneUser(req, res) {
        try {
            const id = parseInt(req.params.id)
            pool.query(queries.getUserById, [id], (err, results) => {
                const nouserfound = !results.rows.length
                if (nouserfound) {
                    res.send("NO User Found")
                } else if (err) console.log(err.message);
                else {
                    pool.query(queries.removeUser, [id], (err, results) => {
                        // if(err) {res.send(err.message);console.log("err")}

                        res.send("User Successfully deleted")
                        console.log("del")
                    })
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = UserController