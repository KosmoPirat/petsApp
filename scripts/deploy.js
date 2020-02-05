const dotenv = require('dotenv').config().parsed;
const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();
 
const config = {
    user: dotenv.FTPUser,
    // Password optional, prompted if none given
    password: dotenv.FTPPassword,
    host: dotenv.FTPServer,
    localRoot: __dirname + "/../build",
    remoteRoot: "/public_html/remote-folder/",
    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: ["*", "**/*"],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true
};
console.log(dotenv);
 
// use with promises
ftpDeploy
    .deploy(config)
    .then(res => console.log("finished:", res))
    .catch(err => console.log(err));