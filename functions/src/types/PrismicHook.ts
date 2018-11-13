// To parse this data:
//
//   import { Convert, PrismicHook } from "./file";
//
//   const prismicHook = Convert.toPrismicHook(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface PrismicHook {
    type?:       string;
    secret?:     string | null;
    masterRef?:  string;
    domain?:     string;
    apiUrl?:     string;
    releases?:   Releases;
    bookmarks?:  Bookmarks;
    collection?: Bookmarks;
    tags?:       Bookmarks;
}

export interface Bookmarks {
    addition?: BookmarksAddition[];
    update?:   Update[];
    deletion?: Deletion[];
}

export interface BookmarksAddition {
    id?:    string;
    label?: string;
}

export interface Deletion {
    id?: string;
}

export interface Update {
    id?:    string;
    docId?: string;
}

export interface Releases {
    addition?: Release[];
    update?:   Release[];
    deletion?: Release[];
}

export interface Release {
    id?:    string;
    ref?:   string;
    label?: string;
}
