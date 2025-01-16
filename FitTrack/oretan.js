document.getElementById("calorieForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Ambil data dari input
    const weight = parseFloat(document.getElementById("weight").value);
    const activityMET = parseFloat(document.getElementById("activity").value);
    const duration = parseFloat(document.getElementById("duration").value);
  
    // Perhitungan kalori yang terbakar
    const caloriesBurned = (activityMET * weight * 3.5 * duration) / 200;
  
    // Konversi kalori ke energi (Joule)
    const energy = caloriesBurned * 4.184;
  
    // Tampilkan hasil
    document.getElementById("caloriesBurned").textContent = `Kalori yang terbakar: ${caloriesBurned.toFixed(2)} kkal`;
    document.getElementById("energy").textContent = `Energi yang dikeluarkan: ${energy.toFixed(2)} Joule`;
  });
  