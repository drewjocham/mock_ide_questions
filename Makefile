PROJ_PATH=${CURDIR}
UID?=${shell id -u}
GID?=${shell id -g}

.PHONY: start view app
.view:
	cd view && yarn serve

.PHONY: Install view dependencies
.install:
	cd view && yarn

.PHONY: mod-vendor
mod-vendor: ## Download, verify and vendor dependencies
	go mod download
	go mod verify
	go mod vendor

.PHONY: proto
proto: ## Generate protobuf code
# Compile proto files inside the project.
	protoc api.proto --proto_path=${PROJ_PATH}/proto --go_out=. --go-grpc_out=.


