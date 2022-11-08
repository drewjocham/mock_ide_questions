PROJ_PATH=${CURDIR}
UID?=${shell id -u}
GID?=${shell id -g}

.PHONY: Install form dependencies
.install-form:
	cd form && yarn

.PHONY: start form app
.form:
	cd form && yarn serve

.PHONY: Install backoffice-view dependencies
.install-view:
	cd backoffice-view && yarn

.PHONY: start backoffice-view app
.backoffice-view:
	cd backoffice-view && yarn serve

.PHONY: mod-vendor
mod-vendor: ## Download, verify and vendor dependencies
	go mod download
	go mod verify
	go mod vendor
