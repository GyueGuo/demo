(() => {
  var arr = [...array];
  console.time('origin');
  var length = arr.length;
  let i = 0;
  const limit = length - 1;
  while (i < limit) {
    let minIndex = i;
    let j = i + 1;
    for (;j < length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    const tmp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = tmp;
    i++;
  }
  console.timeEnd('origin');
  console.log(arr);
})();