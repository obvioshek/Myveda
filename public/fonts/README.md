Caprasimo (Jacques Le Bailly), Figtree (Erik Kennedy), Archivo (Omnibus-Type)
and Tiro Devanagari Sanskrit (Indian Type Foundry) are licensed under the
SIL Open Font License 1.1 — https://openfontlicense.org. All four are from
Google Fonts. These are the WOFF2 subsets the site uses: Caprasimo and Figtree
for the product, Archivo and Tiro Devanagari Sanskrit for the landing page.

`tiro-devanagari-digits.woff2` is a further subset of `tiro-devanagari.woff2`
holding only the Devanagari digits and dandas (U+0964–096F), made with
fonttools' `pyftsubset`, so pages that show only chapter numerals don't load
the whole script. Files here are served with a one-year cache, so a changed
font must get a new file name.
