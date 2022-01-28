const fs = require("fs");
const { execSync } = require("child_process");

if (fs.existsSync("rootfs/")) {
  fs.rmSync("rootfs/", { recursive: true, force: true });
}

fs.mkdirSync("rootfs");
fs.mkdirSync("rootfs/etc");
fs.mkdirSync("rootfs/usr");
fs.mkdirSync("rootfs/bin");
fs.copyFileSync("../group", "rootfs/etc/group");
fs.copyFileSync("../passwd", "rootfs/etc/passwd");

execSync(
  "wget --output-document rootfs/bin/toybox http://landley.net/toybox/bin/toybox-x86_64"
);
fs.chmodSync("rootfs/bin/toybox", 0777);
execSync("bash make-bin.sh");
