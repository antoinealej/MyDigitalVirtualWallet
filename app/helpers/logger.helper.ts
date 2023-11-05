type dataType = string | number | boolean | object;
type typeType = 'INFO' | 'WARN' | 'ERROR';

const buildLogMessage = (type: typeType, data: dataType): string => {
  switch (typeof data) {
    case 'object':
      return `${new Date().toISOString()}: ${type} | ${JSON.stringify(data)}`;
    case 'string':
    case 'number':
      return `${new Date().toISOString()}: ${type} | ${data}`;
    case 'boolean':
      return `${new Date().toISOString()}: ${type} | ${data ? 'true' : 'false'}`;
    default:
      return '';
  }
};

const loggerHelper = {
  info (data: dataType) {
    console.info(buildLogMessage('INFO', data));
  },
  warn (data: dataType) {
    console.warn(buildLogMessage('WARN', data));
  },
  error (data: dataType) {
    console.error(buildLogMessage('ERROR', data));
  },
};

export default loggerHelper;
