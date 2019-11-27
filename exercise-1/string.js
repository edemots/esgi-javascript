"use strict";

function ucfirst(entry) {
  if (typeof entry !== 'string') return "";
  return entry.toLowerCase().charAt(0).toUpperCase() + entry.slice(1);
}

function capitalize(entry, splitter = /[\s]/, separator = " ") {
  if (typeof entry !== 'string') return "";
  let words = entry.split(splitter);
  words = words.map(word => ucfirst(word.toLowerCase()));
  return words.join(separator);
}

function camelCase(entry) {
  if (typeof entry !== 'string') return "";
  return capitalize(entry, /[^\w]/, "");
}

function snake_case(entry) {
  if (typeof entry !== 'string') return "";
  return entry.toLowerCase().replace(/[^\w]/gi, "_");
}

function leet(entry) {
  if (typeof entry !== 'string') return "";
  return entry.replace(/[aeiouy]/gi, (match) => {
    const leet = {
      'a': 4,
      'e': 3,
      'i': 1,
      'o': 0,
      'u': '(_)',
      'y': 7,
    };
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

function caesar(index, offset) {
  return (index + offset) % 26 + 'a'.charCodeAt(0);
}

function getAlphabetIndex(char) {
  return char.charCodeAt(0) - 'a'.charCodeAt(0);
}

function vig(entry, key) {
  if (typeof entry !== 'string') return "";
  let index = 0;
  return entry.toLowerCase().split("").map((char) => {
    if (/[a-z]/.test(char)) {
      const ceasarASCIICode = caesar(
        getAlphabetIndex(char),
        getAlphabetIndex(key[index % key.length])
      );
      index++;
      return String.fromCharCode(ceasarASCIICode);
    }
    return char;
  }).join("");
}
