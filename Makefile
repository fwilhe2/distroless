all:
	CGO_ENABLED=0 go build check_certs.go
	buildah build -t distroless:static -f Containerfile.1.static
	buildah build -t distroless:static-debug -f Containerfile.1.static-debug
	buildah build -t distroless:static-test -f Containerfile.1.static-test
	podman run distroless:static-test
	buildah build -t distroless:base -f Containerfile.2.base
	buildah build -t distroless:base-debug -f Containerfile.2.base-debug
	go build check_cgo.go
	buildah build -t distroless:base-test -f Containerfile.2.base-test
	podman run distroless:base-test
