function updateMessage_Input() {
            var selectedValue = document.getElementById("MessageType").value;
            var timeInput = document.getElementById("time").value;
            var minutes = document.getElementById("duration").value;
            var message;
            switch(selectedValue) {
            case "Canias":
                var message = "Guten Tag Jokeaner,\n\nheute um "+ timeInput + " muss Canias neugestartet werden."
                + "\nBitte speichern Sie vorher alles ab.\nDer Neustart dauert ca. " + minutes + " Minuten."
                + "\nDann sollte alles wieder wie gewohnt funktionieren."
                + "\n\nVielen Dank für Ihr Verständnis\nIhre Joke-IT";
                break;
            case "Internet":
                var message = "Guten Tag Jokeaner,\n\nheute um "+ timeInput + " muss das Internet neugestartet werden."
                + "\nBitte stellen Sie sich darauf ein.\nDer Neustart dauert ca. " + minutes + " Minuten."
                + "\nDann sollte alles wieder wie gewohnt funktionieren."
                + "\n\nVielen Dank für Ihr Verständnis\nIhre Joke-IT";
                break;
            case "Telefon":
                var message = "Guten Tag Jokeaner,\n\nheute um "+ timeInput + " muss die Telefonanlage neugestartet werden."
                + "\nBitte stellen Sie sich darauf ein.\nDer Neustart dauert ca. " + minutes + " Minuten."
                + "\nDann sollte alles wieder wie gewohnt funktionieren."
                + "\n\nVielen Dank für Ihr Verständnis\nIhre Joke-IT";
                break;
            }

             document.getElementById("message_input").value = message;

        }