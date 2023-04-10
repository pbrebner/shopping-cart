// Utility functions for Shopping Cart

function priceAddZero(price) {
    const arr = price.split(".");
    if (arr[1].length === 1) {
        arr[1] = arr[1] + "0";
    }

    console.log(arr);

    return arr[0] + "." + arr[1];
}

export { priceAddZero };
