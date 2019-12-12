const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel.js');

describe('hobbits model', () => {
	beforeEach(async () => {
		await db('hobbits').truncate();
	});

	describe('insert function', () => {
		test('inserts hobbits into db', async () => {
			let hobbitsNumber;
			hobbitsNumber = await db('hobbits');
			expect(hobbitsNumber).toHaveLength(0);
			await Hobbits.insert({ name: "Gaffer" });
			await Hobbits.insert({ name: "Merry" });
			hobbitsNumber = await db('hobbits');
			expect(hobbitsNumber).toHaveLength(2)
		})

		test('inserts the hobbit into db', async () => {
			let hobbit = await Hobbits.insert({ name: "Samwise" }
			);
			expect(hobbit.name).toBe('Samwise')
		})
	})
})