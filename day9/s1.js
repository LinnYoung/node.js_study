const dns = require('dns');
const { hostname } = require('os');

// dns.lookup('example.org',(err, address, family)=>{
//     console.log("地址： %j 地质族： IPv%s", address, family)
// }) // 地址： "93.184.216.34" 地质族： IPv4

dns.resolve4('archive.org',(err, addresses)=>{
    if(err) throw err;
    console.log(`地址 ${JSON.stringify(addresses)}`)

    addresses.forEach((a)=>{
        dns.reverse(a, (err, hostname)=>{
            if(err){
                throw err
            }
            console.log(`地址 ${a} 逆向到：${JSON.stringify(hostname)}`)
        })
    })
})
