const getAllUsers = () => {
    const SQLquery = `SELECT * FROM users`
    return SQLquery
}

module.exports = {
    getAllUsers
}