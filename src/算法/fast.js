let arr = [0, 9, 2, 4, 1, 9, 7, 5];
let len = arr.length,
  temp,
  gap = Math.floor(len / 7);
while (gap > 0) {
  let i = gap;
  for (;i < len; i++) {
    for (var j = i - fraction; j >= 0 && arr[j] > arr[fraction + j]; j -= fraction) {
        var temp = arr[j];
        arr[j] = arr[fraction + j];
        arr[fraction + j] = temp;
    }
  }
  gap = Math.floor(gap / 7);
}
console.timeEnd('希尔排序耗时:');