var Client = require('scp2').Client;

var opt = {
    port: 22,
    host:'172.16.215.213',             //  172.16.215.213
    username:'dmartin',         //  dmartin
    password:'temporal',
    localPath: 'C:\\Users\\daniel.martin\\workspace\\CAT-1047\\public\\js\\bundle.js',       //  C:\\Users\\daniel.martin\\workspace\\CAT-1047\\public\\js\\bundle.js
    remoteDir: '.\\devel\\CAT-1047\\public\\js\\bundle.js'        //  .\\devel\\CAT-1047\\public\\js\\bundle.js
};

try {
    if (!opt.host && !opt.username && !opt.localPath && !opt.remoteDir) throw 'Life is too short for shitty code \nRellena Objeto de configuracion para subir el fichero';
    client = new Client(opt);
    client.upload(opt.localPath, opt.remoteDir, function(err){
        if (!err)
            console.log('Upload bundlejs OK');
        else
            console.log(err);
        client.close();
    });
} catch (error) {
    console.log (error);
    process.exit(1);
}

