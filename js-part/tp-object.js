const email = "test.test@email.com";

// Toutes les questions nécessitent d'aller récupérer l'objet depuis cette fonction
function getObject() {
  return {
    name: "Mon objet",
    description: "Un très bel objet JS",
    value: 7,
    isBestObject: false,
    address: {
      city: "Paris",
      zipCode: 75000,
    },
  };
}

module.exports = {
  // 1) Renvoyer la propriété description
  Q1() {
    return getObject().description;
  },

  // 2) Renvoyer la propriété city
  Q2() {
    return getObject().address.city;
  },

  // 3) Renvoyer les clés de l'objet sous forme de tableau
  Q3() {
    return Object.keys(getObject())
  },

  // 4) --- Supprimée ---

  // 5) Ajouter la propriété email à myObject et renvoyer l'objet modifié
  Q5() {
    let obj = getObject();
    obj.email = "test.test@email.com"
    return obj;
  },

  // 6) Ajouter une propriété dynamique étant le résultat de la concaténation des chaines hello et world et dont la valeur est true
  // renvoyer l'objet modifié
  Q6() {
    let obj = getObject();
    obj['Hello'+'World'] = true;
    return obj
  },

  // 7) Supprimer la propriété isBestObject et renvoyer l'objet
  Q7() {
    let obj = getObject();
    delete obj.isBestObject;
    return obj;
  },

  // 8) Vérifier que la propriété description existe dans l'objet, renvoyer un booléen
  Q8() {
    return Object.keys(getObject()).includes("description");
  },
};