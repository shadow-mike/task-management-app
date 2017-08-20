import { environment } from '../environments/environment';

// Server Address
const REST_HOST_DEFS = {
  dev: '',
  test: '',
  prod: ''
}

export const REST_HOST = REST_HOST_DEFS[environment.production ? 'prod' : 'dev'];