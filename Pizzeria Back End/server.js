var sys = require('sys'),
    http = require('http'),
    fs = require('fs'),
    formidable = require('formidable'),
    util = require('util');

    http.createServer(function (req, res) {
        
        if(re.method.toLowerCase() == 'get') {
            
        } else if (req.method.toLowerCase() == 'post'){
            processForm(req, res);
    }
    }).listen(8080);

function processForm(req, res) {
    var form = new formidable.IncomingForm();
    
    form.parse(req, function (err, fields, files) {
     
        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        res.write('recieved the data:\n\n');
        res.end(uil.inspect({
            fields: fields,
            files: files
        }));
    });
}

//        console.log("hello");
////            switch (req.url) 
////                case '/myaction':
////                        res.end(?????);
////                    break;
//        console.log(req);
//        console.log(res);
//        console.log(req.url);
////            }
//    }).listen(8080);
//sys.puts('Server running at http://127.0.0.1:8080/');