// const factory = require('../factories');
// const db = require('../factories');
const request = require('supertest');
const app = require('../../app');
const truncate = require('../utils/truncate');
const db = require('../../app/models/index');
const faker = require('faker');
const User = require('../../app/models/User')

describe('Authentication', () => {
    beforeEach(async () => {
        await truncate();
    })

    it('should authenticate with valid credentials', async () => {
        const user = await db.users.create({
            name: faker.name.findName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        });

        const response = await request(app)
            .post("/sessions")
            .send({
                email: user.email,
                password: user.password,
            });

        expect(response.status).toBe(200);
    });

    it('Should not authenticate with invalid credentials', async () => {
        const user = await db.users.create({
            name: faker.name.findName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        });

        const response = await request(app)
            .post("/sessions")
            .send({
                email: user.email,
                password: "12346"
            });
        expect(response.status).toBe(401);
    });

    it('Should receive JWT token when authenticated ', async () => {
        const user = await db.users.create({
            name: faker.name.findName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        });
        const response = await request(app)
            .post("/sessions")
            .send({
                email: user.email,
                password: user.password,
            });
        expect(response.body).toHaveProperty("token");
    });
});

