'use strict'

function type_check_v1 (input, type) {
  if (input === null) return type === "null";
  if (Array.isArray(input)) return type === "array";
  return typeof input === type;
}
