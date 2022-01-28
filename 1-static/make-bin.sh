#!/bin/sh

set -x

cd rootfs/bin; for i in $(./toybox); do ln -s toybox $i; done