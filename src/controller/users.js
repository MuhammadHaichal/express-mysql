const TableUser = require('../models/users')

// READ
const readUsers = async (req, res) => {  
  try {
    const getDataUser = await TableUser.findAll()
    const parse = JSON.stringify(getDataUser)
    
    res.status(200).json({
      statusCode: 200,
      message: 'mengambil data users',
      data: parse
    })
  } catch (error) {
    res.status(400).json({
      statusCode: 400,
      message: 'bad request',
    })
  }
}

const searchUser = (req, res) => {
  res.json({
      message: 'ok'
  })
}


// CREATE 
const createUsers = async (req, res) => {
  
  try {
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
    
    res.status(201).json({
      statusCode: 201,
      message: 'berhasil membuat user',
    })
  } catch (error){
    res.status(400).json({
      statusCode:400,
      message: 'bad request',
    })
  }
}



// UPDATE 
const updateUsers = async (req, res)  => {
  try {
    
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
      statusCode: 201,
      message: 'berhasil update users',
      data: UpdateUser
    })
  } catch (error)  {
    res.status(400).json({
      statusCode: 400,
      message: 'bad request',
    })
  }
}

// DELETE 
const deleteUsers = async (req, res) => {
  try {
    const deleteUser = TableUser.destroy({
      where: {
        id: req.params.id
      }
    })
    
    res.json({
      statusCode: 200,
      message: 'berhasil remove users'
    })
    
  } catch ( error ) {
    res.status(403).json({
      statusCode: 403,
      message: 'forbidden'
    })
  }
}

module.exports = {
  readUsers, // READ
  createUsers, // CREATE
  updateUsers, // UPDATE
  deleteUsers, // DELETE
}
