const Student = require('./students');
const IdentityCard = require('./identitycard');
const department = require('./department');
const courses = require('./courses');
const studentCourses = require('./studentCourses');

//one to one
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

//one to many
department.hasMany(Student);
Student.belongsTo(department);

//many to many association
Student.belongsToMany(courses, {through: studentCourses});
courses.belongsToMany(Student, {through: studentCourses});

module.exports = {
    Student,
    IdentityCard,
    courses,
    studentCourses
}