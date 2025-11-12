/*
 * dedupe-chars
 * https://alexstevovich.com/a/dedupe-graphemes-nodejs
 *
 * Copyright 2015–2025 Alex Stevovich
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Removes duplicate graphemes from a string, preserving order.
 *
 * @param {string} input - The input string containing multi-codepoint graphemes.
 * @param {string} [locale='en'] - The optional locale for grapheme segmentation.
 * @returns {string} A string with duplicate graphemes removed.
 */
export default function dedupeGraphemes(input, locale = 'en') {
    const seen = new Set();
    const result = [];

    const segmenter = new Intl.Segmenter(locale, { granularity: 'grapheme' });
    for (const { segment: grapheme } of segmenter.segment(input)) {
        if (!seen.has(grapheme)) {
            seen.add(grapheme);
            result.push(grapheme);
        }
    }

    return result.join('');
}
