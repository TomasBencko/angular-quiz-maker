
export function compareByName(a: { name: string }, b: { name: string }) {
  if (a.name > b.name) return 1;
  else if (a.name < b.name) return -1;
  else return 0;
}


/**
 * Fisher-Yates Shuffle Algorithm
 *
 * Credit: Mike Bostock (January 14, 2012)
 * Source: https://bost.ocks.org/mike/shuffle/
 */
export function shuffle(array: Array<string>) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
