// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .get('/common/UserRealm/adlsvc01%40benwgoldoutlook.onmicrosoft.com?api-version=1.0')
  .reply(200, "{\"ver\":\"1.0\",\"account_type\":\"Managed\",\"domain_name\":\"benwgoldoutlook.onmicrosoft.com\",\"cloudinstancename\":\"login.microsoftonline.com\"}", { 'cache-control': 'private',
  'content-type': 'application/json; charset=utf-8',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '252579fe-febe-4654-a2ac-d71db9fa5289',
  'client-request-id': 'd945c55f-3f94-49c9-a768-2b152a4c8b56',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_106',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 14 Apr 2016 19:56:51 GMT',
  connection: 'close',
  'content-length': '134' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .get('/common/UserRealm/adlsvc01%40benwgoldoutlook.onmicrosoft.com?api-version=1.0')
  .reply(200, "{\"ver\":\"1.0\",\"account_type\":\"Managed\",\"domain_name\":\"benwgoldoutlook.onmicrosoft.com\",\"cloudinstancename\":\"login.microsoftonline.com\"}", { 'cache-control': 'private',
  'content-type': 'application/json; charset=utf-8',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '252579fe-febe-4654-a2ac-d71db9fa5289',
  'client-request-id': 'd945c55f-3f94-49c9-a768-2b152a4c8b56',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_106',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 14 Apr 2016 19:56:51 GMT',
  connection: 'close',
  'content-length': '134' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/benwgoldoutlook.onmicrosoft.com/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"scope\":\"user_impersonation\",\"expires_in\":\"3599\",\"expires_on\":\"1460667411\",\"not_before\":\"1460663511\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNjYzNTExLCJuYmYiOjE0NjA2NjM1MTEsImV4cCI6MTQ2MDY2NzQxMSwiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInB1aWQiOiIxMDAzQkZGRDk1NTExMDRDIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ0ZzTU1PdHdkd3VUN0FuQUkwUnlXUVZ0azA4anBjTEhWV00wLXA2emFYMCIsInRpZCI6IjZlNjA2ZWNlLTNhNWEtNDY3NC1hNjU0LWQ2YjAyYmM1YTUxYiIsInVuaXF1ZV9uYW1lIjoiYWRsc3ZjMDFAYmVud2dvbGRvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.IRI26rcYC1hyKMo4FEsNLql-kAGZUzHtoQK3SBrJ0hBoBAAHIqu6R0PQ3dCuh65I4ObcLKRMiJimK-I6Vy-rYehMdmL85XrXx3REDI_LM2yk2UvRDQaJ4VNEKje2zqIrbhZY6rQQ0dr9ko2lbXk_XREXXqLEDj9b_p1VCB7kPjkXr9Z3bSVbisZ_myF4OrxVaytZoV5FxROD26lY5glF8ASE3wv_5GP5hlxTv_MpbVK9JI7wyoBShZ3CgN6sQ9aPzSV4PkCbSKYhzWN3voj4QfvJVcMsFtB5WRAN-FGN0aWBG4IaLLbSaE6xllpEbfId8ALqVCjK3EbjFSSFgpmirw\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLQ4y2JbW3xgV8MZ5KxZqyLh6v1CjcutUXR_jq1CM1i15agdJVqaGffslrL-t_x4S09Ox7Lnd4z9DXJHptZTOEbx9arpedzGe2w8SA2aYZVK5lRM26CJekUFCSL3s1Jj4yMwX-xSo-DLFfk5u6px5kNHmf4GMPFkD4EtTXexOLk6fApF8sBVu77eqGfykOWdeVZyi6vlEPOSAZYDv6FJvd1YzDi1Kd5qPvTaI5LWEugcLNO87yE7hWZiU7XGGShMpqVzA4VE5B3DctmgXgkKqnAp6b_ajErFlWrequmdJAlnalq3O93MfKziDI_OIvqpWAybP_jxmrVeuMHmaDBA97HFVtBDlZ5ThPpPRKnZnQ1mM9py3V9f57sRCM-Sy0rCpeYv6D8IWqF7x8sKFZ5ZQj7XGP-dabpQ6uW9yZYwf7KmKFh7BF6wJfWhSueDhm8g6WTade4SuUXcCUtN31zhz0c9yDWnmlcq6dtsE9_d6XHXZZhw-AKjR-rNeUKIVNPOW6-qJdfrYYTKuwePszS6FDU6Af93MYpzEgt4yOY_AgsjZwPh71omlrb7j_K1HDqbYTOsq0P9VWTmftaMT5VcnEg28bwnFH1HOqT0BAoKga1cg_nnJyA37S-62Uj9E9p_iXiZ_ullLkrPbfN8sPK5Ix3k6TUD6OVOK-YhYdMgIWxU9kDh894mk_2G7uWkqx6XNh0V-keelf7j-H8rBcEjbslAgAA\",\"id_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNjYzNTExLCJuYmYiOjE0NjA2NjM1MTEsImV4cCI6MTQ2MDY2NzQxMSwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInN1YiI6ImY2bHBuNXppekwwRExEOHYxLVdjeFE4d08zcGZTT01Qd0YxSUN5ZFBLNkkiLCJ0aWQiOiI2ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIiLCJ1bmlxdWVfbmFtZSI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZGxzdmMwMUBiZW53Z29sZG91dGxvb2sub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'a37ecbd5-a287-4d06-abb9-cc2287d495e7',
  'client-request-id': 'd945c55f-3f94-49c9-a768-2b152a4c8b56',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_213',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 14 Apr 2016 19:56:52 GMT',
  connection: 'close',
  'content-length': '3141' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/benwgoldoutlook.onmicrosoft.com/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"scope\":\"user_impersonation\",\"expires_in\":\"3599\",\"expires_on\":\"1460667411\",\"not_before\":\"1460663511\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNjYzNTExLCJuYmYiOjE0NjA2NjM1MTEsImV4cCI6MTQ2MDY2NzQxMSwiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInB1aWQiOiIxMDAzQkZGRDk1NTExMDRDIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ0ZzTU1PdHdkd3VUN0FuQUkwUnlXUVZ0azA4anBjTEhWV00wLXA2emFYMCIsInRpZCI6IjZlNjA2ZWNlLTNhNWEtNDY3NC1hNjU0LWQ2YjAyYmM1YTUxYiIsInVuaXF1ZV9uYW1lIjoiYWRsc3ZjMDFAYmVud2dvbGRvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.IRI26rcYC1hyKMo4FEsNLql-kAGZUzHtoQK3SBrJ0hBoBAAHIqu6R0PQ3dCuh65I4ObcLKRMiJimK-I6Vy-rYehMdmL85XrXx3REDI_LM2yk2UvRDQaJ4VNEKje2zqIrbhZY6rQQ0dr9ko2lbXk_XREXXqLEDj9b_p1VCB7kPjkXr9Z3bSVbisZ_myF4OrxVaytZoV5FxROD26lY5glF8ASE3wv_5GP5hlxTv_MpbVK9JI7wyoBShZ3CgN6sQ9aPzSV4PkCbSKYhzWN3voj4QfvJVcMsFtB5WRAN-FGN0aWBG4IaLLbSaE6xllpEbfId8ALqVCjK3EbjFSSFgpmirw\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLQ4y2JbW3xgV8MZ5KxZqyLh6v1CjcutUXR_jq1CM1i15agdJVqaGffslrL-t_x4S09Ox7Lnd4z9DXJHptZTOEbx9arpedzGe2w8SA2aYZVK5lRM26CJekUFCSL3s1Jj4yMwX-xSo-DLFfk5u6px5kNHmf4GMPFkD4EtTXexOLk6fApF8sBVu77eqGfykOWdeVZyi6vlEPOSAZYDv6FJvd1YzDi1Kd5qPvTaI5LWEugcLNO87yE7hWZiU7XGGShMpqVzA4VE5B3DctmgXgkKqnAp6b_ajErFlWrequmdJAlnalq3O93MfKziDI_OIvqpWAybP_jxmrVeuMHmaDBA97HFVtBDlZ5ThPpPRKnZnQ1mM9py3V9f57sRCM-Sy0rCpeYv6D8IWqF7x8sKFZ5ZQj7XGP-dabpQ6uW9yZYwf7KmKFh7BF6wJfWhSueDhm8g6WTade4SuUXcCUtN31zhz0c9yDWnmlcq6dtsE9_d6XHXZZhw-AKjR-rNeUKIVNPOW6-qJdfrYYTKuwePszS6FDU6Af93MYpzEgt4yOY_AgsjZwPh71omlrb7j_K1HDqbYTOsq0P9VWTmftaMT5VcnEg28bwnFH1HOqT0BAoKga1cg_nnJyA37S-62Uj9E9p_iXiZ_ullLkrPbfN8sPK5Ix3k6TUD6OVOK-YhYdMgIWxU9kDh894mk_2G7uWkqx6XNh0V-keelf7j-H8rBcEjbslAgAA\",\"id_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNjYzNTExLCJuYmYiOjE0NjA2NjM1MTEsImV4cCI6MTQ2MDY2NzQxMSwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInN1YiI6ImY2bHBuNXppekwwRExEOHYxLVdjeFE4d08zcGZTT01Qd0YxSUN5ZFBLNkkiLCJ0aWQiOiI2ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIiLCJ1bmlxdWVfbmFtZSI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZGxzdmMwMUBiZW53Z29sZG91dGxvb2sub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'a37ecbd5-a287-4d06-abb9-cc2287d495e7',
  'client-request-id': 'd945c55f-3f94-49c9-a768-2b152a4c8b56',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_213',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 14 Apr 2016 19:56:52 GMT',
  connection: 'close',
  'content-length': '3141' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"adlxplatrepro.azuredatalakestore.net\",\"creationTime\":\"2016-03-28T18:31:27.9024481Z\",\"lastModifiedTime\":\"2016-03-28T18:31:27.9024481Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/adlxplatreprorg/providers/Microsoft.DataLakeStore/accounts/adlxplatrepro\",\"name\":\"adlxplatrepro\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct127.azuredatalakestore.net\",\"creationTime\":\"2016-04-05T22:20:52.4391202Z\",\"lastModifiedTime\":\"2016-04-05T22:20:52.4391202Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlsrg806/providers/Microsoft.DataLakeStore/accounts/javaadlsacct127\",\"name\":\"javaadlsacct127\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct119.azuredatalakestore.net\",\"creationTime\":\"2016-04-05T22:14:48.6188178Z\",\"lastModifiedTime\":\"2016-04-05T22:14:48.6188178Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlsrg819/providers/Microsoft.DataLakeStore/accounts/javaadlsacct119\",\"name\":\"javaadlsacct119\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls2671.azuredatalakestore.net\",\"creationTime\":\"2016-04-14T19:36:10.8516897Z\",\"lastModifiedTime\":\"2016-04-14T19:36:10.8516897Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls2671\",\"name\":\"xplattestadls2671\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls5174.azuredatalakestore.net\",\"creationTime\":\"2016-04-14T19:36:45.4027029Z\",\"lastModifiedTime\":\"2016-04-14T19:36:45.4027029Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls5174\",\"name\":\"xplattestadls5174\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls3680.azuredatalakestore.net\",\"creationTime\":\"2016-04-14T19:55:37.8128012Z\",\"lastModifiedTime\":\"2016-04-14T19:55:37.8128012Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls3680\",\"name\":\"xplattestadls3680\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls9621.azuredatalakestore.net\",\"creationTime\":\"2016-04-14T19:56:13.9262241Z\",\"lastModifiedTime\":\"2016-04-14T19:56:13.9262241Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls9621\",\"name\":\"xplattestadls9621\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3319',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '2c6c5360-ddd4-4fba-9677-0d8b4180b583',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'd2d92f48-5700-4841-bf35-48ffb65493d5',
  'x-ms-routing-request-id': 'WESTUS:20160414T195653Z:d2d92f48-5700-4841-bf35-48ffb65493d5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 14 Apr 2016 19:56:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"adlxplatrepro.azuredatalakestore.net\",\"creationTime\":\"2016-03-28T18:31:27.9024481Z\",\"lastModifiedTime\":\"2016-03-28T18:31:27.9024481Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/adlxplatreprorg/providers/Microsoft.DataLakeStore/accounts/adlxplatrepro\",\"name\":\"adlxplatrepro\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct127.azuredatalakestore.net\",\"creationTime\":\"2016-04-05T22:20:52.4391202Z\",\"lastModifiedTime\":\"2016-04-05T22:20:52.4391202Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlsrg806/providers/Microsoft.DataLakeStore/accounts/javaadlsacct127\",\"name\":\"javaadlsacct127\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlsacct119.azuredatalakestore.net\",\"creationTime\":\"2016-04-05T22:14:48.6188178Z\",\"lastModifiedTime\":\"2016-04-05T22:14:48.6188178Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlsrg819/providers/Microsoft.DataLakeStore/accounts/javaadlsacct119\",\"name\":\"javaadlsacct119\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls2671.azuredatalakestore.net\",\"creationTime\":\"2016-04-14T19:36:10.8516897Z\",\"lastModifiedTime\":\"2016-04-14T19:36:10.8516897Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls2671\",\"name\":\"xplattestadls2671\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls5174.azuredatalakestore.net\",\"creationTime\":\"2016-04-14T19:36:45.4027029Z\",\"lastModifiedTime\":\"2016-04-14T19:36:45.4027029Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls5174\",\"name\":\"xplattestadls5174\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls3680.azuredatalakestore.net\",\"creationTime\":\"2016-04-14T19:55:37.8128012Z\",\"lastModifiedTime\":\"2016-04-14T19:55:37.8128012Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls3680\",\"name\":\"xplattestadls3680\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls9621.azuredatalakestore.net\",\"creationTime\":\"2016-04-14T19:56:13.9262241Z\",\"lastModifiedTime\":\"2016-04-14T19:56:13.9262241Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls9621\",\"name\":\"xplattestadls9621\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3319',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '2c6c5360-ddd4-4fba-9677-0d8b4180b583',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'd2d92f48-5700-4841-bf35-48ffb65493d5',
  'x-ms-routing-request-id': 'WESTUS:20160414T195653Z:d2d92f48-5700-4841-bf35-48ffb65493d5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 14 Apr 2016 19:56:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .get('/common/UserRealm/adlsvc01%40benwgoldoutlook.onmicrosoft.com?api-version=1.0')
  .reply(200, "{\"ver\":\"1.0\",\"account_type\":\"Managed\",\"domain_name\":\"benwgoldoutlook.onmicrosoft.com\",\"cloudinstancename\":\"login.microsoftonline.com\"}", { 'cache-control': 'private',
  'content-type': 'application/json; charset=utf-8',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '7ed0c07a-3592-4c21-a96e-01989f42b939',
  'client-request-id': '8491a487-3548-4412-a165-7e2807856385',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_460',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 14 Apr 2016 19:56:53 GMT',
  connection: 'close',
  'content-length': '134' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .get('/common/UserRealm/adlsvc01%40benwgoldoutlook.onmicrosoft.com?api-version=1.0')
  .reply(200, "{\"ver\":\"1.0\",\"account_type\":\"Managed\",\"domain_name\":\"benwgoldoutlook.onmicrosoft.com\",\"cloudinstancename\":\"login.microsoftonline.com\"}", { 'cache-control': 'private',
  'content-type': 'application/json; charset=utf-8',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '7ed0c07a-3592-4c21-a96e-01989f42b939',
  'client-request-id': '8491a487-3548-4412-a165-7e2807856385',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_460',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 14 Apr 2016 19:56:53 GMT',
  connection: 'close',
  'content-length': '134' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/benwgoldoutlook.onmicrosoft.com/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"scope\":\"user_impersonation\",\"expires_in\":\"3599\",\"expires_on\":\"1460667413\",\"not_before\":\"1460663513\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNjYzNTEzLCJuYmYiOjE0NjA2NjM1MTMsImV4cCI6MTQ2MDY2NzQxMywiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInB1aWQiOiIxMDAzQkZGRDk1NTExMDRDIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ0ZzTU1PdHdkd3VUN0FuQUkwUnlXUVZ0azA4anBjTEhWV00wLXA2emFYMCIsInRpZCI6IjZlNjA2ZWNlLTNhNWEtNDY3NC1hNjU0LWQ2YjAyYmM1YTUxYiIsInVuaXF1ZV9uYW1lIjoiYWRsc3ZjMDFAYmVud2dvbGRvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.XjN59WQbd2QamQBtY3zm4bSpeA8PWy_rpyr_78ewIvc3LHOvHHVqwYpgPM7ax7aGeTn_f0jMlmeutXP7uXUbPs2cd2jGbZELCP8cEkByuRdvnhBBIsbMHqYj9infTzHgGsY1GjoKu7dVx01uI_Jdx74tzTPWhgFSMOPflIJ-dEOkov5_gxjBfYLFZb5CQr-v-HkyzL37BIqvjY1_AyCU9FW2XlMKfFSxIuWt9nK2G8C3XaHLk0x21xIPPLvcPTsngB6BhY5tFRA8KicyjyAaVZJ7qlK1dXHhuNN4RET_zvMiCmriHih-GJRU8lgLxTLd82VWG1MwXALwVlyMJPdC5w\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLUX7OQQIN1E5cIUcbfNk4r-1CchDQ0D5RS3pFuB7x5jQmmN5pAZ5T05pKZoO8oIgNhl-qSmBCWO9OV9bM0L5ytbvr9NS0ubLxEs33NEy3-fRmgYFAB0SUNE3cp5-YyljLvDWCDeM-GRKbPbUSzAerOMIpBefyI9U9Ry72YdfmqJmQkUYxpZO-keut_NNBp2TAHopqad5jUd27cFWIy27FmF7WObKTfWR4pJimhdcgw138i5IFf0-YrlhnBITT0qoAdT8nn_OziNIy1LQdLjiy8_jJezVpPnO82sjodqUqhtsB2p099G1t92VvnLqBhxlpjpftPlruIwMa5IHRTT6o71qvqpwDDC0dBEIxinvCowjGB4qer1quiDWQ39V2bh8_8HQP6A-LmjN_N5pJi4QHEkLNjEpIQ4Ave_6jXD04xABvbiGUWfxKmAN5i_Z8vgY7m40xWXcGix9iwMLamZfdbhwvQIvJqDKltNxM-SXTXx5tAxi_vgF_2QLhBM3dhTsePjVTtvwAX4imTEedfNNOKDHPDCMrdqzbPuaxp30xlK4CUzXDse3xqSc2GErPUwNpfBumf975YqQw4GYRq68lLtXG5ulqLd8DRhFY4nufGJAScPrx6YbI_2bpJMF3426r7ZMwp70J_hYeNm1J-X__etn897OrLrvTf3nmC_dGw-L97raCRtn3zwu0LtU4PFWZhuRWR9GX3yHBbW4vGz9u8MgAA\",\"id_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNjYzNTEzLCJuYmYiOjE0NjA2NjM1MTMsImV4cCI6MTQ2MDY2NzQxMywiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInN1YiI6ImY2bHBuNXppekwwRExEOHYxLVdjeFE4d08zcGZTT01Qd0YxSUN5ZFBLNkkiLCJ0aWQiOiI2ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIiLCJ1bmlxdWVfbmFtZSI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZGxzdmMwMUBiZW53Z29sZG91dGxvb2sub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'b9b4d0b8-99d7-4e0f-95d1-01db4e44bc2a',
  'client-request-id': '8491a487-3548-4412-a165-7e2807856385',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_41',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 14 Apr 2016 19:56:54 GMT',
  connection: 'close',
  'content-length': '3141' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/benwgoldoutlook.onmicrosoft.com/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"scope\":\"user_impersonation\",\"expires_in\":\"3599\",\"expires_on\":\"1460667413\",\"not_before\":\"1460663513\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNjYzNTEzLCJuYmYiOjE0NjA2NjM1MTMsImV4cCI6MTQ2MDY2NzQxMywiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInB1aWQiOiIxMDAzQkZGRDk1NTExMDRDIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ0ZzTU1PdHdkd3VUN0FuQUkwUnlXUVZ0azA4anBjTEhWV00wLXA2emFYMCIsInRpZCI6IjZlNjA2ZWNlLTNhNWEtNDY3NC1hNjU0LWQ2YjAyYmM1YTUxYiIsInVuaXF1ZV9uYW1lIjoiYWRsc3ZjMDFAYmVud2dvbGRvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.XjN59WQbd2QamQBtY3zm4bSpeA8PWy_rpyr_78ewIvc3LHOvHHVqwYpgPM7ax7aGeTn_f0jMlmeutXP7uXUbPs2cd2jGbZELCP8cEkByuRdvnhBBIsbMHqYj9infTzHgGsY1GjoKu7dVx01uI_Jdx74tzTPWhgFSMOPflIJ-dEOkov5_gxjBfYLFZb5CQr-v-HkyzL37BIqvjY1_AyCU9FW2XlMKfFSxIuWt9nK2G8C3XaHLk0x21xIPPLvcPTsngB6BhY5tFRA8KicyjyAaVZJ7qlK1dXHhuNN4RET_zvMiCmriHih-GJRU8lgLxTLd82VWG1MwXALwVlyMJPdC5w\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLUX7OQQIN1E5cIUcbfNk4r-1CchDQ0D5RS3pFuB7x5jQmmN5pAZ5T05pKZoO8oIgNhl-qSmBCWO9OV9bM0L5ytbvr9NS0ubLxEs33NEy3-fRmgYFAB0SUNE3cp5-YyljLvDWCDeM-GRKbPbUSzAerOMIpBefyI9U9Ry72YdfmqJmQkUYxpZO-keut_NNBp2TAHopqad5jUd27cFWIy27FmF7WObKTfWR4pJimhdcgw138i5IFf0-YrlhnBITT0qoAdT8nn_OziNIy1LQdLjiy8_jJezVpPnO82sjodqUqhtsB2p099G1t92VvnLqBhxlpjpftPlruIwMa5IHRTT6o71qvqpwDDC0dBEIxinvCowjGB4qer1quiDWQ39V2bh8_8HQP6A-LmjN_N5pJi4QHEkLNjEpIQ4Ave_6jXD04xABvbiGUWfxKmAN5i_Z8vgY7m40xWXcGix9iwMLamZfdbhwvQIvJqDKltNxM-SXTXx5tAxi_vgF_2QLhBM3dhTsePjVTtvwAX4imTEedfNNOKDHPDCMrdqzbPuaxp30xlK4CUzXDse3xqSc2GErPUwNpfBumf975YqQw4GYRq68lLtXG5ulqLd8DRhFY4nufGJAScPrx6YbI_2bpJMF3426r7ZMwp70J_hYeNm1J-X__etn897OrLrvTf3nmC_dGw-L97raCRtn3zwu0LtU4PFWZhuRWR9GX3yHBbW4vGz9u8MgAA\",\"id_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNjYzNTEzLCJuYmYiOjE0NjA2NjM1MTMsImV4cCI6MTQ2MDY2NzQxMywiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInN1YiI6ImY2bHBuNXppekwwRExEOHYxLVdjeFE4d08zcGZTT01Qd0YxSUN5ZFBLNkkiLCJ0aWQiOiI2ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIiLCJ1bmlxdWVfbmFtZSI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZGxzdmMwMUBiZW53Z29sZG91dGxvb2sub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'b9b4d0b8-99d7-4e0f-95d1-01db4e44bc2a',
  'client-request-id': '8491a487-3548-4412-a165-7e2807856385',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_41',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 14 Apr 2016 19:56:54 GMT',
  connection: 'close',
  'content-length': '3141' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls3680.azuredatalakestore.net\",\"creationTime\":\"2016-04-14T19:55:37.8128012Z\",\"lastModifiedTime\":\"2016-04-14T19:55:37.8128012Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls3680\",\"name\":\"xplattestadls3680\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls9621.azuredatalakestore.net\",\"creationTime\":\"2016-04-14T19:56:13.9262241Z\",\"lastModifiedTime\":\"2016-04-14T19:56:13.9262241Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls9621\",\"name\":\"xplattestadls9621\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '998',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '0b549ee9-019c-44cf-8185-652209bf9ce7',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'b218d476-a317-4f3c-8a59-865c16eed5e4',
  'x-ms-routing-request-id': 'WESTUS:20160414T195655Z:b218d476-a317-4f3c-8a59-865c16eed5e4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 14 Apr 2016 19:56:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls3680.azuredatalakestore.net\",\"creationTime\":\"2016-04-14T19:55:37.8128012Z\",\"lastModifiedTime\":\"2016-04-14T19:55:37.8128012Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls3680\",\"name\":\"xplattestadls3680\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls9621.azuredatalakestore.net\",\"creationTime\":\"2016-04-14T19:56:13.9262241Z\",\"lastModifiedTime\":\"2016-04-14T19:56:13.9262241Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls9621\",\"name\":\"xplattestadls9621\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '998',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '0b549ee9-019c-44cf-8185-652209bf9ce7',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'b218d476-a317-4f3c-8a59-865c16eed5e4',
  'x-ms-routing-request-id': 'WESTUS:20160414T195655Z:b218d476-a317-4f3c-8a59-865c16eed5e4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 14 Apr 2016 19:56:55 GMT',
  connection: 'close' });
 return result; }]];