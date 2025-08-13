/* -------------------------meteor-area------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  const meteorArea = document.getElementById('meteor-area');

  let meteors = [];  // 유성 객체를 추적하기 위한 배열

  function createMeteor() {
    const meteor = document.createElement('div');
    meteor.classList.add('meteor');
    
    // 랜덤 위치 설정
    meteor.style.left = Math.random() * window.innerWidth + 'px';
    meteor.style.top = '-100px';
    
    // 애니메이션 시간 랜덤 설정 (유성 떨어지는 시간)
    const duration = 3 + Math.random() * 2;  // 3초에서 5초 사이
    meteor.style.animationDuration = duration + 's';
    
    // 애니메이션 딜레이 (유성의 시작 시간을 랜덤화)
    const delay = Math.random() * 2;
    meteor.style.animationDelay = delay + 's';
    
    meteorArea.appendChild(meteor);

    // 유성을 배열에 추가
    meteors.push(meteor);

    // 유성 애니메이션이 끝나면 제거
    meteor.addEventListener('animationend', () => {
      meteor.remove();
      meteors = meteors.filter(item => item !== meteor);  // 배열에서 유성 객체 제거
    });
  }

  function handleMeteors() {
    // 화면을 벗어난 유성 제거
    meteors.forEach(meteor => {
      const rect = meteor.getBoundingClientRect();
      if (rect.top > window.innerHeight || rect.left > window.innerWidth || rect.left < 0) {
        meteor.remove();
        meteors = meteors.filter(item => item !== meteor);
      }
    });
  }

  setInterval(createMeteor, 50);

  function update() {
    handleMeteors();
    requestAnimationFrame(update);
  }

  update();
});

/* -------------------------meteor-area------------------------------------ */


/* -------------------------swiper------------------------------------ */

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/* -------------------------swiper------------------------------------ */



/* -------------------------page------------------------------------ */
function changePage(pageId) {
  const pages = document.querySelectorAll('.page');
  
  // 모든 페이지 숨기기
  pages.forEach(page => {
    page.style.display = 'none';
  });

  // 선택된 페이지 보이게 하기
  const selectedPage = document.getElementById(pageId);
  selectedPage.style.display = 'flex';  // 선택된 페이지를 보이게 설정

  selectedPage.querySelectorAll('.slide-down').forEach(el => {
    el.style.animation = 'none'; // 초기화
    el.offsetHeight; // reflow 강제
    el.style.animation = ''; // 다시 적용
  });
}

  // 페이지가 로드될 때 자동으로 페이지1로 설정
window.onload = function() {
  changePage('main_page');
}
/* -------------------------page------------------------------------ */







/* -------------------------contact------------------------------------ */
$(function(){
  $(".contact").click(function(){
    const box = $(this).next(".contact_box");
    box.slideToggle(300, function(){
      if (box.is(":visible")) {
        box.css("display", "flex"); // 열릴 때 flex로 강제
      }
    });
  });
});

/* -------------------------contact------------------------------------ */