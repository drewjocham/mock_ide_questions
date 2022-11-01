PROJ_PATH=${CURDIR}
UID?=${shell id -u}
GID?=${shell id -g}

.PHONY: Install form dependencies
.install:
	cd form && yarn

.PHONY: start form app
.form:
	cd form && yarn serve

.PHONY: Install backoffice-view dependencies
.install:
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
	protoc api.proto --proto_path=${PROJ_PATH}/proto --js_out=import_style=commonjs:${PROJ_PATH}/view/proto


.PHONY: proto-old
proto-old: ## Generate protobuf code
# Compile proto files inside the project.
	protoc api.proto --proto_path=${PROJ_PATH}/proto --go_out=. --go-grpc_out=.

	protoc api.proto --proto_path=${PROJ_PATH}/proto \
		  --plugin=protoc-gen-grpc=${PROJ_PATH}/form/node_modules/.bin/grpc_tools_node_protoc_plugin \
		  --plugin=protoc-gen-ts=${PROJ_PATH}/form/proto \
		  --js_out=import_style=commonjs:${PROJ_PATH}/form/proto \
          --ts_out=service=grpc-web:${PROJ_PATH}/form/proto


#--plugin=${PROJ_PATH}/view/node_modules/.bin/protoc-gen-ts-proto \
#--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
# --ts_proto_opt=esModuleInterop=true \
# --plugin=./node_modules/.bin/protoc-gen-ts_proto \
# --js_out=import_style=commonjs:${PROJ_PATH}/view/proto
#protoc -I proto proto/*.proto --js_out=import_style=commonjs:./frontend/proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./frontend/proto

