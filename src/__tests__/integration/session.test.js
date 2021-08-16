const { modelUser } = require('../../app/models/User');


describe('Authentication', () => {
    it('Should receive JWT token when authenticated with valid credentials', async () => {
        const user = await modelUser.create({ name: 'Joao', email: 'joao@mail.com', password_hash: '123456' });
        console.log(user);

        expect(user.email).to.equal('joao@mail.com');
    });
});
