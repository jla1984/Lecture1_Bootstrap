document.getElementById('madLibForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const city = document.getElementById('city').value;
    const adjective = document.getElementById('adjective').value;
    const animal = document.getElementById('animal').value;
    const name = document.getElementById('name').value;
    const food = document.getElementById('food').value;
    const noun = document.getElementById('noun').value;
    const plural = document.getElementById('plural').value;
    const plural2 = document.getElementById('plural2').value; 
    const adjective2 = document.getElementById('adjective2').value;
    const occupation = document.getElementById('occupation').value;
    const adjective3 = document.getElementById('adjective3').value;
    const plural3 = document.getElementById('plural3').value;  
    const creature = document.getElementById('creature').value; 
    const adjective4 = document.getElementById('adjective4').value; 

    // Update Mad Lib output
    document.getElementById('outputCity').textContent = city;
    document.getElementById('outputAdjective').textContent = adjective;
    document.getElementById('outputAnimal').textContent = animal;
    document.getElementById('outputName').textContent = name;
    document.getElementById('outputFood').textContent = food;
    document.getElementById('outputNoun').textContent = noun;
    document.getElementById('outputPlural').textContent = plural;
    document.getElementById('outputPlural2').textContent = plural2;
    document.getElementById('outputAdjective2').textContent = adjective2;
    document.getElementById('outputOccupation').textContent = occupation;
    document.getElementById('outputAdjective3').textContent = adjective3;
    document.getElementById('outputPlural3').textContent = plural3;  
    document.getElementById('outputCreature').textContent = creature;
    document.getElementById('outputAdjective4').textContent = adjective4;       

    // Show Mad Lib output
    document.getElementById('madLibOutput').classList.remove('hidden');
});
