const db = require('../../app/models');
const bcrypt = require('bcryptjs')
const truncate = require('../utils/truncate');

describe('User', () => {
    beforeEach(async () => {
        await truncate();
    });

    it('Should encrypt user password', async () => {
        const user = await db.users.create({
            name: 'Joao',
            email: 'joao@mail.com',
            password: '123'
        });

        const hash = await bcrypt.hash('123', 8);

        expect(await bcrypt.compare(user.password,user.password_hash)).toBe(true);
    })
})