const env = process.env;
const nodeEnv = env.NODE_ENV || 'development';

const logStars = function(message) {
    console.info('**********');
    console.info(message);
    console.info('**********');
  };

module.exports = {
    nodeEnv: nodeEnv,
    mongodbUri: 'mongodb://localhost:27017/test',
    port: env.PORT || 3000,
    host: env.HOST || '127.0.0.1',
    get serverUrl() {
      return `http://${this.host}:${this.port}`;
    }
  };
  