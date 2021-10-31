setTimeout(function () {
    document.body.classList.add('id-card-active');
}, 100);

//url 공유
window.onload = function() {
    let url = window.location.href;
    const resultValue = document.querySelector(".card-result-name");

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');

    ogTitle.setAttribute("content", '국내와 가장 비슷한 여행지는 ${resultValue.innerText}?!');
    ogUrl.setAttribute("content", url);
}

const shareBtn = document.querySelector(".share-btn");

function shareUrl() {
    let url = window.location.href;
    let tmpElement = document.createElement('input');

    document.body.appendChild(tmpElement);
    tmpElement.value = url;
    tmpElement.select();
    document.execCommand("copy");
    document.body.removeChild(tmpElement);

    alert("URL이 복사되었습니다");
}

shareBtn.addEventListener("click", shareUrl);