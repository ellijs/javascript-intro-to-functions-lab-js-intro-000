function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowereCase());
}

function sayHiToGrandma(string) {
  if (string === whisper(string)) {
    console.log ("I can't hear you!");
  }
  else if (string === shout(string)) {
    console.log("YES INDEED!");
  }
  else if (string === "I love you, Grandma.") {
    console.log("I love you, too.");
  }
}
