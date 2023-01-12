"use strict";

const { ServiceBroker } = require("moleculer");
const { ValidationError } = require("moleculer").Errors;
const TestService = require("../../../services/greeter.service");

describe("Test 'greeter' service", () => {
	let broker = new ServiceBroker({ logger: false });
	broker.createService(TestService);

	beforeAll(() => broker.start());
	afterAll(() => broker.stop());

	describe("Test 'greeter.welcome' action", () => {

		it("should return with 'Welcome'", async () => {
			const res = await broker.call("greeter.welcome", { name: "Adam" });
			expect(res).toBe("Welcome, Adam");
		});

		it("should reject an ValidationError", async () => {
			expect.assertions(1);
			try {
				await broker.call("greeter.welcome");
			} catch(err) {
				expect(err).toBeInstanceOf(ValidationError);
			}
		});

	});

});

