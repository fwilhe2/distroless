all:
	CGO_ENABLED=0 go build check_certs.go
	buildah bud -t distroless:static -f Containerfile.1.static
	buildah bud -t distroless:static-debug -f Containerfile.1.static-debug
	buildah bud -t distroless:static-test -f Containerfile.1.static-test
	podman run distroless:static-test
	buildah bud -t distroless:base -f Containerfile.2.base
	buildah bud -t distroless:base-debug -f Containerfile.2.base-debug
