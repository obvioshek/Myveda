// Every unit on the site, in order. To add one, create units/unit-N with an
// index.ts like unit-1's (chapters.json, glossary.json, lessons/) and list it
// here. Chapter slugs and glossary ids must be unique across all units; the
// build checks this, and that every lesson matches its chapter.

import type { UnitSource } from "../types";
import unit1 from "./unit-1";
import unit2 from "./unit-2";

export const UNIT_SOURCES: UnitSource[] = [unit1, unit2];
