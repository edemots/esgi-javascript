"use strict";

function type_check_v1(entry, type) {
  switch (type) {
    case "null":
      return entry === null;
    case "array":
      return entry.constructor === Array
    default:
      return typeof entry === type.toLowerCase();
  }
}
