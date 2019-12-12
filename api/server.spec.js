require('dotenv').config()
const server = require('./server.js');
const request = require('supertest');

describe('GET /', () => {
	test('has process.env.DB_ENV as testing', () => {
		expect(process.env.DB_ENV).toBe('testing');
	})

	test("returns 200", () => {
		return request(server).get('/').expect(200).expect('Content-Type', /json/).expect('Content-Length', '12')
			.then(res => {
				expect(res.body.api).toBe('up')
			})
		// We had to use regex interpolation to get this value.
	})
});