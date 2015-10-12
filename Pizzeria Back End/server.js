var sys = require('sys'),
    http = require('http');
    http.createServer(function (req, res) {
        console.log("hello");
//            switch (req.url) 
//                case '/myaction':
//                        res.end(?????);
//                    break;
        console.log(req);
        console.log(res);
        console.log(req.url);
//            }
    }).listen(8080);
sys.puts('Server running at http://127.0.0.1:8080/');