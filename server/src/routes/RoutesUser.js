const express = require('express');
const router = express.Router();

const ControllerUser = require('../controllers/ControllerUsers');
const ControllerJWT = require('../jwt/ControllerJWT');

router.post('/api/register', ControllerUser.Register);
router.post('/api/login', ControllerUser.Login);
router.get('/api/auth', ControllerJWT.verifyToken, ControllerUser.GetUser);
router.post('/api/logout', ControllerJWT.verifyToken, ControllerUser.Logout);
router.get('/api/getallorder', ControllerJWT.verifyToken, ControllerUser.GetOrder);
router.post('/api/forgotpassword', ControllerUser.ForgotPassword);
router.post('/api/resetpassword', ControllerUser.ResetPassword);
router.get('/api/refresh-token', ControllerUser.RefreshToken);

router.get('/api/getalluser', ControllerJWT.verifyTokenAdmin, ControllerUser.getAllUser);
router.delete('/api/deleteuser', ControllerJWT.verifyTokenAdmin, ControllerUser.DeleteUser);
router.post('/api/edituser', ControllerJWT.verifyTokenAdmin, ControllerUser.updateUser);
router.get('/api/admin', ControllerJWT.verifyTokenAdmin, (req, res) => {
    return res.status(200).json({ message: true });
});

module.exports = router;
