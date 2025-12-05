// =============================
//  1. 분류 상수 정의
// =============================
const TYPES = Object.freeze({
  ANY: "any",
  KOREAN: "korean",
  CHINESE: "chinese",
  JAPANESE: "japanese",
  SNACK: "snack",   // 분식/간식
  WESTERN: "western",
  SEASIA: "seasia", // 동남아
  OTHER: "other",   // 멕시코/스페인 등
});

const SPICY = Object.freeze({
  ANY: "any",
  MILD: "mild",
  MEDIUM: "medium",
  HOT: "hot",
});

const BUDGET = Object.freeze({
  ANY: "any",
  LOW: "low",
  MID: "mid",
  HIGH: "high",
});

// =============================
//  2. 메뉴 데이터
// =============================
const menus = [
  // ===== 한식 =====
  { name: "김치찌개", type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: "된장찌개", type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: "순두부찌개", type: TYPES.KOREAN, spicy: SPICY.HOT, budget: BUDGET.MID },
  { name: "부대찌개", type: TYPES.KOREAN, spicy: SPICY.HOT, budget: BUDGET.MID },
  { name: "청국장", type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },

  { name: "비빔밥", type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: "육회 비빔밥", type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.HIGH },
  { name: "삼겹살", type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.HIGH },
  { name: "제육볶음", type: TYPES.KOREAN, spicy: SPICY.HOT, budget: BUDGET.MID },
  { name: "닭갈비", type: TYPES.KOREAN, spicy: SPICY.HOT, budget: BUDGET.MID },

  { name: "돼지국밥", type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: "콩나물국밥", type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: "갈비탕", type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: "전골", type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: "설렁탕", type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: "갈비", type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.HIGH },

  { name: "간장게장", type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.HIGH },
  { name: "양념게장", type: TYPES.KOREAN, spicy: SPICY.HOT, budget: BUDGET.HIGH },
  { name: "육회", type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.HIGH },

  { name: "멸치국수", type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: "떡만둣국", type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: "물회", type: TYPES.KOREAN, spicy: SPICY.HOT, budget: BUDGET.MID },
  { name: "회덮밥", type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: "생선조림", type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },

  { name: "야채곱창", type: TYPES.KOREAN, spicy: SPICY.HOT, budget: BUDGET.MID },
  { name: "콩나물국", type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: "계란말이", type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.LOW },

  // ===== 분식 / 간식 =====
  { name: "김밥", type: TYPES.SNACK, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: "치즈김밥", type: TYPES.SNACK, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: "떡볶이", type: TYPES.SNACK, spicy: SPICY.MEDIUM, budget: BUDGET.LOW },
  { name: "치즈 떡볶이", type: TYPES.SNACK, spicy: SPICY.MEDIUM, budget: BUDGET.LOW },
  { name: "순대", type: TYPES.SNACK, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: "튀김 모둠", type: TYPES.SNACK, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: "라볶이", type: TYPES.SNACK, spicy: SPICY.HOT, budget: BUDGET.LOW },
  { name: "핫도그", type: TYPES.SNACK, spicy: SPICY.MILD, budget: BUDGET.LOW },

  { name: "떡꼬치", type: TYPES.SNACK, spicy: SPICY.MEDIUM, budget: BUDGET.LOW },
  { name: "소떡소떡", type: TYPES.SNACK, spicy: SPICY.MEDIUM, budget: BUDGET.LOW },
  { name: "콘치즈", type: TYPES.SNACK, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: "주먹밥", type: TYPES.SNACK, spicy: SPICY.MILD, budget: BUDGET.LOW },

  // ===== 중식 =====
  { name: "짜장면", type: TYPES.CHINESE, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: "짬뽕", type: TYPES.CHINESE, spicy: SPICY.HOT, budget: BUDGET.MID },
  { name: "탕수육", type: TYPES.CHINESE, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: "마파두부", type: TYPES.CHINESE, spicy: SPICY.HOT, budget: BUDGET.MID },
  { name: "볶음밥", type: TYPES.CHINESE, spicy: SPICY.MEDIUM, budget: BUDGET.LOW },

  // ===== 일식 =====
  { name: "초밥", type: TYPES.JAPANESE, spicy: SPICY.MILD, budget: BUDGET.HIGH },
  { name: "연어 초밥", type: TYPES.JAPANESE, spicy: SPICY.MILD, budget: BUDGET.HIGH },
  { name: "규카츠", type: TYPES.JAPANESE, spicy: SPICY.MILD, budget: BUDGET.HIGH },
  { name: "돈카츠", type: TYPES.JAPANESE, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: "카레라이스", type: TYPES.JAPANESE, spicy: SPICY.MEDIUM, budget: BUDGET.LOW },
  { name: "우동", type: TYPES.JAPANESE, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: "소바", type: TYPES.JAPANESE, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: "라멘", type: TYPES.JAPANESE, spicy: SPICY.HOT, budget: BUDGET.MID },
  { name: "밀푀유나베", type: TYPES.JAPANESE, spicy: SPICY.MILD, budget: BUDGET.HIGH },

  // ===== 양식 =====
  { name: "피자", type: TYPES.WESTERN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: "크림 파스타", type: TYPES.WESTERN, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: "토마토 파스타", type: TYPES.WESTERN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: "로제 파스타", type: TYPES.WESTERN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: "함박 스테이크", type: TYPES.WESTERN, spicy: SPICY.MILD, budget: BUDGET.HIGH },
  { name: "스테이크", type: TYPES.WESTERN, spicy: SPICY.MILD, budget: BUDGET.HIGH },
  { name: "햄버거", type: TYPES.WESTERN, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: "샌드위치", type: TYPES.WESTERN, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: "샐러드", type: TYPES.WESTERN, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: "리조또", type: TYPES.WESTERN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },

  // ===== 동남아 =====
  { name: "쌀국수", type: TYPES.SEASIA, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: "분짜", type: TYPES.SEASIA, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: "똠얌꿍", type: TYPES.SEASIA, spicy: SPICY.HOT, budget: BUDGET.HIGH },
  { name: "그린 커리", type: TYPES.SEASIA, spicy: SPICY.HOT, budget: BUDGET.MID },
  { name: "팟타이", type: TYPES.SEASIA, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: "나시고렝", type: TYPES.SEASIA, spicy: SPICY.MEDIUM, budget: BUDGET.MID },

  // ===== 기타 =====
  { name: "타코", type: TYPES.OTHER, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: "부리또", type: TYPES.OTHER, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: "퀘사디아", type: TYPES.OTHER, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: "파에야", type: TYPES.OTHER, spicy: SPICY.MEDIUM, budget: BUDGET.HIGH },
];

// =============================
//  3. DOM 요소 가져오기
// =============================
const typeSelect   = document.getElementById("type-select");
const spicySelect  = document.getElementById("spicy-select");
const budgetSelect = document.getElementById("budget-select");
const recommendButton = document.getElementById("recommend-button");
const resultText   = document.getElementById("result-text");

// 혹시라도 id가 안 맞으면 콘솔에 경고 띄우기 (스크립트 안 죽게)
if (!typeSelect || !spicySelect || !budgetSelect || !recommendButton || !resultText) {
  console.warn(
    "메뉴 추천기: HTML 요소 id를 확인해 주세요.\n" +
    "script.js에서 사용하는 id는\n" +
    "type-select, spicy-select, budget-select, recommend-button, result-text 입니다."
  );
}

// =============================
//  4. 조건별 메뉴 필터 함수
// =============================
function filterMenus(selectedType, selectedSpicy, selectedBudget, options = {}) {
  const { ignoreType = false, ignoreSpicy = false, ignoreBudget = false } = options;

  return menus.filter((menu) => {
    const typeMatch =
      ignoreType ||
      selectedType === TYPES.ANY ||
      selectedType === "any" ||
      menu.type === selectedType;

    const spicyMatch =
      ignoreSpicy ||
      selectedSpicy === SPICY.ANY ||
      selectedSpicy === "any" ||
      menu.spicy === selectedSpicy;

    const budgetMatch =
      ignoreBudget ||
      selectedBudget === BUDGET.ANY ||
      selectedBudget === "any" ||
      menu.budget === selectedBudget;

    return typeMatch && spicyMatch && budgetMatch;
  });
}

// =============================
//  5. 랜덤 메뉴 선택 (직전 메뉴랑 되도록 다르게)
// =============================
let lastPickedMenuName = null;

function pickRandomMenu(candidates) {
  if (candidates.length === 0) return null;
  if (candidates.length === 1) {
    lastPickedMenuName = candidates[0].name;
    return candidates[0];
  }

  let picked = null;
  let safetyCount = 0;

  do {
    const idx = Math.floor(Math.random() * candidates.length);
    picked = candidates[idx];
    safetyCount++;
  } while (picked.name === lastPickedMenuName && safetyCount < 10);

  lastPickedMenuName = picked.name;
  return picked;
}

// =============================
//  6. 메뉴 추천 로직
// =============================
function recommendMenu() {
  if (!typeSelect || !spicySelect || !budgetSelect || !resultText) {
    alert("HTML 요소 id가 스크립트와 안 맞아요. 콘솔 경고를 확인해 주세요!");
    return;
  }

  const selectedType   = typeSelect.value;
  const selectedSpicy  = spicySelect.value;
  const selectedBudget = budgetSelect.value;

  const strategies = [
    { options: {}, message: "" },
    { options: { ignoreBudget: true }, message: " (예산 조건을 조금 완화했어요)" },
    { options: { ignoreBudget: true, ignoreSpicy: true }, message: " (매운 정도와 예산 조건을 조금 완화했어요)" },
    { options: { ignoreBudget: true, ignoreSpicy: true, ignoreType: true }, message: " (모든 조건을 조금 완화해서 골랐어요)" },
  ];

  let filtered = [];
  let messageSuffix = "";

  for (const { options, message } of strategies) {
    filtered = filterMenus(selectedType, selectedSpicy, selectedBudget, options);
    if (filtered.length > 0) {
      messageSuffix = message;
      break;
    }
  }

  if (!filtered.length) {
    resultText.textContent = "추천할 메뉴가 없어요. 메뉴 데이터를 한 번 확인해 주세요!";
    return;
  }

  const pickedMenu = pickRandomMenu(filtered);
  resultText.textContent = `추천 메뉴는 "${pickedMenu.name}" 입니다! 😋${messageSuffix}`;
}

// =============================
//  7. 이벤트 연결
// =============================
if (recommendButton) {
  recommendButton.addEventListener("click", recommendMenu);
}
