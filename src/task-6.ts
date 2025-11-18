function getFirstElement<T>(arr: T[]): T {
    if (arr.length === 0) {
        throw new Error("Порожній массив");
    }
    return arr[0];
}

getFirstElement<number>([1, 2, 3]);           // 1
getFirstElement<string>(["a", "b", "c"]);     // "a"
getFirstElement<boolean>([true, false, true]); // true


