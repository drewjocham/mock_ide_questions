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


.PHONY: proto
proto: ## Generate protobuf code
# Compile proto files inside the project.
	protoc api.proto --proto_path=${PROJ_PATH}/proto --go_out=. --go-grpc_out=.

	protoc --proto_path=${PROJ_PATH}/proto \
		--plugin=protoc-gen-grpc=${PROJ_PATH}/form/node_modules/.bin/grpc_tools_node_protoc_plugin \
        --plugin=protoc-gen-ts=${PROJ_PATH}/form//node_modules/.bin/protoc-gen-ts \
        --js_out=import_style=commonjs:${PROJ_PATH}/form/proto \
        --grpc_out=grpc_js:${PROJ_PATH}/form/proto \
        --ts_out=grpc_js:${PROJ_PATH}/form/proto \
        -I ${PROJ_PATH}/proto \
         ${PROJ_PATH}/proto/*.proto

