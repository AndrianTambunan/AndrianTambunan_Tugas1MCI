const displayMessage = function() {
  console.log("Saya Calon Admin MCI");
  // instant print "Saya Calon Admin MCI"
  setTimeout(function() {
    const nama = "Andrian Tambunan";
    console.log(nama);
  }, 3000);
  // print "Andrian Tambunan" setelah delay 3000 milidetik
};

displayMessage();
// panggil fungsi