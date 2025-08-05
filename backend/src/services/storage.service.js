var Imagekit = require("imagekit");

var imagekit = new Imagekit({
    publicKey:"public_eC5/IKVbuqvUw5xKjfCvLigCeUw=",
    privateKey:"private_/VH+bFujj//GRL9cMBMeKaYA0ag=",
    urlEndpoint:"process.env.IMAGEKIT_URL_ENDPOINT"
});

async function uploadFile(file,fileName) {
    const result = await imagekit.upload({
        file,
        fileName,
        folder:'mern14-audio'

    })

    return result;
    
}

module.exports = uploadFile;
