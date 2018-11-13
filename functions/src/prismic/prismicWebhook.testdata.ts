import {PrismicHook} from "../types/PrismicHook";

export const masterUpdateHook: PrismicHook = {
    "type": "api-update",
    "masterRef": "W-qJMhEAABgUzGh5",
    "releases": {
        "update": [
            {
                "id": "W9qx2xIAAC0AbRlz",
                "ref": "W9rCHhIAADgAbWQD~W-qJMhEAABgUzGh5",
                "label": "Staging"
            }
        ]
    },
    "bookmarks": {},
    "collection": {},
    "tags": {},
    "domain": "grapql-testing",
    "apiUrl": "https://grapql-testing.prismic.io/api",
    "secret": null
};

export const updateStagingHook: PrismicHook = {
  "type": "api-update",
  "releases": {
    "update": [
      {
        "id": "W9qx2xIAAC0AbRlz",
        "ref": "W-qL7REAADwAzHSA~W-qJMhEAABgUzGh5",
        "label": "Staging"
      }
    ]
  },
  "bookmarks": {},
  "collection": {},
  "tags": {},
  "domain": "grapql-testing",
  "apiUrl": "https://grapql-testing.prismic.io/api",
  "secret": null
};

export const newReleaseHook: PrismicHook = {
  "type": "api-update",
  "releases": {
    "addition": [
      {
        "id": "W-qMZxEAANQFzHag",
        "ref": "W-qMZxEAADYAzHah~W-qJMhEAABgUzGh5",
        "label": "New Release"
      }
    ]
  },
  "bookmarks": {},
  "collection": {},
  "tags": {},
  "domain": "grapql-testing",
  "apiUrl": "https://grapql-testing.prismic.io/api",
  "secret": null
};
