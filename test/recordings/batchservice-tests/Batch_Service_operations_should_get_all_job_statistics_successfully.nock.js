// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/lifetimejobstats?api-version=2019-06-01.9.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#jobstats/@Element\",\"url\":\"https://test1.westus.batch.azure.com/lifetimejobstats\",\"startTime\":\"2017-03-15T00:15:04.934235Z\",\"lastUpdateTime\":\"2019-06-06T23:00:00Z\",\"userCPUTime\":\"-P1DT2H15M6.024S\",\"kernelCPUTime\":\"PT12.07S\",\"wallClockTime\":\"-P1DT2H15M6.024S\",\"readIOps\":\"38328\",\"writeIOps\":\"5846\",\"readIOGiB\":0.034005649387836456,\"writeIOGiB\":0.00059732422232627869,\"numTaskRetries\":\"2072\",\"numSucceededTasks\":\"3252\",\"numFailedTasks\":\"218\",\"waitTime\":\"P3DT21H43M3.123S\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '11bd9fbc-e5ae-46fc-91d9-998c4ea28b90',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Thu, 06 Jun 2019 23:46:38 GMT',
  connection: 'close' });
 return result; }]];