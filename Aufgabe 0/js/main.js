function namengeben() {
    var name = prompt("Bitte Namen eingeben", "Max Mustermann");
    if (name != null) {
      document.getElementById("test").innerHTML =
      "Willkommen auf dieser Seite, " + name + "!";
      console.log("Willkommen auf dieser Seite, " + name + "!")
    }
  }