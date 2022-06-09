const { networkInterfaces } = require('os');
const http = require('http');
const nets = networkInterfaces();

const getIp = function (option) {
    if (option === true) {
        for (const name of Object.keys(nets)) {
            for (const net of nets[name]) {
                const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
                if (net.family === familyV4Value && !net.internal) {
                    console.log(net.address);
                }
            }
        }
    }
    else if (option === false){
     http.get({ 'host': 'api.ipify.org', 'port': 80, 'path': '/' }, function (resp) {
        resp.on('data', function (ip) {
            console.log("My public IP address is: " + ip);
        });
    });   
    }
}

getIp(false);

module.exports = getIp;
