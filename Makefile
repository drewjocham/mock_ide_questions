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

# go get github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway is needed for the gateway to work
# go get github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2
.PHONY: proto
proto: ## Generate protobuf code
# Compile proto files inside the project.
	protoc api.proto --proto_path=${PROJ_PATH}/proto --go_out=. --go-grpc_out=. \
		   --grpc-gateway_out . \
		   --grpc-gateway_opt generate_unbound_methods=true \
		   --openapiv2_out . \
           --openapiv2_opt logtostderr=true \
           --openapiv2_opt generate_unbound_methods=true \

	# JavaScript code generation
	# https://medium.com/blokur/how-to-implement-a-grpc-client-and-server-in-typescript-fa3ac807855e
	cd form && yarn run grpc_tools_node_protoc \
        --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
        --ts_out=grpc_js:${PROTO_DEST} \
        --js_out=import_style=commonjs,binary:${PROTO_DEST} \
        --grpc_out=grpc_js:${PROTO_DEST} \
        -I ${PROJ_PATH}/proto \
        ${PROJ_PATH}/proto/*.proto


.PHONY: proto-client
proto-client: ## Generate protobuf code
# Compile proto files inside the project.
	# JavaScript code generation
	cd client && yarn run grpc_tools_node_protoc \
        --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
        --ts_out=grpc_js:${PROTO_DEST} \
        --js_out=import_style=commonjs:${PROTO_DEST} \
        --grpc_out=grpc_js:${PROTO_DEST} \
        -I ${PROJ_PATH}/proto \
        ${PROJ_PATH}/proto/*.proto
