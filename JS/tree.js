function showPlantation(city){
    document.querySelectorAll('.cards-container').forEach(e1 => 
        e1.classList.remove('active'));
        document.getElementById(city).classList.add('active');

    document.querySelectorAll('.city-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}