Archivo (Omnibus-Type), Tiro Devanagari Sanskrit (Indian Type Foundry) and
Noto Sans Devanagari (Google) are licensed under the SIL Open Font License 1.1
— https://openfontlicense.org. All three are from Google Fonts. These are the
WOFF2 subsets the site uses: Archivo everywhere (the learning pages and the
community), Tiro Devanagari Sanskrit for original-language passages and chapter
numerals, and Noto Sans Devanagari (the variable Devanagari subset, weights
100 to 900, from `@fontsource-variable/noto-sans-devanagari` 5.3.0) for the
Hindi edition.

`tiro-devanagari-digits.woff2` is a further subset of `tiro-devanagari.woff2`
holding only the Devanagari digits and dandas (U+0964–096F), made with
fonttools' `pyftsubset`, so pages that show only chapter numerals don't load
the whole script. Files here are served with a one-year cache, so a changed
font must get a new file name.
