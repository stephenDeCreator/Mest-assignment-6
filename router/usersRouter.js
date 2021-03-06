const router = require('express').Router();
const userController = require('../controllers/userController');
const { verifyToken } = require('../controllers/authController');

router.get('/', userController.getAllUsers);

router.get('/:id', verifyToken, userController.getSingleUser);

router.patch('/:id', verifyToken, userController.updateUser);

router.delete('/:id', userController.deleteUser);

router.delete('/', userController.deleteAllUsers);

module.exports = router;
