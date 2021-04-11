const User = require('../model/User');

const getAllUsers = async (req, res) => {
	const users = await User.find();
	res.status(200).json({ users });
};

const getSingleUser = async (req, res) => {
	console.log(req.user);
	if (!req.user) {
		return res
			.status(401)
			.json({ message: 'You are not authorized to perform this operation' });
	}
	const id = req.params.id;
	const user = await User.findById(id);
	res.status(200).json({ user });
};

const updateUser = async (req, res) => {
	console.log();
	const { id } = req.params;
	const user = await User.findByIdAndUpdate(id, req.body, { new: true });
	res.status(200).json({ user });
};

const deleteUser = async (req, res) => {
	const { id } = req.params;
	await User.findByIdAndDelete(id);
	res.status(200).json({ message: 'User deleted successfully!' });
};

const deleteAllUsers = async (req, res) => {
	await User.deleteMany();
	res.status(200).json({ message: 'All users deleted successfully' });
};

module.exports = {
	getAllUsers,
	getSingleUser,
	updateUser,
	deleteUser,
	deleteAllUsers
};
