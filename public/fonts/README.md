Archivo (Omnibus-Type) and Tiro Devanagari Sanskrit (Indian Type Foundry) are
licensed under the SIL Open Font License 1.1 — https://openfontlicense.org.
Both are from Google Fonts. These are the WOFF2 subsets the site uses: Archivo
everywhere (the learning pages and the community), Tiro Devanagari Sanskrit for
original-language passages and chapter numerals.

`tiro-devanagari-digits.woff2` is a further subset of `tiro-devanagari.woff2`
holding only the Devanagari digits and dandas (U+0964–096F), made with
fonttools' `pyftsubset`, so pages that show only chapter numerals don't load
the whole script. Files here are served with a one-year cache, so a changed
font must get a new file name.
