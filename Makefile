install:
	npm install
	npm link

publish:
	npm publish --dry-run

lint:
	npx eslint .