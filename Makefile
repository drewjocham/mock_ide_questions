PROJ_PATH=${CURDIR}
PROTO_DEST=./src/proto


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
	# protoc api.proto --proto_path=${PROJ_PATH}/proto --go_out=. --go-grpc_out=.

	# JavaScript code generation
	cd form && yarn run grpc_tools_node_protoc \
        --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
        --ts_out=grpc_js:${PROTO_DEST} \
        --js_out=import_style=commonjs,binary:${PROTO_DEST} \
        --grpc_out=grpc_js:${PROTO_DEST} \
        -I ${PROJ_PATH}/proto \
        ${PROJ_PATH}/proto/*.proto
