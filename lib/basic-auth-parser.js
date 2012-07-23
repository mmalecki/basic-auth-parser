module.exports = function parse(auth) {
  if (!auth || typeof auth !== 'string') {
    throw new Error('No or wrong argument');
  }

  var result = {}, parts, decoded, credentials;

  parts         = auth.split(' ');

  result.scheme = parts[0];
  if (result.scheme !== 'Basic') {
    return result;
  }

  decoded       = new Buffer(parts[1], 'base64').toString('utf8');
  credentials   = decoded && decoded.split(":");

  result.username = credentials[0];
  result.password = credentials[1];

  return result;
};
