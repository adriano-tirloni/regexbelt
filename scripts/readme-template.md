<div align="center">

# regex-belt

**A collection of hundreds battle-tested regular expressions you'd otherwise copy-paste from Stack Overflow.**

Dates, documents, phone numbers, bank accounts, license plates — validated, tested, and ready to import.

[![npm version](https://img.shields.io/npm/v/regex-belt)](https://www.npmjs.com/package/regex-belt)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

</div>

---

## Why regex-belt?

- **No more regex roulette.** Every pattern is tested against real-world valid _and_ invalid inputs. No silent mismatches in production.
- **Zero dependencies.** Pure regex literals — no runtime overhead, no transitive surprises.
- **Tree-shakeable.** Import only what you need. Your bundler drops the rest.
- **Self-documenting.** This README is auto-generated from JSDoc in the source — the docs are always in sync with the code.


## Install

```bash
npm install regex-belt
# or
pnpm add regex-belt
# or
yarn add regex-belt
```

## Import
```js
import { datetime, countries } from 'regex-belt';
import { RegexBelt } from 'regex-belt';
import RegexBelt from 'regex-belt';
```

## Quick start

```ts
import { datetime, countries } from 'regex-belt';

// Validate a date
datetime.dashedDate.test('2022-12-31'); // true

// Validate a Brazilian CPF
countries.br.documents.cpf.test('123.456.789-09'); // true

// Validate a phone number
countries.br.contact.phone.test('+55 11 91234-5678'); // true
```

Every regex is a plain `RegExp` literal — use `.test()`, `.match()`, or `.exec()` as you normally would.

## Contributing

### Adding a new regex

Each regex requires four things: the regex file, a test fixture, a test file, and barrel export wiring.

#### 1. Create the regex file

Add your file under `src/regexen/` following the existing directory structure (e.g. `src/regexen/countries/br/contact/cep.ts`).

Every exported regex **must** have a JSDoc block with a description, optional notes wrapped in triple underscores, and `@example` tags with match indicators:

```ts
/**
 * Matches a Brazilian CEP (postal code) in the format XXXXX-XXX
 *
 * ___Enforces beginning and end of string___
 * @example ✅ '01001-000'
 * @example ❌ '01001000'
 */
export const cepFormatted = /^(?:0[1-9]|[1-9]\d)\d{3}-\d{3}$/;
```

The `@example` format is strictly validated — each line must be `@example ✅|❌ <value>`.

#### 2. Create test fixtures

Add a matching fixture file under `src/fixtures/` mirroring the regex path (e.g. `src/fixtures/countries/br/contact/cep.ts`).

Export objects with descriptive keys for valid and invalid cases:

```ts
export const validCepFormatted = {
  saoPauloCentro: '01001-000',
  standard: '12345-678',
};

export const invalidCepFormatted = {
  noDash: '01001000',
  tooShort: '0100-000',
};
```

#### 3. Create the test file

Add a `.test.ts` file next to the regex file. Tests use Vitest and iterate over fixture entries:

```ts
import { describe, expect, it } from 'vitest';
import { validCepFormatted, invalidCepFormatted } from '@src/fixtures/countries/br/contact/cep.ts';
import { cepFormatted } from './cep.ts';

describe('cepFormatted', () => {
  it.each(Object.entries(validCepFormatted))('%s: %s', (_, value) => {
    expect(cepFormatted.test(value)).toBe(true);
  });

  it.each(Object.entries(invalidCepFormatted))('%s: %s', (_, value) => {
    expect(cepFormatted.test(value)).toBe(false);
  });
});
```

#### 4. Wire up barrel exports

Add an `export * from './your-file.ts'` line to the `_index.ts` in the same directory. If the directory is new, create a `_index.ts` and export it from the parent `_index.ts`.

#### 5. Verify and generate

```bash
pnpm check-all   # Run all checks before it can be published
```

#### 6. Open a PR
That's it

<!-- GENERATED:START - Do not edit below this line -->

{{GENERATED_CONTENT}}
<!-- GENERATED:END -->
