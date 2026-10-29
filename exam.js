const handEvaluation = (listOfHands) => {
    let result = 0;

    for (const hand of listOfHands) {
        let numberOf2 = 0;

        for (const [value] of hand) {
            if (value === 2) {
                numberOf2++;
            }
        }

        if (numberOf2 === 4) {
            result += 60;
        } else if (numberOf2 === 3) {
            result += 30;
        }
    }

    return result;
};


module.exports = { handEvaluation };