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

const updateUsers = (body, id) =>  {
    const SQLquery = ` UPDATE users SET nama = '${body.nama}',
                       umur = ${body.umur}, address = '${body.address}', noTelpone = ${body.noTelpone}
                       WHERE id = ${id}
                     `
    return SQLquery
}

module.exports = {
    getAllUsers,
    createUsers,
    updateUsers,
}
