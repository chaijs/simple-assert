
TESTS = test/*.js
REPORTER = spec

#
# Tests
# 

test: test-node test-browser 

test-node: 
	@printf "\n  ==> [Node.js]"
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--require ./test/bootstrap \
		--reporter $(REPORTER) \
		$(TESTS)

test-browser: build
	@printf "\n  ==> [Phantom.Js]"
	@./node_modules/.bin/mocha-phantomjs \
		--R ${REPORTER} \
		./test/browser/index.html

.PHONY: test test-node test-browser 

#
# Components
# 

build: components index.js
	@./node_modules/.bin/component-build --dev

components: component.json
	@./node_modules/.bin/component-install --dev

#
# Clean up
# 

clean: clean-components 

clean-components:
	@rm -rf build
	@rm -rf components

.PHONY: clean clean-components 
