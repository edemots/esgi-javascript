"use strict";

function ucfirst(input) {
  if (typeof input !== 'string') return "";
  return input.toLowerCase().charAt(0).toUpperCase() + input.slice(1);
}

function capitalize(input, splitter = /[\s]/gi, separator = " ") {
  if (typeof input !== 'string') return "";
  let words = input.split(splitter);
  console.log(words);
  words = words.map(word => ucfirst(word.toLowerCase()));
  return words.join(separator);
}

function camelCase(input) {
  if (typeof input !== 'string') return "";
  return capitalize(input, /[^a-zA-Z0-9]/gi, "");
}

console.log(camelCase("ToggleCase is_the coolest"));

function snake_case(input) {
  if (typeof input !== 'string') return "";
  return input.toLowerCase().replace(/[^\w]/gi, "_");
}

function leet(input) {
  if (typeof input !== 'string') return "";
  return input.replace(/[aeiouy]/gi, (match) => {
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

function verlan(input) {
  if (typeof input !== 'string') return "";
  return input
    .split(" ")
    .map(word => word
      .split("")
      .reverse()
      .join(""))
    .join(" ");
}

function yoda(input) {
  if (typeof input !== 'string') return "";
  return input
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

function vig(input, key) {
  if (typeof input !== 'string') return "";
  let index = 0;
  return input.toLowerCase().split("").map((char) => {
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
