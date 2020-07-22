const bubbleSort = (arr) => {
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const curr = arr[j];
      const next = arr[j + 1];

      if (next) {
        if (curr > next) {
          const temp = curr;
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }

  return arr;
}