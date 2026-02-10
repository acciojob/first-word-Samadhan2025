function firstWord(s) {
  // your code hereif (str.length === 0) return "";

  // remove leading spaces
  s = s.trimStart();

  const spaceIndex = s.indexOf(" ");

  if (spaceIndex === -1) {
    return s;
  }

  return s.slice(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
