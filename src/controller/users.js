const TableUser = require('../models/users')



// READ
<<<<<<< HEAD

=======
const readUsers = async (req, res) => {  
  const getDataUser = await TableUser.findAll()
  const parse = JSON.stringify(getDataUser)
  
  res.status(200).json({
    statusCode: 200,
    message: 'mengambil data users',
    data: parse
>>>>>>> dev
  })
}

const searchUser = (req, res) => {
  res.json({
      message: 'ok'
  })
}


// CREATE 
<<<<<<< HEAD
=======
const createUsers = async (req, res) => {
  const nama = req.body.nama;
  const umur = req.body.umur;
  const address = req.body.address;
  const noTelpone = req.body.noTelpone;
  
  const CreateUser = await TableUser.create({
    nama: nama,
    umur: umur,
    address: address,
    noTelpone: noTelpone
  })
  
  console.log(CreateUser)
  res.status(201).json({
    statusCode: 201,
    message: 'berhasil membuat user',
  })
>>>>>>> dev
}



// UPDATE 
<<<<<<< HEAD

=======
const updateUsers = async (req, res)  => {
  const nama = req.body.nama;
  const umur = req.body.umur;
  const address = req.body.address;
  const noTelpone = req.body.noTelpone;
  
  const UpdateUser =  await TableUser.update({
    nama: nama,
    umur: umur,
    address: address,
    noTelpone: noTelpone
  }, {
    where: {
      id: req.params.id
    }
  })
  
  res.json({
    statusCode: 200,
    message: 'berhasil update users',
    data: UpdateUser
  })
}

// DELETE 
const deleteUsers = async (req, res) => {
  const deleteUser = TableUser.destroy({
    where: {
      id: req.params.id
    }
  })
  
  res.json({
    statusCode: 200,
    message: 'berhasil remove users'
  })
}

module.exports = {
  readUsers, // READ
  createUsers, // CREATE
  updateUsers, // UPDATE
  deleteUsers, // DELETE
>>>>>>> dev
}
