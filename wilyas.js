function changeComune() {
    var wilayaSelect = document.getElementById("Wilaya");
    var comuneSelect = document.getElementById("comune");
    
    comuneSelect.innerHTML = '';
    
    var selectedWilaya = wilayaSelect.value;
    
    if (selectedWilaya === "اختر مدينتك") {
        

    } else if (selectedWilaya === "16. Alger") {
        addComuneOption(comuneSelect, "01", "Alger Centre");
        addComuneOption(comuneSelect, "02", "Sidi Mhamed");
        addComuneOption(comuneSelect, "03", "El Madania");
        addComuneOption(comuneSelect, "04", "Hamma Anassers");
        addComuneOption(comuneSelect, "05", "Bab El Oued");
        addComuneOption(comuneSelect, "06", "Bologhine Ibn Ziri");
        addComuneOption(comuneSelect, "07", "Casbah");
        addComuneOption(comuneSelect, "08", "Oued Koriche");
        addComuneOption(comuneSelect, "09", "Bir Mourad Rais");
        addComuneOption(comuneSelect, "10", "El Biar");
        addComuneOption(comuneSelect, "11", "Bouzareah");
        addComuneOption(comuneSelect, "12", "Birkhadem");
        addComuneOption(comuneSelect, "13", "El Harrach");
        addComuneOption(comuneSelect, "14", "Baraki");
        addComuneOption(comuneSelect, "15", "Oued Smar");
        addComuneOption(comuneSelect, "16", "Bourouba");
        addComuneOption(comuneSelect, "17", "Hussein Dey");
        addComuneOption(comuneSelect, "18", "Kouba");
        addComuneOption(comuneSelect, "19", "Bachedjerah");
        addComuneOption(comuneSelect, "20", "Dar El Beida");
        addComuneOption(comuneSelect, "21", "Bab Azzouar");
        addComuneOption(comuneSelect, "22", "Ben Aknoun");
        addComuneOption(comuneSelect, "23", "Dely Ibrahim");
        addComuneOption(comuneSelect, "24", "Bains Romains");
        addComuneOption(comuneSelect, "25", "Rais Hamidou");
        addComuneOption(comuneSelect, "26", "Djasr Kasentina");
        addComuneOption(comuneSelect, "27", "El Mouradia");
        addComuneOption(comuneSelect, "28", "Hydra");
        addComuneOption(comuneSelect, "29", "Mohammadia");
        addComuneOption(comuneSelect, "30", "Bordj El Kiffan");
        addComuneOption(comuneSelect, "31", "El Magharia");
        addComuneOption(comuneSelect, "32", "Beni Messous");
        addComuneOption(comuneSelect, "33", "Les Eucalyptus");
        addComuneOption(comuneSelect, "34", "Birtouta");
        addComuneOption(comuneSelect, "35", "Tassala El Merdja");
        addComuneOption(comuneSelect, "36", "Ouled Chebel");
        addComuneOption(comuneSelect, "37", "Sidi Moussa");
        addComuneOption(comuneSelect, "38", "Ain Taya");
        addComuneOption(comuneSelect, "39", "Bordj El Bahri");
        addComuneOption(comuneSelect, "40", "Marsa");
        addComuneOption(comuneSelect, "41", "Haraoua");
        addComuneOption(comuneSelect, "42", "Rouiba");
        addComuneOption(comuneSelect, "43", "Reghaia");
        addComuneOption(comuneSelect, "44", "Ain Benian");
        addComuneOption(comuneSelect, "45", "Staoueli");
        addComuneOption(comuneSelect, "46", "Zeralda");
        addComuneOption(comuneSelect, "47", "Mahelma");
        addComuneOption(comuneSelect, "48", "Rahmania");
        addComuneOption(comuneSelect, "49", "Souidania");
        addComuneOption(comuneSelect, "50", "Cheraga");
        addComuneOption(comuneSelect, "51", "Ouled Fayet");
        addComuneOption(comuneSelect, "52", "El Achour");
        addComuneOption(comuneSelect, "53", "Draria");
        addComuneOption(comuneSelect, "54", "Douera");
        addComuneOption(comuneSelect, "55", "Baba Hassen");
        addComuneOption(comuneSelect, "56", "Khracia");
        addComuneOption(comuneSelect, "57", "Saoula");

    } else if (selectedWilaya === "21. Skikda") {
        addComuneOption(comuneSelect, "01", "Skikda Centre");
        addComuneOption(comuneSelect, "02", "Ain Zouit");
        addComuneOption(comuneSelect, "03", "El Hadaik");
        addComuneOption(comuneSelect, "04", "Azzaba");
        addComuneOption(comuneSelect, "05", "Djendel Saadi Mohamed");
        addComuneOption(comuneSelect, "06", "Ain Cherchar");
        addComuneOption(comuneSelect, "07", "Bekkouche Lakhdar");
        addComuneOption(comuneSelect, "08", "Benazouz");
        addComuneOption(comuneSelect, "09", "Es Sebt");
        addComuneOption(comuneSelect, "10", "Collo");
        addComuneOption(comuneSelect, "11", "Beni Zid");
        addComuneOption(comuneSelect, "12", "Kerkera");
        addComuneOption(comuneSelect, "13", "Ouled Attia");
        addComuneOption(comuneSelect, "14", "Oued Zehour");
        addComuneOption(comuneSelect, "15", "Zitouna");
        addComuneOption(comuneSelect, "16", "El Harrouch");
        addComuneOption(comuneSelect, "17", "Zerdazas");
        addComuneOption(comuneSelect, "18", "Ouled Hebaba");
        addComuneOption(comuneSelect, "19", "Sidi Mezghiche");
        addComuneOption(comuneSelect, "20", "Emdjez Edchich");
        addComuneOption(comuneSelect, "21", "Beni Oulbane");
        addComuneOption(comuneSelect, "22", "Ain Bouziane");
        addComuneOption(comuneSelect, "23", "Ramdane Djamel");
        addComuneOption(comuneSelect, "24", "Beni Bachir");
        addComuneOption(comuneSelect, "25", "Salah Bouchaour");
        addComuneOption(comuneSelect, "26", "Tamalous");
        addComuneOption(comuneSelect, "27", "Ain Kechra");
        addComuneOption(comuneSelect, "28", "Oum Toub");
        addComuneOption(comuneSelect, "29", "Bein El Ouiden");
        addComuneOption(comuneSelect, "30", "Fil Fila");
        addComuneOption(comuneSelect, "31", "Cheraia");
        addComuneOption(comuneSelect, "32", "Kanoua");
        addComuneOption(comuneSelect, "33", "El Ghedir");
        addComuneOption(comuneSelect, "34", "Bouchtata");
        addComuneOption(comuneSelect, "35", "Ouldja Boulbalout");
        addComuneOption(comuneSelect, "36", "Kheneg Mayoum");
        addComuneOption(comuneSelect, "37", "Hamadi Krouma");
        addComuneOption(comuneSelect, "38", "El Marsa");

    } else if (selectedWilaya === "23. Annaba") {
        addComuneOption(comuneSelect, "01", "Annaba");
        addComuneOption(comuneSelect, "02", "Berrahel");
        addComuneOption(comuneSelect, "03", "El Hadjar");
        addComuneOption(comuneSelect, "04", "Eulma");
        addComuneOption(comuneSelect, "05", "El Bouni");
        addComuneOption(comuneSelect, "06", "Oued El Aneb");
        addComuneOption(comuneSelect, "07", "Cheurfa");
        addComuneOption(comuneSelect, "08", "Seraidi");
        addComuneOption(comuneSelect, "09", "Ain Berda");
        addComuneOption(comuneSelect, "10", "Chetaibi");
        addComuneOption(comuneSelect, "11", "Sidi Amer");
        addComuneOption(comuneSelect, "12", "Treat");    

    } else if (selectedWilaya === "06. Bejaia") {
        addComuneOption(comuneSelect, "01", "Bejaia");
        addComuneOption(comuneSelect, "02", "Amizour");
        addComuneOption(comuneSelect, "03", "Ferraoun");
        addComuneOption(comuneSelect, "04", "Taourirt Ighil");
        addComuneOption(comuneSelect, "05", "Chelata");
        addComuneOption(comuneSelect, "06", "Tamokra");
        addComuneOption(comuneSelect, "07", "Timzrit");
        addComuneOption(comuneSelect, "08", "Souk El Thenine");
        addComuneOption(comuneSelect, "09", "Mcisna");
        addComuneOption(comuneSelect, "10", "Thinabdher");
        addComuneOption(comuneSelect, "11", "Tichi");
        addComuneOption(comuneSelect, "12", "Semaoun");
        addComuneOption(comuneSelect, "13", "Kendira");
        addComuneOption(comuneSelect, "14", "Tifra");
        addComuneOption(comuneSelect, "15", "Ighram");
        addComuneOption(comuneSelect, "16", "Amalou");
        addComuneOption(comuneSelect, "17", "Ighil Ali");
        addComuneOption(comuneSelect, "18", "Ifelain Ilmathen");
        addComuneOption(comuneSelect, "19", "Toudja");
        addComuneOption(comuneSelect, "20", "Darguina");
        addComuneOption(comuneSelect, "21", "Sidi Ayad");
        addComuneOption(comuneSelect, "22", "Aokas");
        addComuneOption(comuneSelect, "23", "Beni Djellil");
        addComuneOption(comuneSelect, "24", "Adekar");
        addComuneOption(comuneSelect, "25", "Akbou");
        addComuneOption(comuneSelect, "26", "Seddouk");
        addComuneOption(comuneSelect, "27", "Tazmalt");
        addComuneOption(comuneSelect, "28", "Ait Rizine");
        addComuneOption(comuneSelect, "29", "Chemini");
        addComuneOption(comuneSelect, "30", "Souk Oufella");
        addComuneOption(comuneSelect, "31", "Taskriout");
        addComuneOption(comuneSelect, "32", "Tibane");
        addComuneOption(comuneSelect, "33", "Tala Hamza");
        addComuneOption(comuneSelect, "34", "Barbacha");
        addComuneOption(comuneSelect, "35", "Beni Ksila");
        addComuneOption(comuneSelect, "36", "Ouzallaguen");
        addComuneOption(comuneSelect, "37", "Bouhamza");
        addComuneOption(comuneSelect, "38", "Beni Melikeche");
        addComuneOption(comuneSelect, "39", "Sidi Aich");
        addComuneOption(comuneSelect, "40", "El Kseur");
        addComuneOption(comuneSelect, "41", "Melbou");
        addComuneOption(comuneSelect, "42", "Akfadou");
        addComuneOption(comuneSelect, "43", "Leflaye");
        addComuneOption(comuneSelect, "44", "Kherrata");
        addComuneOption(comuneSelect, "45", "Draa Kaid");
        addComuneOption(comuneSelect, "46", "Tamridjet");
        addComuneOption(comuneSelect, "47", "Ait Smail");
        addComuneOption(comuneSelect, "48", "Boukhelifa");
        addComuneOption(comuneSelect, "49", "Tizi Nberber");
        addComuneOption(comuneSelect, "50", "Beni Maouch");
        addComuneOption(comuneSelect, "51", "Oued Ghir");
        addComuneOption(comuneSelect, "52", "Boudjellil");

    } else if (selectedWilaya === "18. Jijel") {
        addComuneOption(comuneSelect, "01", "Jijel");
        addComuneOption(comuneSelect, "02", "Erraguene");
        addComuneOption(comuneSelect, "03", "El Aouana");
        addComuneOption(comuneSelect, "04", "Ziamma Mansouriah");
        addComuneOption(comuneSelect, "05", "Taher");
        addComuneOption(comuneSelect, "06", "Emir Abdelkader");
        addComuneOption(comuneSelect, "07", "Chekfa");
        addComuneOption(comuneSelect, "08", "Chahna");
        addComuneOption(comuneSelect, "09", "El Milia");
        addComuneOption(comuneSelect, "10", "Sidi Maarouf");
        addComuneOption(comuneSelect, "11", "Settara");
        addComuneOption(comuneSelect, "12", "El Ancer");
        addComuneOption(comuneSelect, "13", "Sidi Abdelaziz");
        addComuneOption(comuneSelect, "14", "Kaous");
        addComuneOption(comuneSelect, "15", "Ghebala");
        addComuneOption(comuneSelect, "16", "Bouraoui Belhadef");
        addComuneOption(comuneSelect, "17", "Djmila");
        addComuneOption(comuneSelect, "18", "Selma Benziada");
        addComuneOption(comuneSelect, "19", "Boussif Ouled Askeur");
        addComuneOption(comuneSelect, "20", "El Kennar Nouchfi");
        addComuneOption(comuneSelect, "21", "Ouled Yahia Khadrouch");
        addComuneOption(comuneSelect, "22", "Boudria Beni Yadjis");
        addComuneOption(comuneSelect, "23", "Kemir Oued Adjoul");
        addComuneOption(comuneSelect, "24", "Texena");
        addComuneOption(comuneSelect, "25", "Djemaa Beni Habibi");
        addComuneOption(comuneSelect, "26", "Bordj Taher");
        addComuneOption(comuneSelect, "27", "Ouled Rabah");
        addComuneOption(comuneSelect, "28", "Ouadjana");

    } else if (selectedWilaya === "36. El Tarf") {
        addComuneOption(comuneSelect, "01", "El Tarf");
        addComuneOption(comuneSelect, "02", "Bouhadjar");
        addComuneOption(comuneSelect, "03", "Ben Mhidi");
        addComuneOption(comuneSelect, "04", "Bougous");
        addComuneOption(comuneSelect, "05", "El Kala");
        addComuneOption(comuneSelect, "06", "Ain El Assel");
        addComuneOption(comuneSelect, "07", "El Aioun");
        addComuneOption(comuneSelect, "08", "Bouteldja");
        addComuneOption(comuneSelect, "09", "Souarekh");
        addComuneOption(comuneSelect, "10", "Berrihane");
        addComuneOption(comuneSelect, "11", "Lac Des Oiseaux");
        addComuneOption(comuneSelect, "12", "Chefia");
        addComuneOption(comuneSelect, "13", "Drean");
        addComuneOption(comuneSelect, "14", "Chihani");
        addComuneOption(comuneSelect, "15", "Chebaita Mokhtar");
        addComuneOption(comuneSelect, "16", "Besbes");
        addComuneOption(comuneSelect, "17", "Asfour");
        addComuneOption(comuneSelect, "18", "Echatt");
        addComuneOption(comuneSelect, "19", "Zerizer");
        addComuneOption(comuneSelect, "20", "Zitouna");
        addComuneOption(comuneSelect, "21", "Ain Kerma");
        addComuneOption(comuneSelect, "22", "Oued Zitoun");
        addComuneOption(comuneSelect, "23", "Hammam Beni Salah");
        addComuneOption(comuneSelect, "24", "Raml Souk");

    } else if (selectedWilaya === "15. Tizi Ouzou") {
        addComuneOption(comuneSelect, "01", "Tizi Ouzou");
        addComuneOption(comuneSelect, "02", "");

    } else if (selectedWilaya === "35. Boumerdes") {
        addComuneOption(comuneSelect, "01", "Boumerdes");
        addComuneOption(comuneSelect, "02", "");

    } else if (selectedWilaya === "42. Tipaza") {
        addComuneOption(comuneSelect, "01", "Tipaza");
        addComuneOption(comuneSelect, "02", "");

    } else if (selectedWilaya === "27. Mostaganem") {
        addComuneOption(comuneSelect, "01", "Mostaganem");
        addComuneOption(comuneSelect, "02", "");

    } else if (selectedWilaya === "02. Chlef") {
        addComuneOption(comuneSelect, "01", "Chlef");
        addComuneOption(comuneSelect, "02", "");

    } else if (selectedWilaya === "31. Oran") {
        addComuneOption(comuneSelect, "01", "Oran");
        addComuneOption(comuneSelect, "02", "");

    } else if (selectedWilaya === "13. Tlemcen") {
        addComuneOption(comuneSelect, "01", "Tlemcen");
        addComuneOption(comuneSelect, "02", "");

    } else if (selectedWilaya === "46. Aïn Témouchent") {
        addComuneOption(comuneSelect, "01", "Aïn Témouchent");
        addComuneOption(comuneSelect, "02", "");

    }
}

function addComuneOption(select, value, text) {
    var option = document.createElement("option");
    option.value = value;
    option.text = text;
    select.appendChild(option);
}
