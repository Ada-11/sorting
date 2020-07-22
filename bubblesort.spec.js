describe('Bubble Sort', function () {
  it('returns an array', function () {
    const result = bubbleSort([4, 6, 2, 3]);

    expect(typeof result).toEqual('array');
  });

  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles an array with one element', function () {
    expect(bubbleSort([4])).toEqual([4]);
  });

  it('handles an array with multiple elements', function () {
    expect(bubbleSort([10, 6, 20, 23, 11, 5, 2, 31])).toEqual([2, 5, 6, 10, 11, 20, 23, 31]);
  });
});