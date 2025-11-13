// 영상 리스트와 정답 설정
const videos = [
  { src: "videos/1.mp4", answer: "디바" },
  { src: "videos/2.mp4", answer: "겐지" },
  { src: "videos/3.mp4", answer: "둠피스트" },
  { src: "videos/4.mp4", answer: "라마트라" },
  { src: "videos/5.mp4", answer: "라이프위버" },
  { src: "videos/6.mp4", answer: "라인하르트" },
  { src: "videos/7.mp4", answer: "로드호그" },
  { src: "videos/8.mp4", answer: "루시우" },
  { src: "videos/9.mp4", answer: "리퍼" },
  { src: "videos/10.mp4", answer: "마우가" },
  { src: "videos/11.mp4", answer: "메르시" },
  { src: "videos/12.mp4", answer: "메이" },
  { src: "videos/13.mp4", answer: "모이라" },
  { src: "videos/14.mp4", answer: "바스티온" },
  { src: "videos/15.mp4", answer: "바티스트" },
  { src: "videos/16.mp4", answer: "벤처" },
  { src: "videos/17.mp4", answer: "브리기테" },
  { src: "videos/18.mp4", answer: "소전" },
  { src: "videos/19.mp4", answer: "솔저" },
  { src: "videos/20.mp4", answer: "솜브라" },
  { src: "videos/21.mp4", answer: "시그마" },
  { src: "videos/22.mp4", answer: "시메트라" },
  { src: "videos/23.mp4", answer: "아나" },
  { src: "videos/24.mp4", answer: "애쉬" },
  { src: "videos/25.mp4", answer: "오리사" },
  { src: "videos/26.mp4", answer: "우양" },
  { src: "videos/27.mp4", answer: "위도우메이커" },
  { src: "videos/28.mp4", answer: "윈스턴" },
  { src: "videos/29.mp4", answer: "일리아리" },
  { src: "videos/30.mp4", answer: "자리야" },
  { src: "videos/31.mp4", answer: "정커퀸" },
  { src: "videos/32.mp4", answer: "정크렛" },
  { src: "videos/33.mp4", answer: "젠야타" },
  { src: "videos/34.mp4", answer: "주노" },
  { src: "videos/35.mp4", answer: "캐서디" },
  { src: "videos/36.mp4", answer: "키리코" },
  { src: "videos/37.mp4", answer: "토르비욘" },
  { src: "videos/38.mp4", answer: "트레이서" },
  { src: "videos/39.mp4", answer: "파라" },
  { src: "videos/40.mp4", answer: "프레야" },
  { src: "videos/41.mp4", answer: "한조" },
  { src: "videos/42.mp4", answer: "해저드" },
  { src: "videos/43.mp4", answer: "레킹볼" },
  { src: "videos/44.mp4", answer: "에코" }
];

let current = 0;
let score = 0;

const video = document.getElementById("video");
const answerInput = document.getElementById("answer");
const submitBtn = document.getElementById("submit");
const nextBtn = document.getElementById("next");
const result = document.getElementById("result");

function loadVideo() {
  if (current >= videos.length) {
    showFinalResult();
    return;
  }
  video.src = videos[current].src;
  answerInput.value = "";
  result.textContent = "";
  nextBtn.style.display = "none";
}

submitBtn.onclick = () => {
  const userAnswer = answerInput.value.trim();
  if (userAnswer === "") return;

  if (userAnswer === videos[current].answer) {
    result.textContent = "✅ 정답!";
    score++;
  } else {
    result.textContent = `❌ 오답! 정답은 ${videos[current].answer}`;
  }

  nextBtn.style.display = "inline-block";
};

nextBtn.onclick = () => {
  current++;
  loadVideo();
};

function showFinalResult() {
  const rate = (score / videos.length) * 100;
  let message = "";

  if (rate < 20) message = "당신은 뉴비입니다 😅";
  else if (rate < 50) message = "초보입니다 👶";
  else if (rate < 80) message = "평범한 유저입니다 🎮";
  else if (rate < 100) message = "대깨옵 유저입니다 🔥";
  else message = "블리자드 직원입니다 💼";

  document.body.innerHTML = `
    <h1>결과</h1>
    <p>정답률: ${rate.toFixed(1)}%</p>
    <h2>${message}</h2>
  `;
}

loadVideo();
