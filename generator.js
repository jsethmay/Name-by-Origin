
/* ============================================================
   NAME GENERATOR ENGINE
   ============================================================

   YOU SHOULD NOT NEED TO EDIT THIS FILE.

   To add or change names, edit names.js.
   To add or change colony blocs, edit colonies.js.

   ============================================================ */

// Select a random item from a list.

function pick(list) {
    return list[Math.floor(Math.random() * list.length)];
}


// Select a cultural origin using the colony's weights.

function roll(weights) {

    const entries = Object.entries(weights).filter(
        ([culture, weight]) => weight > 0
    );

    const total = entries.reduce(
        (sum, [culture, weight]) => sum + weight, 0
    );

    let result = Math.random() * total;

    for (const [culture, weight] of entries) {
        result -= weight;

        if (result < 0) {
            return culture;
        }
    }

    return entries[entries.length - 1][0];
}


// Generate a name using the selected colony bloc.

function generateName() {

    const colony = document.getElementById("colonySelect").value;
    const weights = COLONY_BLOCS[colony];

    // Check that the colony has valid cultural weights.

    const valid = Object.entries(weights).every(
        ([culture, weight]) =>
            Number.isFinite(weight) &&
            weight >= 0 &&
            (weight === 0 || Object.hasOwn(NAME_LISTS, culture))
    );

    if (!valid || !Object.values(weights).some(w => w > 0)) {
        alert("Check the cultural identifiers and weights in colonies.js.");
        return;
    }

    // Original four-roll system.

    const list1 = roll(weights);
    let list2 = roll(weights);
    const list3 = roll(weights);
    const list4 = roll(weights);

    // Favor matching cultural origins.

    if (list3 === list1 || list4 === list1) {
        list2 = list1;
    }

    // Retrieve the appropriate name lists.

    const givenData = NAME_LISTS[list1];
    const surnameData = NAME_LISTS[list2];

    // Select individual names.

    const maleName = pick(givenData.male);
    const femaleName = pick(givenData.female);
    const surname = pick(surnameData.surname);

    // Apply the surname's cultural naming order.

    const surnameFirst = surnameData.surnameFirst;

    const appearsAsMale = surnameFirst
        ? `${surname} ${maleName}`
        : `${maleName} ${surname}`;

    const appearsAsFemale = surnameFirst
        ? `${surname} ${femaleName}`
        : `${femaleName} ${surname}`;

    // Display the results.

    document.getElementById("outMale").textContent = maleName;
    document.getElementById("outFemale").textContent = femaleName;
    document.getElementById("outSurname").textContent = surname;

    document.getElementById("outAppears").textContent =
        `${appearsAsMale} / ${appearsAsFemale}`;

    document.getElementById("outGivenOrigin").textContent =
        givenData.label;

    document.getElementById("outSurnameOrigin").textContent =
        surnameData.label;

    document.getElementById("emptyState").style.display = "none";
    document.getElementById("resultRows").style.display = "block";

}


// Automatically populate the colony selection menu.

function initializeGenerator() {

    const dropdown = document.getElementById("colonySelect");

    dropdown.replaceChildren();

    for (const colony of Object.keys(COLONY_BLOCS)) {

        const option = document.createElement("option");

        option.value = colony;
        option.textContent = colony;

        dropdown.appendChild(option);
    }

    document.getElementById("generate")
        .addEventListener("click", generateName);
}


// Initialize the generator when the webpage loads.

document.addEventListener("DOMContentLoaded", initializeGenerator);
