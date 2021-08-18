const db = require('../../app/models');


class SessionController {
    async store(req, res) {
        const { email, password } = req.body;
        const user = await db.users.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        if (!(await user.ckeckPassword(password))) {
            return res.status(401).json({ message: 'Incorrect Password' })
        }
        return res.json({ 
            user,
            token: user.generateToken()
         });
    }
    async seucu(res,req){

        return res.status(200).send();
    }
}


module.exports = new SessionController();