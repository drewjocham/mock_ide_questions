docker build -t envoy:v1 ./envoy

docker run --rm -it -p 8080:8080 envoy:v1
