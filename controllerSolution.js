
// Ikke se på dette om du ikke absolutt har behov for det. 

// OBS OBS OBS!!!















































function challengeOne(viewIndex) {
    let picture = model.challengeOne;


    // Ikke rør det her vvv
    model.viewArray[viewIndex].picture = picture;
    showView();
}

function challengeTwo(viewIndex) {
    let picture = model.challengeTwo.pictureTwo;


    // Ikke rør det her vvv
    model.viewArray[viewIndex].picture = picture;
    showView();
}

function challengeThree(viewIndex) {
    // Bare hyggelig! jeg har funnet indexen for deg :)
    let index = model.values.challengeThreeIndex;
    let picture = model.challengeThree[index];


    // Ikke rør det her vvv
    model.viewArray[viewIndex].picture = picture;
    showView();
}

function challengeFour(viewIndex) {
    let picture;
    let chal4 = model.challengeFour;
    for (let i = 0; i < chal4.length; i++) {
        if (chal4[i].ID == 'Four') {
            picture = chal4[i].picture;
        }
    }

    // Ikke rør det her vvv
    model.viewArray[viewIndex].picture = picture;
    showView();
}

function challengeFive(viewIndex) {
    let picture;
    for (let i = 0; i < model.challengeFive.length; i++) {
        if (model.challengeFive[i] == '<img src="bilder/rightPictureFive.jpg" style="width: 100%; height: 100%;">') {
            picture = model.challengeFive[i];
        }
    }

    // Ikke rør det her vvv
    model.viewArray[viewIndex].picture = picture;
    showView();
}

function challengeSix(viewIndex) {
    let picture;
    let chal6 = model.challengeSix.arrayFour
    for (let i = 0; i < chal6.length; i++) {
        if (chal6[i].ID == 'Four') {
            picture = chal6[i].picture;
        }
    }

    // Ikke rør det her vvv
    model.viewArray[viewIndex].picture = picture;
    showView();
}

function challengeSeven(viewIndex) {
    let picture;
    let chal7 = model.challengeSeven;
    for (let i = 0; i < chal7.length; i++) {
        for (let o = 0; o < chal7[i].length; o++) {
            for (let u = 0; u < chal7[i][o].length; u++) {
                if (chal7[i][o][u].ID == 'right') {
                    picture = chal7[i][o][u].picture;
                    break;
                }
            }
        }
    }

    // Ikke rør det her vvv
    model.viewArray[viewIndex].picture = picture;
    showView();
}

    // I denne oppgaven skal du søke igjennom challengeEight i modellen. Jeg har gjort klar variablene userID, folderID og pictureID som du skal bruke.
function challengeEight(viewIndex) {
    let picture;
    let chal8 = model.challengeEight;
    for (let i = 0; i < chal8.length; i++) {
        if (chal8[i].userID == userID) {
            for (let o = 0; o < chal8[i].user.length; o++) {
                if (chal8[i].user[o].folderID == folderID) {
                    for (let u = 0; u < chal8[i].user[o].folder.length; u++) {
                        if(chal8[i].user[o].folder[u].pictureID == pictureID) {
                            picture = chal8[i].user[o].folder[u].picture;
                            break;
                        }
                    }
                }
            }
        }
    }



    // Ikke rør det her vvv
    model.viewArray[viewIndex].picture = picture;
    showView();
}


    /* Denne oppgaven er lik som oppgave 8. Men dessverre så vet vi ikke hvilken userID, folderID eller pictureID som bildet ligger i.
    Du skal derfor gå igjennom hver eneste bruker. Og inni hver bruker skal du igjennom hver eneste folder.
    Og inni hver eneste folder skal du gå igjennom og lete etter pictureID 'right'.
    */
function challengeNine(viewIndex) {
    let picture;
    let chal9 = model.challengeNine;
    for (let i = 0; i < chal9.length; i++) {
        for (let o = 0; o < chal9[i].user.length; o++) {
            for (let u = 0; u < chal9[i].user[o].folder.length; u++) {
                if (chal9[i].user[o].folder[u].pictureID == 'right') {
                    picture = chal9[i].user[o].folder[u].picture;
                }
            }
        }
    }


    // Ikke rør det her vvv
    model.viewArray[viewIndex].picture = picture;
    showView();
}