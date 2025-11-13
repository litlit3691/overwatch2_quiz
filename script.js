// 🎥 영상 리스트 & 정답
const videos = [
  { src: "videos/clip_1.mp4", answer: "디바" },
  { src: "videos/clip_2.mp4", answer: "겐지" },
  { src: "videos/clip_3.mp4", answer: "둠피스트" },
  { src: "videos/clip_4.mp4", answer: "라마트라" },
  { src: "videos/clip_5.mp4", answer: "라이프위버" },
  { src: "videos/clip_6.mp4", answer: "라인하르트" },
  { src: "videos/clip_7.mp4", answer: "로드호그" },
  { src: "videos/clip_8.mp4", answer: "루시우" },
  { src: "videos/clip_9.mp4", answer: "리퍼" },
  { src: "videos/clip_10.mp4", answer: "마우가" },
  { src: "videos/clip_11.mp4", answer: "메르시" },
  { src: "videos/clip_12.mp4", answer: "메이" },
  { src: "videos/clip_13.mp4", answer: "모이라" },
  { src: "videos/clip_14.mp4", answer: "바스티온" },
  { src: "videos/clip_15.mp4", answer: "바티스트" },
  { src: "videos/clip_16.mp4", answer: "벤처" },
  { src: "videos/clip_17.mp4", answer: "브리기테" },
  { src: "videos/clip_18.mp4", answer: "소전" },
  { src: "videos/clip_19.mp4", answer: "솔저" },
  { src: "videos/clip_20.mp4", answer: "솜브라" },
  { src: "videos/clip_21.mp4", answer: "시그마" },
  { src: "videos/clip_22.mp4", answer: "시메트라" },
  { src: "videos/clip_23.mp4", answer: "아나" },
  { src: "videos/clip_24.mp4", answer: "애쉬" },
  { src: "videos/clip_25.mp4", answer: "오리사" },
  { src: "videos/clip_26.mp4", answer: "우양" },
  { src: "videos/clip_27.mp4", answer: "위도우메이커" },
  { src: "videos/clip_28.mp4", answer: "윈스턴" },
  { src: "videos/clip_29.mp4", answer: "일리아리" },
  { src: "videos/clip_30.mp4", answer: "자리야" },
  { src: "videos/clip_31.mp4", answer: "정커퀸" },
  { src: "videos/clip_32.mp4", answer: "정크렛" },
  { src: "videos/clip_33.mp4", answer: "젠야타" },
  { src: "videos/clip_34.mp4", answer: "주노" },
  { src: "videos/clip_35.mp4", answer: "캐서디" },
  { src: "videos/clip_36.mp4", answer: "키리코" },
  { src: "videos/clip_37.mp4", answer: "토르비욘" },
  { src: "videos/clip_38.mp4", answer: "트레이서" },
  { src: "videos/clip_39.mp4", answer: "파라" },
  { src: "videos/clip_40.mp4", answer: "프레야" },
  { src: "videos/clip_41.mp4", answer: "한조" },
  { src: "videos/clip_42.mp4", answer: "해저드" },
  { src: "videos/clip_43.mp4", answer: "레킹볼" },
  { src: "videos/clip_44.mp4", answer: "에코" }
];

let current = 0;
let score = 0;

const video = document.getElementById("video");
const answerInput = document.getElementById("answer");
const submitBtn = document.getElementById("submit");
const nextBtn = document.getElementById("next");
const result = document.getElementById("result");

// 🎬 영상 로드
function loadVideo() {
  if (current >= videos.length) {
    showFinalResult();
    return;
  }

  const v = videos[current];
  video.src = v.src;
  video.load();
  video.play().catch(() => {});

  // 입력창 활성화, 버튼 숨김
  answerInput.value = "";
  answerInput.disabled = false;
  submitBtn.disabled = false;
  nextBtn.style.display = "none";
  result.textContent = "";
}

// ✅ 제출 버튼
submitBtn.onclick = () => {
  const userAnswer = answerInput.value.trim();
  if (!userAnswer) return;

  const correct = videos[current].answer;

  // 입력창 비활성화
  answerInput.disabled = true;
  submitBtn.disabled = true;

  if (userAnswer === correct) {
    result.textContent = "✅ 정답!";
    score++;
  } else {
    result.textContent = `❌ 오답! 정답은 ${correct}`;
  }

  // 다음 버튼 보이기
  nextBtn.style.display = "inline-block";
};

// ⏩ 다음 버튼
nextBtn.onclick = () => {
  current++;
  loadVideo();
};

// 🏁 최종 결과
function showFinalResult() {
  const rate = (score / videos.length) * 100;
  let message = "";

  if (rate < 20) message = "당신은 뉴비입니다";
  else if (rate < 50) message = "당신은 초보입니다";
  else if (rate < 80) message = "당신은 평범한 유저입니다 ";
  else if (rate < 100) message = "당신은 대깨옵 유저입니다";
  else message = "당신은 블리자드 직원입니다 💼";

  document.body.innerHTML = `
    <div style="text-align:center; margin-top:50px;">
      <h1>결과</h1>
      <p>정답률: ${rate.toFixed(1)}%</p>
      <h2>${message}</h2>
    </div>
  `;
}

// 시작
loadVideo();
