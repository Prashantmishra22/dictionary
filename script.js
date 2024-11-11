// Show different sections based on navigation
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.remove('hidden');
    document.getElementById(sectionId).classList.add('active');
}

// Dictionary API search functionality
async function searchWord() {
    const word = document.getElementById("search-box").value;
    const resultDiv = document.getElementById("result");

    if (!word) {
        resultDiv.innerHTML = "<p>Please enter a word to search.</p>";
        return;
    }

    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();

        if (data.title === "No Definitions Found") {
            resultDiv.innerHTML = `<p>No definition found for "<b>${word}</b>".</p>`;
        } else {
            const meaning = data[0].meanings[0].definitions[0].definition;
            resultDiv.innerHTML = `<p><strong>${word}:</strong> ${meaning}</p>`;
        }
    } catch (error) {
        resultDiv.innerHTML = "<p>An error occurred while fetching the data.</p>";
    }
}

// Show the dictionary section by default
document.addEventListener("DOMContentLoaded", () => showSection('dictionary'));
