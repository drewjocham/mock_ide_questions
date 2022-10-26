.PHONY: start view app
.view:
	cd view && yarn serve

.PHONY: Install view dependencies
.install:
	cd view && yarn
