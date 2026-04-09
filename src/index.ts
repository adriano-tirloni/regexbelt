export * as countries from './regexen/countries/_index.ts';
export * as datetime from './regexen/datetime/_index.ts';
export * as math from './regexen/math/_index.ts';
export * as network from './regexen/network/_index.ts';
export * as vendors from './regexen/vendors/_index.ts';
export * as web from './regexen/web/_index.ts';

import * as countries from './regexen/countries/_index.ts';
import * as datetime from './regexen/datetime/_index.ts';
import * as math from './regexen/math/_index.ts';
import * as network from './regexen/network/_index.ts';
import * as vendors from './regexen/vendors/_index.ts';
import * as web from './regexen/web/_index.ts';

const RegexBelt = { countries, datetime, math, network, vendors, web };

export { RegexBelt };
export default RegexBelt;
