const sequelize = require('../db/connect')

class Student{

    async find(name){
       if(name == null){
         const findStudent = await sequelize.query('select * from students')
         return findStudent       
    }
    const findStudent = await sequelize.query(`select * from students where name='${name}' `)
    return findStudent  
    }

    async findOne(studentId){
      const findStudentOne = await sequelize.query(`select * from students where id= '${studentId}'`)
      return findStudentOne
    }

    async createStudent(body){
       const info = body
       const newStudent = await sequelize.query(`insert into students(name,birth_day,adress) 
       values('${info.name}','${info.birth}','${info.adress}')`)
       return newStudent
    }
 
    async updateStudent(userId,changes){
        const updateStudnet = await sequelize.query(`update students set name='${changes.name}', birth_day='${changes.birth}, adress=${changes.adress} where id='${userId}'`)
         return updateStudnet
    }

    async deleteStudent(userId){
       const deleteStudent = await sequelize.query(`delete from students where id='${userId}'`)
       return  true
    }

}

const studentService = new Student()

module.exports = {studentService}