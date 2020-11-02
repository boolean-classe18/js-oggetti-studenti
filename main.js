// Creare un oggetto che descriva uno studente con le seguenti proprietà:
// nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere
// un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

$(document).ready(function() {

    // oggetto studente
    var studente = {
        'nome': 'Mario',
        'cognome': 'Rossi',
        'eta': 30
    };

    // console.log(studente.nome);
    // var chiave = 'nome';
    // console.log(studente[chiave]);

    for (var chiave in studente) {
        console.log(chiave + ': ' + studente[chiave]);
    }

    // array di oggetti studenti
    var studenti = [
        {
            'nome': 'Mario',
            'cognome': 'Rossi',
            'eta': 30
        },
        {
            'nome': 'Luigi',
            'cognome': 'Verdi',
            'eta': 34
        },
        {
            'nome': 'Lucia',
            'cognome': 'Neri',
            'eta': 19
        }
    ];

    console.log(studenti);

    // ciclo tutti gli studenti
    for (var i = 0; i < studenti.length; i++) {
        // ogni elemento è un oggetto
        var studente_corrente = studenti[i];
        // stampo il nome e il cognome dello studente corrente
        console.log(studente_corrente.nome + ' ' + studente_corrente.cognome);
    }

    // chiedo i dati all'utente
    var nome_inserito = chiedi_nome();
    var cognome_inserito = chiedi_cognome()
    var eta_inserita = chiedi_eta();

    // creo un nuovo oggetto con i dati inseriti dall'utente
    var nuovo_studente = {
        'nome': nome_inserito,
        'cognome': cognome_inserito,
        'eta': eta_inserita
    };

    // alternativa
    // var nuovo_studente = {};
    // nuovo_studente.nome = nome_inserito;
    // nuovo_studente.cognome = cognome_inserito;
    // nuovo_studente.eta = eta_inserita;

    // console.log(nuovo_studente);

    // aggiungo il nuovo studente all'array degli studenti
    studenti.push(nuovo_studente);

    console.log(studenti);

    // ciclo tutti gli studenti
    for (var i = 0; i < studenti.length; i++) {
        // lo studente corrente è un oggetto
        var studente_corrente = studenti[i];
        // per ogni studente, stampo il nome e il cognome in un list item
        $('#lista-studenti').append('<li>' + studente_corrente.nome + ' ' + studente_corrente.cognome + '</li>');
    }

});

// funzione che chiede un nome all'utente e restituisce l'input inserito
function chiedi_nome() {
    do {
        var nome = prompt("Inserisci il nome dello studente");
        // continuo a chiedere un nome all'utente finché è più corto di 3 caratteri
    } while(nome.length < 3);
    return nome;
}

// funzione che chiede un cognome all'utente e restituisce l'input inserito
function chiedi_cognome() {
    do {
        var cognome = prompt("Inserisci il cognome dello studente");
        // continuo a chiedere un cognome all'utente finché è più corto di 3 caratteri
    } while(cognome.length < 3);
    return cognome;
}

// funzione che chiede un'età all'utente e restituisce l'input inserito
function chiedi_eta() {
    do {
        var eta = parseInt(prompt("Inserisci l'età dello studente"));
        // continuo a chiedere un'età all'utente finché è minore di 0 o maggiore di 115
    } while(eta < 0 || eta > 115);
    return eta;
}
