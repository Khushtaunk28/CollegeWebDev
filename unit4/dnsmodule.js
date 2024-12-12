// Require dns module
const dns = require('dns');

// Store the web address
const website = 'www.google.com';

// Call lookup function of DNS
dns.lookup(website, (err, address, family) => {
    console.log('Address of %s is %j family: IPv%s',
        website, address, family);
});