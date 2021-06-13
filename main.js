// buttonが押される
// その値にあった画像が表示される

const spring = { img: './img/slide1.png', text: '春へ' };
const summer = { img: './img/slide2.png', text: '夏へ' };
const autumn = { img: './img/slide3.png', text: '秋へ' };
const winter = { img: './img/slide4.png', text: '冬へ' };
const date = [spring, summer, autumn, winter];
// console.log(date[2].text);
const pushBtn = document.getElementById('pushBtn');
const viewImg = document.getElementById('viewImg');
const seasonNum = document.getElementById('seasonNum');
const skipBtn = document.getElementById('skipBtn');

let imgNum = 0;

pushBtn.textContent = date[imgNum].text;
viewImg.setAttribute('src', date[imgNum].img);


pushBtn.addEventListener("click", () => {
    selectNum();
});

skipBtn.addEventListener("click", () => {
    imgNum = Number(seasonNum.value);
    selectNum();
});

const selectNum = function () {
    if (imgNum === 3) {
        imgNum = 0;
    } else {
        imgNum += 1;
    }

    viewImg.setAttribute('src', date[imgNum].img);
    pushBtn.textContent = date[imgNum].text;
}
