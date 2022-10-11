export const generateKeys = () => {
    const { first, second } = getRandomIntNumbers()
    const product = first * second;
    const eulerFunction = (first - 1) * (second - 1);
    const { exponent, functionResult } = calculatePrivateKeyCoefficients(eulerFunction);

    return { exponent, product, functionResult };
}

export const getRandomIntNumbers = () => {
    const first = Math.round(Math.random() * (1_000_000 - 100_000) + 100_000);

    const min = first - Math.round(Math.random() * (10 - 1) + 1);
    const max = first + Math.round(Math.random() * (10 - 1) + 1);

    const second = Math.round(Math.random() * (max - min) + min);
    return { first, second };
}

export const calculatePrivateKeyCoefficients = (eulerFunction) => {
    let coefficient, exponent, functionResult;

    do {
        coefficient = Math.round(Math.random() * (1000 - 10_000) + 10_000);
        exponent = Math.round(Math.random() * (1000 - 10_000) + 10_000);
        functionResult = (coefficient * eulerFunction + 1) / exponent;
    } while (!Number.isInteger(functionResult));

    return { coefficient, exponent, functionResult };
}
