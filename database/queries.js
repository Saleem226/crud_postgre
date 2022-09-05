

const getUserById = 'SELECT * FROM users WHERE id=$1';
const getAllUser = 'SELECT * FROM users'
const removeUser = 'DELETE FROM users WHERE id=$1'
const updateUser='UPDATE users SET name=$1 ,email=$2 WHERE id=$3'
const postUser='INSERT INTO users (name, email) VALUES ($1, $2)'

module.exports = {
    getUserById,
    getAllUser,removeUser,
    updateUser,postUser
}