(() => {
  const arr = [...array];
  console.time('origin');
  let i = arr.length - 1;
  while(i > 0) {
    for (let j = 0; j < i; j++) {
      let before = arr[j];
      let after = arr[j + 1];
      if ( before > after) {
        arr[j + 1] = before;
        arr[j] = after;
      }
    }
    i--;
  }
  console.timeEnd('origin');
})();

(() => {
  const arr = [...array];
  console.time('optimize');
  let i = arr.length - 1;
  while(i > 0) {
    let pos = 0;
    for (let j = 0; j < i; j++) {
      let before = arr[j];
      let after = arr[j + 1];
      if ( before > after) {
        pos = j;
        arr[j + 1] = before;
        arr[j] = after;
      }
    }
    i = pos;
  }
  console.timeEnd('optimize');
})();