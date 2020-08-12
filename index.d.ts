declare const importYaml: {
	/**
	Import a YAML file.
	@param filename The file to import.
	@example
	```
	const importYaml = require("import-yaml");

	(async () => {
		const data = await importYaml("file.yaml");

		console.log(data.value);
	})();
	```
	*/
	(filename: string): Promise<object>

	/**
	Synchronously import a YAML file.
	@param filename The file to import.
	@example
	```
	const importYaml = require("import-yaml");

	const data = importYaml.sync("file.yaml");

	console.log(data.value);
	```
	*/
	sync(filename: string): object
}

export = importYaml
