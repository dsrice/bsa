FROM golang:1.22

RUN apt-get update && apt-get install -y tzdata

WORKDIR /go
RUN wget -O- -nv https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s v1.52.2

RUN mkdir ./app
WORKDIR /go/src/app

RUN  go install golang.org/x/tools/cmd/godoc@latest