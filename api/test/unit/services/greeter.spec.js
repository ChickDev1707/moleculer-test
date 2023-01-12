"use strict";

const { ServiceBroker } = require("moleculer");
const { ValidationError } = require("moleculer").Errors;

describe("Test 'api' service", () => {
	let broker = new ServiceBroker({ logger: false });

	beforeAll(() => broker.start());
	afterAll(() => broker.stop());

	describe("Test action", () => {

		it("should return with true", async () => {
			return true
		});

	});

});

