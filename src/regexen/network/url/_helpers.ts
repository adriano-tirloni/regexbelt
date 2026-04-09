/** @internal URL regex building blocks and factory */

const _$_credentials = "(?:[a-zA-Z0-9._~!$&'()*+,;=:%-]+@)";
const _$_host = '(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,}';
const _$_port = ':\\d{1,5}';
const _$_path = '\\/[^\\s?#]*';
const _$_query = '\\?[^\\s#]*';
const _$_fragment = '#[^\\s]*';

export const _$_scheme = {
  any: '(?:https?|ftp):\\/\\/',
  https: 'https:\\/\\/',
  http: 'http:\\/\\/',
  ftp: 'ftp:\\/\\/',
  httpOrHttps: 'https?:\\/\\/',
};

interface UrlRegexConfig {
  scheme: string;
  credentials?: boolean;
  port?: boolean;
  path?: boolean;
  query?: boolean;
  fragment?: boolean;
}

/** Builds a URL-matching RegExp from composable parts */
export function _$_buildUrlRegex(config: UrlRegexConfig): RegExp {
  let pattern = `^${config.scheme}`;
  if (config.credentials) pattern += `(?:${_$_credentials})?`;
  pattern += _$_host;
  if (config.port) pattern += `(?:${_$_port})?`;
  if (config.path) pattern += `(?:${_$_path})?`;
  if (config.query) pattern += `(?:${_$_query})?`;
  if (config.fragment) pattern += `(?:${_$_fragment})?`;
  pattern += '$';
  return new RegExp(pattern);
}
