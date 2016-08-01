var fs = require('fs');

fs.readFile('public/js/bundle.js', 'utf8', function (err,data) {

    if (err) {
        return console.log(err);
    }

    console.log ('Fix bundle.js Prototype Babel issue');
    var result = data.replace(/\/\/ Fix native[^]+?\/\/ fix Array/gm,'// fix Array');
    result = result.replace("if (!isObject(it)) throw TypeError(it + ' is not an object!');", "");

    if (process.argv && process.argv[2] === 'pro') {
        console.log ('Uglify Bundle');
        var UglifyJS = require("uglify-js");
        result = UglifyJS.minify(result.toString(), {fromString: true});
        result = result.code;
    }

    fs.writeFile('public/js/bundle.js', result, 'utf8', function (err) {
        if (err) return console.log(err);
        console.log ('Write bundle.js');
        process.exit(0);
    });
});
