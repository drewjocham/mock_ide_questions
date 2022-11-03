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
.instal-backoffice-view:
	cd backoffice-view && yarn

.PHONY: start backoffice-view app
.backoffice-view:
	cd backoffice-view && yarn serve

.PHONY: mod-vendor
mod-vendor: ## Download, verify and vendor dependencies
	go mod download
	go mod verify
	go mod vendor


.PHONY: proto
proto: ## Generate protobuf code
# Compile proto files inside the project.
	protoc api.proto --proto_path=${PROJ_PATH}/proto --go_out=. --go-grpc_out=.

	protoc --proto_path=${PROJ_PATH}/proto \
    --plugin="protoc-gen-ts"=${PROJ_PATH}/form/node_modules/.bin/protoc-gen-ts \
    --ts_out=${PROJ_PATH}/form/proto \
     ${PROJ_PATH}/proto/api.proto
