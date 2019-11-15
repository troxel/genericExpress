var config = {}; 

// Main config
config['default'] = {
 app: {
   port: 3000
 },
 db: {
   host: 'localhost',
   port: 27017,
   name: 'db'
 }
};

// These override default configs
config['dev'] = {
 app: {
  port: 7000
 }
}

module.exports = config;
