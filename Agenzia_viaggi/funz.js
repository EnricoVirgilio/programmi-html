const CalcolaPreventivo = () => {
    const quota_fissa = 35;
    const spesa_kilometro = 0.57;
    let numero_kilometri = 0;
    let numero_partecipanti = 0;
    let quota_kilometri = 0;
    const q_30 = 12;
    const q_31_40 = 9;
    const q_41 = 410;
    
    numero_kilometri = prompt("inserisci numero totale kilometri", 0);
    numero_partecipanti = prompt("inserisci numero partecipanti", 0);
    quota_kilometri = spesa_kilometro*numero_kilometri;

    if(numero_partecipanti <= 30){
        let preventivo_totale = quota_fissa + quota_kilometri + numero_partecipanti*q_30;
        alert(`il preventivo totale e' di ${preventivo_totale}`);
    }

    else if(numero_partecipanti <=40){
        let preventivo_totale = quota_fissa + quota_kilometri + numero_partecipanti*q_31_40;
        alert(`il preventivo totale e' di ${preventivo_totale}`);
    }

    else{
        let preventivo_totale = quota_fissa + quota_kilometri + q_41;
        alert(`il preventivo totale e' di ${preventivo_totale}`);
    }
}