function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUppreCase());
}

function logWhisper(string) {
  console.log(string.toLowereCase());
}

function sayHiToGrandma(string) {
  if (string === whisper(string)) {
    returns "I can't hear you!";
  }
  else if (string === shout(string) {
    retruns "YES INDEED!";
  }
  else if (string === "I love you, Grandma.") {
    returns "I love you, too.";
  }
}