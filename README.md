##GENERAL INFO

Per autenticarsi basta inserire un qualunque indirizzo mail e password
La schermata principale contiene:

- Il pulsante di logout che inizializza tutto lo store interno
- Un pulsante per aggiungere un nuovo post che mostra un form per l'inserimento di un post con titolo e corpo obbligatori
- Una lista di utenti animata e ordinata per numero totale di post inseriti da ogni utente
- Le informazioni relative all'utente random loggato in quel momento
- Quando un utente entra nelle prime 3 posizioni viene visualizzata una notifica a schermo che scompare dopo 4 secondi
- Quando un utente arriva in prima posizione la card principale si compie un movimento di shake  

Ho implementato una funzione che ogni 2 secondi inserisce un nuovo post di un utente random per simulare il backend e rendere più animato il mockup.

L'applicazione è pensata per essere responsive.

Per il salvataggio dei dati ho utilizzato il management store di akita "https://opensource.salesforce.com/akita/"