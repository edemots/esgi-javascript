'use strict'

function type_check_v1 (entry, type) {
  if (entry === null) return type === null;
  if (Array.isArray(entry)) return type === "array";
  return typeof entry === type;
}
