import { describe, it, expect } from 'vitest';
import dedupeGraphemes from '../src/index.js';

describe('dedupeGraphemes', () => {
    it('should remove duplicate single-character graphemes', () => {
        const input = 'aabbcc';
        const result = dedupeGraphemes(input);
        expect(result).toBe('abc');
    });

    it('should remove duplicate multi-codepoint graphemes (e.g., emojis)', () => {
        const input = '🙂🙂😁😁';
        const result = dedupeGraphemes(input);
        expect(result).toBe('🙂😁');
    });

    it('should handle a mix of single-character and multi-codepoint graphemes', () => {
        const input = 'a🙂b😁a🙂c';
        const result = dedupeGraphemes(input);
        expect(result).toBe('a🙂b😁c');
    });

    it('should preserve the order of graphemes', () => {
        const input = 'a🙂b🙂c😁a😁';
        const result = dedupeGraphemes(input);
        expect(result).toBe('a🙂bc😁');
    });

    it('should return the input unchanged if no duplicates exist', () => {
        const input = 'abcd';
        const result = dedupeGraphemes(input);
        expect(result).toBe('abcd');
    });

    it('should handle empty strings', () => {
        const input = '';
        const result = dedupeGraphemes(input);
        expect(result).toBe('');
    });

    it('should handle strings with single grapheme characters', () => {
        const input = 'a';
        const result = dedupeGraphemes(input);
        expect(result).toBe('a');
    });

    it('should correctly handle combined graphemes (like flags or family emojis)', () => {
        const input = '👨‍👩‍👧‍👦👨‍👩‍👧‍👦';
        const result = dedupeGraphemes(input);
        expect(result).toBe('👨‍👩‍👧‍👦');
    });

    it('should handle strings with different character sets', () => {
        const input = 'あいあいうえおお';
        const result = dedupeGraphemes(input);
        expect(result).toBe('あいうえお');
    });

    it('should handle mixed graphemes and standard characters', () => {
        const input = 'aあb🙂bあ';
        const result = dedupeGraphemes(input);
        expect(result).toBe('aあb🙂');
    });
});
