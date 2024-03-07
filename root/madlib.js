document.getElementById('madLibForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const noun = document.getElementById('noun').value;
    const verb = document.getElementById('verb').value;
    const adjective = document.getElementById('adjective').value;
    const adverb = document.getElementById('adverb').value;

    // Update Mad Lib output
    document.getElementById('outputNoun').textContent = noun;
    document.getElementById('outputVerb').textContent = verb;
    document.getElementById('outputAdjective').textContent = adjective;
    document.getElementById('outputAdverb').textContent = adverb;

    // Show Mad Lib output
    document.getElementById('madLibOutput').classList.remove('hidden');
});
