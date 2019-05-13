function getNonRepeatingRndIntegers (min, max) {
    var rand = [];
    for (let i = 0; i <= (max - min); i++) {
        rand[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    for (let i = 0; i <= (max - min); i++) {
        for (let j = 0; j <= (max - min); j++) {
            if (i != j) {
                if (rand[i] === rand[j]) {
                    rand[j] = max + 1;
                }
            }
        }
    }

    for (let i = 0; i <= (max - min); i++) {
        if (rand[i] === (max + 1)) {
            rand[i]--;
    
            for (let k = 0; k <= (max - min); k++) {
                if (k != i) {
                    if (rand[i] === rand[k]) {
                        rand[i]--;
                        k = -1;
                    }
                }
            }
        }
    }
    return rand;
}