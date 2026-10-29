const handEvaluation = (listOfHands) => {
    
    let nombreDe2 = 0;

    for (const [valeur] of listOfHands) {
        if (valeur === 2) {
            nombreDe2++;
        }
    }

    if (nombreDe2 === 4) {
        return 60;
    }

    return 30;

}



module.exports = { handEvaluation };