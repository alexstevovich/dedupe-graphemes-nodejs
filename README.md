# dedupe-graphemes

**Canonical URL:**  
[https://alexstevovich.com/a/dedupe-graphemes-nodejs](https://alexstevovich.com/a/dedupe-graphemes-nodejs)

**Software URL:**  
[https://midnightcitylights.com/software/dedupe-graphemes-nodejs](https://midnightcitylights.com/software/dedupe-graphemes-nodejs)

A utility to remove duplicate graphemes from a string, preserving the order of their first occurrence. This is useful for languages and symbols where multiple codepoints may represent a single character.

---

## Installation

```sh
npm install dedupe-graphemes
```

## Example

```js
import dedupeGraphemes from 'dedupe-graphemes';

console.log(dedupeGraphemes('aabbcc')); // "abc"
console.log(dedupeGraphemes('😀😀😃😄😀')); // "😀😃😄"
console.log(dedupeGraphemes('àáààä')); // "àáä"
```

## Function

### `dedupeGraphemes(input, locale = 'en')`

Removes duplicate graphemes from a string, preserving order.

### Parameters

| Name     | Type   | Description                                                  |
| -------- | ------ | ------------------------------------------------------------ |
| `input`  | string | The input string containing multi-codepoint graphemes.       |
| `locale` | string | Optional locale for grapheme segmentation (default is 'en'). |

### Returns

| Type   | Description                                    |
| ------ | ---------------------------------------------- |
| string | A new string with duplicate graphemes removed. |

### Notes

- The function preserves the order of characters as they first appear.
- Lightweight and efficient, using a `Set` to track seen graphemes.
- Uses `Intl.Segmenter` to properly segment graphemes according to locale.
- Ideal for handling multi-codepoint characters like emojis or accented characters.

## License

Licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
