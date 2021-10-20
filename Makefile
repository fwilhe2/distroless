all:
	buildah build -t distroless:static -f Containerfile.1.static
	buildah build -t distroless:static-debug -f Containerfile.1.static-debug