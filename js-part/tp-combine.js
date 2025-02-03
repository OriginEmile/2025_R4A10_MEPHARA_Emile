// Toutes les questions doivent faire appel à cette fonction
// Chaque question est indépendante, et se base sur ce tableau initial
function getEmployees() {
    return [
        {name: "Thomas", age: "30"},
        {name: "Theo", age: "25"},
        {name: "Philippe", age: "45"},
        {name: "Jeremy", age: "28"},
        {name: "Minnie", age: "50"},
    ];
}

module.exports = {
    // 1) Renvoyer un nouveau tableau qui ne garde que les personnes dont le nom se termine par un "e"
    B1() {
        let arr = []
        for (const element of getEmployees()) {
            if (element.name.endsWith("e")) {
                arr.push(element);
            }
        }
        return arr
    },

    // 2) Trouver la première personne dont l'âge est inférieur à 30
    B2() {
        for (const element of getEmployees()) {
            if (element.age < 30) {
                return element;
            }
        }
    },

    // 3) Renvoyer l'index où se trouve "Jeremy"
    B3() {
        for (let i = 0; i < getEmployees().length; i++) {
            if (getEmployees()[i].name === "Jeremy") {
                return i
            }
        }
    },

    // 4) Trier le tableau par âge des personnes
    B4() {
        return getEmployees().sort((x, y) => parseInt(x.age) - parseInt(y.age))
    },

    // 5) Ajouter Kasimu à la fin du tableau, il a 38 ans, et renvoyer le tableau modifié
    B5() {
        let arr = getEmployees()
        arr.push({name: "Kasimu", age: 38})
        return arr
    },

    // 6) Renvoyer la longueur du tableau
    B6() {
        return getEmployees().length
    },

    // 7) Remplacer le "o" de Theo par un "a", et renvoyer le tableau modifié
    B7() {
        let arr = getEmployees()
        for (let i = 0; i < getEmployees().length; i++) {
            if (arr[i].name === "Theo") {
                arr[i].name = arr[i].name.replace("o", "a")
            }
        }
        return arr
    },

    // 8) Renvoyer un tableau qui ne contient que les personnes ayant au moins un "e" dans leur nom
    B8() {
        return getEmployees().filter(element => element.name.includes("e"))
    },
};