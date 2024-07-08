const category = JSON.parse(sessionStorage.getItem('category'));
let songsChosen = [];
const arrItems = JSON.parse(localStorage.getItem('arrItems'));
//פונקציה שמחזירה את המיקום של המשתמש הנוכחי
const returnUser = () => {
    const password = JSON.parse(sessionStorage.getItem('password'));
    let userObject;
    let i;
    for (i = 0; i < arrItems.length; i++) {
        if (arrItems[i].password === password) {
            userObject = arrItems[i];
            break;
        }
    }
    return i;
}
const categoryes = document.querySelectorAll(".categoty");
categoryes.forEach(c => {
    c.onclick = (event) => {
        sessionStorage.setItem('category', JSON.stringify(event.target.id))
    }
})
//את השירים לפי הקטגוריה המתאימה songsChosen מכניסה למערך
const loadSongs = () => {
    $.ajax({
        method: 'GET',
        url: '/songs.json',
        success: (data) => {
            if (category != "lastSongs" && category != "favourites") {
                songsChosen = data.filter((x) => {
                    return x.category === category;
                })
            }
            else {
                if (category === "favourites") {
                    songsChosen = data;
                }
                else {
                    const indexUser = returnUser();
                    arrItems[indexUser].arrLastSongs.forEach((lSong) => {
                        data.forEach((song) => {
                            if (lSong === song.location) {
                                songsChosen.push(song);
                            }
                        })
                    })
                    songsChosen.reverse();
                }
            }
            sessionStorage.setItem('arrSongsChosen', JSON.stringify(songsChosen));
            printsong(songsChosen);
        },
    });
}
//מקבלת מערך של שירים ומדפיסה אותס
const printsong = (arrSongs) => {
    divSongs.innerHTML = "";
    for (let i = 0; i < arrSongs.length; i++) {
        const div = document.createElement('div');
        const image = document.createElement('img');
        image.src = arrSongs[i].image;
        image.width = `130`;
        div.append(arrSongs[i].songName + "/" + arrSongs[i].singerName);
        const br = document.createElement('br');
        div.append(br);
        div.append(image);
        divSongs.append(div);
        div.onclick = () => {
            sessionStorage.setItem('indexSong', JSON.stringify(i));
            location.href = "chosenSong.html";
        }
        if (category === "favourites") {
            const button = document.querySelector('#button');
            const div2 = document.createElement('div');
            if (button != null && button.innerHTML === 'אישור') {
                const input = document.createElement('input');
                input.type = `checkbox`;
                const br2 = document.createElement('br');
                div2.append(br2);
                div2.id = "div2";
                div2.append(input);
                div2.append(div);
                divSongs.append(div2);
                const indexUser = returnUser();
                arrItems[indexUser].arrFavourites.forEach((s) => {
                    if (s.location === arrSongs[i].location) {
                        input.checked = true;
                    }
                })
                input.onclick = () => {
                    if (input.checked === true) {
                        arrItems[indexUser].arrFavourites.push(arrSongs[i]);
                    }
                    else {
                        arrItems[indexUser].arrFavourites = arrItems[indexUser].arrFavourites.filter((x) => {
                            return x.location != arrSongs[i].location;
                        })
                    }
                }
            }
        }
    }
}

if (category != "favourites" && category != "upLoudSong") {
    loadSongs();
}
//חיפוש
const input = document.querySelector('#input');
input.oninput = () => {
    const arrSongsChosenByInput = songsChosen.filter(function (x) {
        return (x.songName + x.singerName).includes(input.value);
    })
    printsong(arrSongsChosenByInput);
}
//יצירת button למועדפים
if (category === "favourites") {
    
    const i = returnUser();
    songsChosen = arrItems[i].arrFavourites;
    printsong(arrItems[i].arrFavourites);
    const button = document.createElement('button');
    button.id = "button";
    addfavourites.append(button);
    button.innerHTML = "להוספת מועדף";
    button.onclick = () => {
        if (button.innerHTML === "להוספת מועדף") {
            loadSongs();
            button.innerHTML = "אישור";
        }
        else {
            localStorage.setItem('arrItems', JSON.stringify(arrItems));
            const i = returnUser();
            button.innerHTML = "להוספת מועדף";
            sessionStorage.setItem('arrSongsChosen', JSON.stringify(arrItems[i].arrFavourites));
            songsChosen = arrItems[i].arrFavourites;
            printsong(arrItems[i].arrFavourites)
        }
    }
}




