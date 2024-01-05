const getAllUsers = () => {
    const SQLquery = `SELECT * FROM users`
    return SQLquery
}

const createUsers = (body) => {
    const SQLquery = ` INSERT INTO users (nama, umur, address, noTelpone)
                       VALUES ('${body.nama}', ${body.umur}, '${body.address}', ${body.noTelpone})
                     `
    return SQLquery
}

module.exports = {
    getAllUsers,
    createUsers,
}