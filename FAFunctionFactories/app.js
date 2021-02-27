function makeGreeting(language) {


  return function(firstname, lastname) {
    if (language === 'en') {
      console.log('Hello ' + firstname + ' ' + lastname)
    }

    if (language === 'es') {
      console.log('Hola ' + firstname + ' ' + lastname)
    }
  }
}

const greetEnglish = makeGreeting('en');
const greetSpanish = makeGreeting('es');

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');
