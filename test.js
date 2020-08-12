const test = require("ava")
const importYaml = require(".")

test("main", async t => {
	const expectedResult = {
		example: 12345
	}

	t.deepEqual(await importYaml("fixture.yaml"), expectedResult)
	t.deepEqual(importYaml.sync("fixture.yaml"), expectedResult)
})
