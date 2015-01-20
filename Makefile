REPORTER=nyan

t test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \

tw test-w:
	@NODE_ENV=test nodemon ./node_modules/.bin/mocha \
		--reporter min \
		--watch

.PHONY: test test-w
