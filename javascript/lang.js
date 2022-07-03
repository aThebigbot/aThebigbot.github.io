window.onload = function() {
    const url = new URL(window.location.href);
    
    switch (url.searchParams.get('lang')) {
        case 'en':
            document.querySelector("h1").innerHTML =
              "Hello! I'm Thebigbot a simply Italian developer.";
        break;

        case 'it':
            document.querySelector("h1").innerHTML =
                "Ciao! Sono Thebigbot un semplice sviluppatore italiano.";
        break;

        case 'de':
            document.querySelector("h1").innerHTML =
              "Hallo! Ich bin Thebigbot ein einfacher deutscher Italienisch.";
        break;

        case 'fr':
            document.querySelector("h1").innerHTML =
              "Bonjour! Je suis Thebigbot un simple développeur italien.";
        break;
        
        default:
            document.querySelector("h1").innerHTML =
                "Hello! I'm Thebigbot a simply Italian developer.";
        break;
    }
}