


const divAllCategory=document.createElement('div');
const  divCategory1=document.createElement('div');
const img1=document.createElement('img');
const img2=document.createElement('img');
const img3=document.createElement('img');
const img4=document.createElement('img');
img1.src=`/image/אלי הרצליך.jpg` ;
img1.id="chasidi img1";

img1.classList.add('categoty');
img1.width=`300`;
img2.src=`/image/נמואל הרוש - אלף  עטיפה.jpg` ;
img2.width=`300`;
img2.id="chasidi img2";
img2.classList.add('categoty');
img3.src=`/image/ליפא שמלצער.jpg` ;
img3.width=`300`;
img3.id="chasidi img3";
img3.classList.add('categoty');
img4.src=`image/מוטי שטיימץ.jpg` ;
img4.width=`300`;
img4.id="chasidi img4";
img4.classList.add('categoty');

divCategory1.classList.add('categoty');
divCategory1.id="chasidi";
divCategory1.innerHTML="חסידי";




const  divCategory2=document.createElement('div');
const img5=document.createElement('img');
const img6=document.createElement('img');
const img7=document.createElement('img');
const img8=document.createElement('img');
const img9=document.createElement('img');
const img10=document.createElement('img');
const img11=document.createElement('img');
const img12=document.createElement('img');









// img5.src=`image/קינדרלך.jpg` ;
// img5.id="img5";
// img5.width=`300`;
// img6.src=`image/אורי דוידי.jpg` ;
// img6.id="img6";
// img6.width=`300`;
// img7.src=`image/פיני אינוהרן.jpg` ;
// img7.id="img7";
// img7.width=`300`;
// img8.src=`image/עקיבא.jpg` ;
// img8.id="img8";
// img8.width=`300`;




img5.src=`image/קינדרלך.jpg` ;
img5.id="israeli img5";
img5.classList.add('category');
img5.width=`300`;
img6.src=`image/אורי דוידי.jpg` ;
img6.id=" cisraeli img6";
img6.classList.add('category');
img6.width=`300`;
img7.src=`image/פיני אינוהרן.jpg` ;
img7.id="israeli img7";
img7.classList.add('category');
img7.width=`300`;
img8.src=`image/עקיבא.jpg` ;
img8.id="israeli img8";
img8.classList.add('category');
img8.width=`300`;
divCategory2.classList.add('categoty');
divCategory2.id="israeli";
divCategory2.innerHTML="ישראלי";






const  divCategory3=document.createElement('div');
img9.src=`image/מיכה גמרמן.jpg` ;
img9.id="mizrachi img9";

img9.classList.add('categoty');
img9.width=`300`;
img10.src=`image/ברי ובר.jpg` ;
img10.id="mizrachi img10";
img10.classList.add('categoty');
img10.width=`300`;
img11.src=`image/יוני ז.jpg` ;
img11.id="mizrachi img11";
img11.classList.add('categoty');
img11.width=`300`;
img12.src=`image/שוואקי.jpg` ;
img12.id="mizrachi img12";
img12.classList.add('categoty');
img12.width=`300`;
divCategory3.classList.add('categoty');
divCategory3.id="mizrachi";
divCategory3.innerHTML="מיזרחי";






divAllCategory.append(divCategory1);
divAllCategory.append(divCategory2);
divAllCategory.append(divCategory3);
// divAllCategory.append(divCategory4);
divCategory1.append(img1);
divCategory1.append(img2);
divCategory1.append(img3);
divCategory1.append(img4);
divCategory2.append(img5);
divCategory2.append(img6);
divCategory2.append(img7);
divCategory2.append(img8);
divCategory3.append(img9);
divCategory3.append(img10);
divCategory3.append(img11);
divCategory3.append(img12);
categorySongs.append(divAllCategory);

const categoryes = document.querySelectorAll(".categoty");
categoryes.forEach(c => {
    c.onclick = (event) => {
        sessionStorage.setItem('category', JSON.stringify((event.target.id).split(' ')[0]));
        location.href = "song.html";
    }
});



















