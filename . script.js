document.getElementById("formKontak").addEventListener("submit", function(e) {
  e.preventDefault();

  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;

  document.getElementById("hasil").innerHTML =
    "Terima kasih, " + nama + "! Pesan kamu sudah diterima 💕";
});
