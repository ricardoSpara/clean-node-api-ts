import { basename } from 'path';

import { HttpResponse } from '../protocols/http';

const badRequest = (Error: Error): HttpResponse => ({
  body: Error,
  statusCode: 400,
});

export default badRequest;
