"use strict";

function ucfirst(entry) {
  if (typeof entry !== 'string') return "";
  return entry.toLowerCase().charAt(0).toUpperCase() + entry.slice(1);
}

function capitalize(entry, separator = " ") {
  if (typeof entry !== 'string') return "";
  let words = entry.split(/[\s]/);
  words = words.map(word => ucfirst(word.toLowerCase()));
  return words.join(separator);
}

console.log(capitalize("_dipiscing Elit"));

function camelCase(entry) {
  if (typeof entry !== 'string') return "";
  return capitalize(entry, "");
}

function snake_case(entry) {
  if (typeof entry !== 'string') return "";
  return entry.toLowerCase().replace(/\s/gi, "_");
}

function leet(entry) {
  if (typeof entry !== 'string') return "";
  const leet = {
    'a': '4',
    'e': '3',
    'i': '1',
    'o': '0',
    'u': '(_)',
    'y': '7',
  };

  return entry.replace(/[aeiouy]/gi, (match) => {
    return leet[match.toLowerCase()];
  });
}

function prop_access(object, path = null) {
  if (object === null) {
    console.log(path + " not exist");
    return;
  }
  if (path === "" || path === null) return object;

  return path.split(".").reduce((prev, curr, arr) => {
    if (prev[curr] === undefined) {
      console.log(path + " not exist");
      return;
    }
    return prev[curr];
  }, object);
}

function verlan(entry) {
  if (typeof entry !== 'string') return "";
  return entry
    .split(" ")
    .map(word => word
      .split("")
      .reverse()
      .join(""))
    .join(" ");
}

function yoda(entry) {
  if (typeof entry !== 'string') return "";
  return entry
    .split(" ")
    .reverse()
    .join(" ");
}

function cesar(entry) {

}

function vig(entry, key) {

}
