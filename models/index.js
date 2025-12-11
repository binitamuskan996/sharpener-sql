const Student = require('./students');
const IdentityCard = require('./identitycard');
const department = require('./department');
const courses = require('./courses');
const studentCourses = require('./studentCourses');
const User = require('./users');
const Bus = require('./buses');
const Booking = require('./bookings');

//one to one
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

//one to many
department.hasMany(Student);
Student.belongsTo(department);

//many to many association
Student.belongsToMany(courses, {through: studentCourses});
courses.belongsToMany(Student, {through: studentCourses});


User.hasMany(Booking, { foreignKey: 'userId' });
Booking.belongsTo(User, { foreignKey: 'userId' });

Bus.hasMany(Booking, { foreignKey: 'busId' });
Booking.belongsTo(Bus, { foreignKey: 'busId' });


module.exports = {
    Student,
    IdentityCard,
    courses,
    studentCourses,
    User,
    Bus,
    Booking
}