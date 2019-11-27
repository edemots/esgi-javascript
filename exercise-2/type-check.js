'use strict'

function type_check_v1(input, type) {
  if (input === null) return type === "null";
  if (Array.isArray(input)) return type === "array";
  return typeof input === type;
}

function type_check_v2(input, conf = {type: "", value: "", enum: []}) {
  if (Object.prototype.hasOwnProperty.call(conf, "type") && !type_check_v1(input, conf.type))
    return false;
  if (Object.prototype.hasOwnProperty.call(conf, "value") && input !== conf.value)
    return false;s
  return !(Object.prototype.hasOwnProperty.call(conf, "enum") && !conf.enum.includes(input));
}
