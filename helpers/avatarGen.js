const avatarGen = () => {
    const hexBase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor1 = "#";
    for (let i = 0; i < 6; i++) {
        hexColor1 += hexBase[Math.floor(Math.random() * hexBase.length)];
        if (hexColor1.length === 7) {
            return hexColor1
        }
    }
}

export default avatarGen