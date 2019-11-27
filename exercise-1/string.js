"use strict";

function ucfirst(entry) {
  return entry.charAt(0).toUpperCase() + entry.slice(1);
}

function capitalize(entry, separator = " ") {
  return () => {
    let words = entry.split(/[\s_-]/);
    words.map(word => ucfirst(word));
    return words.join(separator);
  };
}

function camelCase(entry) {
  if (typeof entry !== 'string') return '';
  return capitalize(entry, "");
}

function snake_case(entry) {
  return entry.toLowerCase().replace(/\s/gi, "_");
}

function leet(entry) {
  const leet = {
    'A': '4',
    'E': '3',
    'I': '1',
    'O': '0',
    'U': '(_)',
    'Y': '7',
  };

  entry.replace(/[AEIOUY]/gi, (match) => {
    return leet[match];
  })
}

function prop_access(object, path = null) {
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
  return entry
    .split(" ")
    .map(word => word
      .split("")
      .reverse()
      .join(""))
    .join(" ");
}

function yoda(entry) {
  return entry
    .split(" ")
    .reverse()
    .join(" ");
}

function vig(entry) {

}
