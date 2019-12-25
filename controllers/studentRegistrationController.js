let Student = require('../Models/studentModel');

exports.student_register = function(req, res){
	Student.find({rollno: req.body.rollno}, function(err, result){
		if (result.length) {
			return res.json({message: "Roll No. taken by other student."});
		}
		else{
			let student = new Student({
				name: req.body.name,
				rollno: req.body.rollno,
				class: req.body.class,
				school: req.body.school,
				dob: req.body.dob
			});

			return student.save(function(err){
				if (err) {
					return res.json({status:false, message: err.message})
				}
				return res.json({status: true, message: 'Student Registered Success'});
			})
		}
	});	
	
}


exports.get_student_details = function(req, res){
	Student.find({}, function(err, result){
		if (err) {
			console.log(err);
			return res.render('students', {result: []})
		}
		return res.render('students', {result:result})
	})
}

