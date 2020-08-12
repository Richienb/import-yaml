"use strict"

const fs = require("fs")
const { safeLoad: parseYaml } = require("js-yaml")

const assertString = value => {
	if (typeof value !== "string") {
		throw new TypeError(`Expected a string, got ${typeof value}`)
	}
}

module.exports = async filename => {
	assertString(filename)

	return parseYaml(await fs.promises.readFile(filename, "utf8"))
}

module.exports.sync = filename => {
	assertString(filename)

	return parseYaml(fs.readFileSync(filename, "utf8"))
}
