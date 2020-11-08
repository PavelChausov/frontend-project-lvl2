install:
	npm install
	npm link

publish:
	npm publish --dry-run

lint:
	npx eslint . 

test:
	npm test --experimental-vm-modules

test-coverage:
	npm test -- --coverage --coverageProvider=v8