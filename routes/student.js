var express = require('express');
var router = express.Router();
var studentController = require("../controllers/studentRegistrationController");

router.post('/student', function (req, res, next) {
	console.log('req body: ' + JSON.stringify(req.body));
	return studentController.student_register(req, res, next);
});

router.get('/student', function(req, res, next) {
	return studentController.get_student_details(req, res, next);
});

module.exports = router;