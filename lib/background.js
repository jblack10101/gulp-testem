var testem = require('testem');
var api = new testem();
var data = JSON.parse(process.argv[2]);
if (data.mode === "ci") {
    api.startCI(data);
} else {
    api.startDev(data);
}
