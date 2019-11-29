'use strict'

function type_check_v1(input, type) {
    if (input === null) return type === "null";
    if (Array.isArray(input)) return type === "array";
    return typeof input === type;
}

function type_check_v2(input, conf = {type: "", value: "", enum: []}) {
    if (Object.prototype.hasOwnProperty.call(conf, "type") && !type_check_v1(input, conf.type))
        return false;
    if (Object.prototype.hasOwnProperty.call(conf, "value") && JSON.stringify(input) !== JSON.stringify(conf.value))
        return false;
    return !(Object.prototype.hasOwnProperty.call(conf, "enum") && !conf.enum.includes(input))
}

function type_check(input, conf = {type: "", properties: {}, value: "", enum: []}) {
    if (Object.prototype.hasOwnProperty.call(conf, "type") && type_check_v1(input, conf.type)) {
        if (Object.prototype.hasOwnProperty.call(conf, "properties")) {
            for (let propName in conf.properties) {
                return type_check(input[propName], conf.properties[propName])
            }
        }
        return type_check_v2(input, conf)
    }
    return false;
}

let conf = {
    type: "object",
    properties: {
        prop1: {
          type: "number"
        },
        prop2: {
          type: "string",
          enum: ["val1", "val2"]
        },
        prop3: {
          type: "object",
          properties: {
            prop31: "number"
          },
        },
        prop4: {
          type: "array",
          properties: ["boolean"]
        },
    },
}

let input = {
  prop1: 3,
  prop2: "val1",
  prop3: {
    prop31: 4
  },
  prop4: [true, false, false, true],
}

console.log(type_check(input, conf));