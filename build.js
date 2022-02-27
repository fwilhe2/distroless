const {Image} = require('container-image-builder')

;(async()=>{
    const image = new Image('scratch','fwilhe/mydistroless')

    // add local files to the image.
    await image.addFiles({'./passwd':"./etc/passwd"})
    await image.addFiles({'./group':"./etc/group"})

    // creates a layer in the image with files like
    // /directory-root-for-files-in-container/[the files in ./]

    // // set the default working directory for commands
    // image.WorkingDir = "/directory-root-for-files-in-container"
    // // set the default command to run in the container
    // image.Cmd = ["node","index.js"]
    // // append environment variables.
    // image.Env = []

    // save the new image at latest
    const result = await image.save()

    console.log(result)
    })();