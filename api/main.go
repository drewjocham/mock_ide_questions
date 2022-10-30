package main

import (
	"context"
	"github.com/interviews/pkg/api"
	"golang.org/x/sync/errgroup"
	"google.golang.org/grpc"
)

func startServer() error {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	g, _ := errgroup.WithContext(ctx)

	apiConn, err := grpc.Dial("tcp", grpc.WithChainUnaryInterceptor())

	api.NewApiServiceClient(apiConn)

	if err != nil {
		return err
	}
	defer apiConn.Close()

	return g.Wait()

}

func main() {

	err := startServer()
	if err != nil {
		return
	}

}
