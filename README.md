# regex-belt

A collection of commonly used regular expressions, organized by category.

## Install

```bash
npm install regex-belt
```

## Usage

```ts
import { datetime, countries } from 'regex-belt';

datetime.dashedDate.test('2022-12-31'); // true
countries.br.cpf.test('123.456.789-09'); // true
```

<!-- GENERATED:START - Do not edit below this line -->
## Patterns

### Countries / BR

<table>
<tr>
  <td><b><a href="./src/regexen/countries/br/cpf.ts"><code>cpf</code></a></b></td>
  <td>Matches a Brazilian CPF number in the format XXX.XXX.XXX-XX</td>
</tr>
<tr>
  <td colspan="2">
    <details><summary>Examples</summary>

    :white_check_mark: `123.456.789-09`

    :x: `12345678909`

    </details>
  </td>
</tr>
<tr>
  <td colspan="2"><pre lang="javascript"><code>/^\d{3}\.\d{3}\.\d{3}-\d{2}$/</code></pre></td>
</tr>
</table>

### Datetime

<table>
<tr>
  <td><b><a href="./src/regexen/datetime/dashed-date-loose.ts"><code>dashedDateLoose</code></a></b></td>
  <td>Matches a date in the format YYYY-MM-DD Valid digits are 0000 to 9999 for year, 01 to 12 for month and 01 to 31 for day</td>
</tr>
<tr>
  <td colspan="2">
    <details><summary>Examples</summary>

    :white_check_mark: `2022-12-31`

    :white_check_mark: `2022-12-31T23:59:59.999Z`

    :white_check_mark: `9992022-12-31`

    </details>
  </td>
</tr>
<tr>
  <td colspan="2"><pre lang="javascript"><code>/([0-9]{4}-([0][1-9]|[1][0-2])-([1-2][0-9]|[0][1-9]|[3][0-1]))/</code></pre></td>
</tr>
<tr>
  <td><b><a href="./src/regexen/datetime/dashed-date.ts"><code>dashedDate</code></a></b></td>
  <td>Matches a date in the format YYYY-MM-DD Valid digits are 0000 to 9999 for year, 01 to 12 for month and 01 to 31 for day.</td>
</tr>
<tr>
  <td colspan="2">
    <details><summary>Examples</summary>

    :white_check_mark: `2022-12-31`

    :x: `2022-12-31T23:59:59.999Z`

    :x: `9992022-12-31`

    </details>
  </td>
</tr>
<tr>
  <td colspan="2"><pre lang="javascript"><code>/^([0-9]{4}-([0][1-9]|[1][0-2])-([1-2][0-9]|[0][1-9]|[3][0-1]))$/</code></pre></td>
</tr>
<tr>
  <td><b><a href="./src/regexen/datetime/iso-utc.ts"><code>isoUtc</code></a></b></td>
  <td>Regex that matches a UTC ISO String Date in format YYYY-MM-DDTHH:mm:ss.sssZ</td>
</tr>
<tr>
  <td colspan="2">
    <details><summary>Examples</summary>

    :white_check_mark: `2022-12-31T23:59:59.999Z`

    :white_check_mark: `2022-12-31T23:59:59Z`

    </details>
  </td>
</tr>
<tr>
  <td colspan="2"><pre lang="javascript"><code>/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/</code></pre></td>
</tr>
</table>

<!-- GENERATED:END -->
