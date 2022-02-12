const avatarGen = () => {
    const hexBase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hexBase[Math.floor(Math.random() * hexBase.length)];
        if (hexColor.length === 7) {
            return hexColor
        }
    }
}

export default avatarGen