const express = require('express');
const { createContact, getContact, updateContact, deleteContact, getContacts } = require('../controllers/contactController');
const validateToken = require('../middleware/validateTokenHandler');

//Router
const router = express.Router();
//Middleware
router.use(validateToken)

router.route('/').get(getContacts).post(createContact)

router.route('/:id').get(getContact).put(updateContact).delete(deleteContact)

// router.route('/').post(createContact)
// router.route('/:id').put(updateContact)
// router.route('/').delete(deleteContact)


module.exports = router;