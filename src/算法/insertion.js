(() => {
  var arr = [1, 0, 9, 8, 6, 5, 1];
  console.time('origin');
  var length = arr.length;
  let i = 1;
  while (i < length) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
    i++;
  }
  console.timeEnd('origin');
})();