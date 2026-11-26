/* ============================================================
   NAME GENERATOR ENGINE — YOU SHOULD NOT NEED TO EDIT THIS FILE.
   To change names, edit names.js.
   To change colony blocs, edit colonies.js.
   ============================================================ */

function pick(list) {
    return list[Math.floor(Math.random() * list.length)];
}

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
        if (result < 0) return culture;
    }
    return entries[entries.length - 1][0];
}

// Keep a snapshot of the last generated record, even if the dropdown changes.
let currentResult = null;

function generateName() {
    const colony = document.getElementById("colonySelect").value;
    const weights = COLONY_BLOCS[colony];
    const valid = weights && Object.entries(weights).every(
        ([culture, weight]) =>
            Number.isFinite(weight) && weight >= 0 &&
            (weight === 0 || Object.hasOwn(NAME_LISTS, culture))
    );
    if (!valid || !Object.values(weights).some(w => w > 0)) {
        alert("Check the cultural identifiers and weights in colonies.js.");
        return;
    }

    // Original four-roll system: unchanged.
    const list1 = roll(weights);
    let list2 = roll(weights);
    const list3 = roll(weights);
    const list4 = roll(weights);
    if (list3 === list1 || list4 === list1) list2 = list1;

    const givenData = NAME_LISTS[list1];
    const surnameData = NAME_LISTS[list2];
    const maleName = pick(givenData.male);
    const femaleName = pick(givenData.female);
    const surname = pick(surnameData.surname);
    const surnameFirst = surnameData.surnameFirst;
    const appearsAsMale = surnameFirst ? `${surname} ${maleName}` : `${maleName} ${surname}`;
    const appearsAsFemale = surnameFirst ? `${surname} ${femaleName}` : `${femaleName} ${surname}`;

    currentResult = {
        outColony: colony,
        outMale: maleName,
        outFemale: femaleName,
        outSurname: surname,
        outAppears: `${appearsAsMale} / ${appearsAsFemale}`,
        outGivenOrigin: givenData.label,
        outSurnameOrigin: surnameData.label
    };
    for (const [id, value] of Object.entries(currentResult)) {
        document.getElementById(id).textContent = value;
    }
    document.getElementById("emptyState").style.display = "none";
    document.getElementById("resultRows").style.display = "block";
    document.getElementById("copyStatus").textContent = "";
    document.getElementById("manualCopy").hidden = true;
    document.getElementById("manualCopy").value = "";
}

// Copy the complete record as plain text, using the original generated colony.
async function copyResult() {
    if (!currentResult) return;
    const r = currentResult;
    const text = [
        `Colony bloc of origin: ${r.outColony}`,
        `Male: ${r.outMale}`,
        `Female: ${r.outFemale}`,
        `Surname: ${r.outSurname}`,
        `Appears as: ${r.outAppears}`,
        `Given origin: ${r.outGivenOrigin}`,
        `Surname origin: ${r.outSurnameOrigin}`
    ].join("\n");
    const status = document.getElementById("copyStatus");
    const manual = document.getElementById("manualCopy");
    try {
        await navigator.clipboard.writeText(text);
        if (currentResult !== r) return;
        manual.hidden = true;
        status.textContent = "Copied to clipboard!";
    } catch (error) {
        if (currentResult !== r) return;
        // Manual fallback if the browser blocks clipboard access.
        manual.value = text;
        manual.hidden = false;
        manual.focus();
        manual.select();
        status.textContent = "Press Ctrl+C (or Cmd+C on Mac) to copy the selected text.";
    }
}

function initializeGenerator() {
    const dropdown = document.getElementById("colonySelect");
    dropdown.replaceChildren();
    for (const colony of Object.keys(COLONY_BLOCS)) {
        const option = document.createElement("option");
        option.value = colony;
        option.textContent = colony;
        dropdown.appendChild(option);
    }
    document.getElementById("generate").addEventListener("click", generateName);
    document.getElementById("copyResult").addEventListener("click", copyResult);
}

document.addEventListener("DOMContentLoaded", initializeGenerator);
