function fibonacci(position) {
    const arr = [0, 1];
    for (i = 2; i <= position; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[position];
}
