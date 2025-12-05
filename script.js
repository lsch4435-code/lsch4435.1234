// 메뉴 데이터: 이름, 종류(type), 매운 정도(spicy), 가격대(budget)
const menus = [
  // ===== 한식 (korean) =====

  { name: '김치찌개', type: 'korean', spicy: 'medium', budget: 'mid' },
  { name: '된장찌개', type: 'korean', spicy: 'mild', budget: 'mid' },
  { name: '순두부찌개', type: 'korean', spicy: 'hot', budget: 'mid' },
  { name: '부대찌개', type: 'korean', spicy: 'hot', budget: 'mid' },
  { name: '청국장찌개', type: 'korean', spicy: 'medium', budget: 'mid' },
  { name: '차돌 된장찌개', type: 'korean', spicy: 'mild', budget: 'mid' },
// =============================
//  1. 분류 상수 정의
// =============================
const TYPES = Object.freeze({
  ANY: "any",
  KOREAN: "korean",
  CHINESE: "chinese",
  JAPANESE: "japanese",
  SNACK: "snack", // 분식/간식
  WESTERN: "western",
  SEASIA: "seasia", // 동남아
  OTHER: "other", // 멕시코/스페인 등
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
//    - name: 메뉴 이름
//    - type: 종류 (TYPES.*)
//    - spicy: 매운 정도 (SPICY.*)
//    - budget: 가격대 (BUDGET.*)
// =============================
const menus = [
  // ===== 한식 (korean) =====

  { name: '김치찌개', type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: '된장찌개', type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: '순두부찌개', type: TYPES.KOREAN, spicy: SPICY.HOT, budget: BUDGET.MID },
  { name: '부대찌개', type: TYPES.KOREAN, spicy: SPICY.HOT, budget: BUDGET.MID },
  { name: '청국장찌개', type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: '차돌 된장찌개', type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.MID },

  { name: '비빔밥', type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: '육회 비빔밥', type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.HIGH },
  { name: '불고기', type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.HIGH },
  { name: '불고기 덮밥', type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: '삼겹살', type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.HIGH },
  { name: '삼겹살 덮밥', type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: '항정살 구이', type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.HIGH },
  { name: '한우 구이', type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.HIGH },

  { name: '제육볶음', type: TYPES.KOREAN, spicy: SPICY.HOT, budget: BUDGET.MID },
  { name: '오징어 볶음', type: TYPES.KOREAN, spicy: SPICY.HOT, budget: BUDGET.MID },
  { name: '낙지 볶음', type: TYPES.KOREAN, spicy: SPICY.HOT, budget: BUDGET.MID },
  { name: '쭈꾸미 볶음', type: TYPES.KOREAN, spicy: SPICY.HOT, budget: BUDGET.MID },
  { name: '고추장 불고기', type: TYPES.KOREAN, spicy: SPICY.HOT, budget: BUDGET.MID },

  { name: '돼지국밥', type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: '순대국밥', type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: '콩나물국밥', type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: '소머리국밥', type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },

  { name: '김치찜', type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: '갈비찜', type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.HIGH },
  { name: '수육', type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.HIGH },

  { name: '냉면', type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: '막국수', type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: '비빔면', type: TYPES.KOREAN, spicy: SPICY.HOT, budget: BUDGET.LOW },
  { name: '콩국수', type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: '잔치국수', type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: '닭칼국수', type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: '장칼국수', type: TYPES.KOREAN, spicy: SPICY.HOT, budget: BUDGET.MID },
  { name: '바지락 칼국수', type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: '밀면', type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: '수제비', type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.LOW },

  { name: '김치찜', type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: '갈비', type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.HIGH },
  { name: '뚝배기 불고기 덮밥', type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: '함박스테이크 덮밥', type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.MID },

  { name: '간장게장', type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.HIGH },
  { name: '양념게장', type: TYPES.KOREAN, spicy: SPICY.HOT, budget: BUDGET.HIGH },
  { name: '간장새우 덮밥', type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: '연어장 덮밥', type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: '육회', type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.HIGH },

  { name: '멸치국수', type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: '떡만둣국', type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: '물회', type: TYPES.KOREAN, spicy: SPICY.HOT, budget: BUDGET.MID },
  { name: '회덮밥', type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: '생선조림', type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },

  { name: '야채곱창', type: TYPES.KOREAN, spicy: SPICY.HOT, budget: BUDGET.MID },
  { name: '곱창전골', type: TYPES.KOREAN, spicy: SPICY.HOT, budget: BUDGET.HIGH },
  { name: '막창구이', type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.HIGH },
  { name: '대창구이', type: TYPES.KOREAN, spicy: SPICY.MEDIUM, budget: BUDGET.HIGH },

  { name: '콩나물국', type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: '계란말이', type: TYPES.KOREAN, spicy: SPICY.MILD, budget: BUDGET.LOW },

  // ===== 분식 / 간식 (snack) =====
  { name: '김밥', type: TYPES.SNACK, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: '치즈김밥', type: TYPES.SNACK, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: '참치김밥', type: TYPES.SNACK, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: '떡볶이', type: TYPES.SNACK, spicy: SPICY.MEDIUM, budget: BUDGET.LOW },
  { name: '치즈 떡볶이', type: TYPES.SNACK, spicy: SPICY.MEDIUM, budget: BUDGET.LOW },
  { name: '로제 떡볶이', type: TYPES.SNACK, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: '마라 떡볶이', type: TYPES.SNACK, spicy: SPICY.HOT, budget: BUDGET.MID },
  { name: '순대', type: TYPES.SNACK, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: '튀김 모둠', type: TYPES.SNACK, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: '라볶이', type: TYPES.SNACK, spicy: SPICY.HOT, budget: BUDGET.LOW },
  { name: '핫도그', type: TYPES.SNACK, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: '떡꼬치', type: TYPES.SNACK, spicy: SPICY.MEDIUM, budget: BUDGET.LOW },
  { name: '소떡소떡', type: TYPES.SNACK, spicy: SPICY.MEDIUM, budget: BUDGET.LOW },
  { name: '콘치즈', type: TYPES.SNACK, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: '주먹밥', type: TYPES.SNACK, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: '라면', type: TYPES.SNACK, spicy: SPICY.MEDIUM, budget: BUDGET.LOW },
  { name: '치즈라면', type: TYPES.SNACK, spicy: SPICY.MEDIUM, budget: BUDGET.LOW },
  { name: '떡라면', type: TYPES.SNACK, spicy: SPICY.MEDIUM, budget: BUDGET.LOW },

  // ===== 중식 (chinese) =====
  { name: '짜장면', type: TYPES.CHINESE, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: '짬뽕', type: TYPES.CHINESE, spicy: SPICY.HOT, budget: BUDGET.MID },
  { name: '삼선 짬뽕', type: TYPES.CHINESE, spicy: SPICY.HOT, budget: BUDGET.MID },
  { name: '우동(중식)', type: TYPES.CHINESE, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: '탕수육', type: TYPES.CHINESE, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: '깐풍기', type: TYPES.CHINESE, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: '마파두부', type: TYPES.CHINESE, spicy: SPICY.HOT, budget: BUDGET.MID },
  { name: '볶음밥', type: TYPES.CHINESE, spicy: SPICY.MEDIUM, budget: BUDGET.LOW },
  { name: '잡채밥', type: TYPES.CHINESE, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: '양장피', type: TYPES.CHINESE, spicy: SPICY.MEDIUM, budget: BUDGET.HIGH },

  // ===== 일식 (japanese) =====
  { name: '초밥', type: TYPES.JAPANESE, spicy: SPICY.MILD, budget: BUDGET.HIGH },
  { name: '연어 초밥', type: TYPES.JAPANESE, spicy: SPICY.MILD, budget: BUDGET.HIGH },
  { name: '모둠 초밥', type: TYPES.JAPANESE, spicy: SPICY.MILD, budget: BUDGET.HIGH },
  { name: '규카츠', type: TYPES.JAPANESE, spicy: SPICY.MILD, budget: BUDGET.HIGH },
  { name: '돈카츠', type: TYPES.JAPANESE, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: '카레라이스', type: TYPES.JAPANESE, spicy: SPICY.MEDIUM, budget: BUDGET.LOW },
  { name: '우동', type: TYPES.JAPANESE, spicy: SPICY.MILD, budget: BUDGET.LOW },
  { name: '소바', type: TYPES.JAPANESE, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: '라멘', type: TYPES.JAPANESE, spicy: SPICY.HOT, budget: BUDGET.MID },
  { name: '밀푀유나베', type: TYPES.JAPANESE, spicy: SPICY.MILD, budget: BUDGET.HIGH },
  { name: '오므라이스', type: TYPES.JAPANESE, spicy: SPICY.MILD, budget: BUDGET.MID },

  // ===== 양식 (western) =====
  { name: '피자', type: TYPES.WESTERN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: '크림 파스타', type: TYPES.WESTERN, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: '토마토 파스타', type: TYPES.WESTERN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: '로제 파스타', type: TYPES.WESTERN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: '함박 스테이크', type: TYPES.WESTERN, spicy: SPICY.MILD, budget: BUDGET.HIGH },
  { name: '스테이크', type: TYPES.WESTERN, spicy: SPICY.MILD, budget: BUDGET.HIGH },
  { name: '햄버거', type: TYPES.WESTERN, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: '치즈버거', type: TYPES.WESTERN, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: '샌드위치', type: TYPES.WESTERN, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: '클럽 샌드위치', type: TYPES.WESTERN, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: '샐러드', type: TYPES.WESTERN, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: '리조또', type: TYPES.WESTERN, spicy: SPICY.MEDIUM, budget: BUDGET.MID },

  // ===== 동남아 (seasia) =====
  { name: '쌀국수', type: TYPES.SEASIA, spicy: SPICY.MILD, budget: BUDGET.MID },
  { name: '분짜', type: TYPES.SEASIA, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: '똠얌꿍', type: TYPES.SEASIA, spicy: SPICY.HOT, budget: BUDGET.HIGH },
  { name: '그린 커리', type: TYPES.SEASIA, spicy: SPICY.HOT, budget: BUDGET.MID },
  { name: '팟타이', type: TYPES.SEASIA, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: '나시고렝', type: TYPES.SEASIA, spicy: SPICY.MEDIUM, budget: BUDGET.MID },

  // ===== 기타 (멕시코 / 스페인 등, other) =====
  { name: '타코', type: TYPES.OTHER, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: '부리또', type: TYPES.OTHER, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: '퀘사디아', type: TYPES.OTHER, spicy: SPICY.MEDIUM, budget: BUDGET.MID },
  { name: '파에야', type: TYPES.OTHER, spicy: SPICY.MEDIUM, budget: BUDGET.HIGH },
];

// =============================
//  3. DOM 요소 가져오기
// =============================
const typeSelect = document.getElementById("type-select");
const spicySelect = document.getElementById("spicy-select");
const budgetSelect = document.getElementById("budget-select");
const recommendButton = document.getElementById("recommend-button");
const resultText = document.getElementById("result-text");

// =============================
//  4. 조건별 메뉴 필터 함수
// =============================
function filterMenus(selectedType, selectedSpicy, selectedBudget, options = {}) {
  const { ignoreType = false, ignoreSpicy = false, ignoreBudget = false } = options;

  return menus.filter((menu) => {
    const typeMatch =
      ignoreType || selectedType === TYPES.ANY || selectedType === "any" || menu.type === selectedType;

    const spicyMatch =
      ignoreSpicy || selectedSpicy === SPICY.ANY || selectedSpicy === "any" || menu.spicy === selectedSpicy;

    const budgetMatch =
      ignoreBudget || selectedBudget === BUDGET.ANY || selectedBudget === "any" || menu.budget === selectedBudget;

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
//    - 조건이 빡세면 단계별로 완화
// =============================
function recommendMenu() {
  const selectedType = typeSelect.value;      // 메뉴 종류
  const selectedSpicy = spicySelect.value;    // 매운 정도
  const selectedBudget = budgetSelect.value;  // 가격대

  // 조건 완화 전략 모음
  const strategies = [
    { options: {}, message: "" },
    {
      options: { ignoreBudget: true },
      message: " (예산 조건을 조금 완화했어요)",
    },
    {
      options: { ignoreBudget: true, ignoreSpicy: true },
      message: " (매운 정도와 예산 조건을 조금 완화했어요)",
    },
    {
      options: { ignoreBudget: true, ignoreSpicy: true, ignoreType: true },
      message: " (모든 조건을 조금 완화해서 골랐어요)",
    },
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
    resultText.textContent =
      "추천할 메뉴가 없어요. 메뉴 데이터를 한 번 확인해 주세요!";
    return;
  }

  const pickedMenu = pickRandomMenu(filtered);

  resultText.textContent = `추천 메뉴는 "${pickedMenu.name}" 입니다! 😋${messageSuffix}`;
}

// =============================
//  7. 이벤트 연결
// =============================
recommendButton.addEventListener("click", recommendMenu);

  { name: '비빔밥', type: 'korean', spicy: 'medium', budget: 'mid' },
  { name: '육회 비빔밥', type: 'korean', spicy: 'medium', budget: 'high' },
  { name: '불고기', type: 'korean', spicy: 'mild', budget: 'high' },
  { name: '불고기 덮밥', type: 'korean', spicy: 'mild', budget: 'mid' },
  { name: '삼겹살', type: 'korean', spicy: 'medium', budget: 'high' },
  { name: '삼겹살 덮밥', type: 'korean', spicy: 'medium', budget: 'mid' },
  { name: '항정살 구이', type: 'korean', spicy: 'mild', budget: 'high' },
  { name: '한우 구이', type: 'korean', spicy: 'mild', budget: 'high' },

  { name: '제육볶음', type: 'korean', spicy: 'hot', budget: 'mid' },
  { name: '두루치기', type: 'korean', spicy: 'hot', budget: 'mid' },
  { name: '오삼불고기', type: 'korean', spicy: 'hot', budget: 'mid' },
  { name: '골뱅이 소면', type: 'korean', spicy: 'medium', budget: 'mid' },
  { name: '국물 닭발', type: 'korean', spicy: 'hot', budget: 'mid' },
  { name: '닭강정', type: 'korean', spicy: 'medium', budget: 'mid' },

  { name: '갈비탕', type: 'korean', spicy: 'mild', budget: 'high' },
  { name: '설렁탕', type: 'korean', spicy: 'mild', budget: 'mid' },
  { name: '뼈해장국', type: 'korean', spicy: 'hot', budget: 'mid' },
  { name: '감자탕', type: 'korean', spicy: 'hot', budget: 'mid' },
  { name: '우거지 해장국', type: 'korean', spicy: 'medium', budget: 'mid' },
  { name: '황태 해장국', type: 'korean', spicy: 'medium', budget: 'mid' },
  { name: '육개장', type: 'korean', spicy: 'hot', budget: 'mid' },
  { name: '알탕', type: 'korean', spicy: 'hot', budget: 'mid' },
  { name: '오뎅탕', type: 'korean', spicy: 'mild', budget: 'low' },
  { name: '삼계탕', type: 'korean', spicy: 'mild', budget: 'high' },
  { name: '곱도리탕', type: 'korean', spicy: 'hot', budget: 'high' },
  { name: '낙곱새', type: 'korean', spicy: 'hot', budget: 'high' },

  { name: '돼지국밥', type: 'korean', spicy: 'medium', budget: 'mid' },
  { name: '순대국밥', type: 'korean', spicy: 'medium', budget: 'mid' },

  { name: '족발', type: 'korean', spicy: 'mild', budget: 'high' },
  { name: '보쌈', type: 'korean', spicy: 'mild', budget: 'high' },
  { name: '수육', type: 'korean', spicy: 'mild', budget: 'high' },

  // 밥/면/도시락류
  { name: '오므라이스', type: 'korean', spicy: 'mild', budget: 'mid' },
  { name: '김치볶음밥', type: 'korean', spicy: 'medium', budget: 'low' },
  { name: '스팸 볶음밥', type: 'korean', spicy: 'medium', budget: 'low' },
  { name: '볶음밥(한식)', type: 'korean', spicy: 'mild', budget: 'low' },
  { name: '곤드레밥', type: 'korean', spicy: 'mild', budget: 'mid' },
  { name: '죽(야채죽)', type: 'korean', spicy: 'mild', budget: 'mid' },
  { name: '옛날 도시락', type: 'korean', spicy: 'mild', budget: 'low' },
  { name: '소세지 야채볶음', type: 'korean', spicy: 'mild', budget: 'low' },

  { name: '냉면', type: 'korean', spicy: 'medium', budget: 'mid' },
  { name: '막국수', type: 'korean', spicy: 'medium', budget: 'mid' },
  { name: '비빔면', type: 'korean', spicy: 'hot', budget: 'low' },
  { name: '콩국수', type: 'korean', spicy: 'mild', budget: 'mid' },
  { name: '잔치국수', type: 'korean', spicy: 'mild', budget: 'low' },
  { name: '닭칼국수', type: 'korean', spicy: 'medium', budget: 'mid' },
  { name: '장칼국수', type: 'korean', spicy: 'hot', budget: 'mid' },
  { name: '바지락 칼국수', type: 'korean', spicy: 'mild', budget: 'mid' },
  { name: '밀면', type: 'korean', spicy: 'medium', budget: 'mid' },
  { name: '수제비', type: 'korean', spicy: 'mild', budget: 'low' },

  { name: '김치찜', type: 'korean', spicy: 'medium', budget: 'mid' },
  { name: '갈비', type: 'korean', spicy: 'mild', budget: 'high' },
  { name: '뚝배기 불고기 덮밥', type: 'korean', spicy: 'mild', budget: 'mid' },
  { name: '육회', type: 'korean', spicy: 'mild', budget: 'high' },

  // 전 종류
  { name: '김치전', type: 'korean', spicy: 'medium', budget: 'mid' },
  { name: '해물파전', type: 'korean', spicy: 'mild', budget: 'mid' },
  { name: '감자전', type: 'korean', spicy: 'mild', budget: 'mid' },

  // 치킨 (유명한 메뉴)
  { name: '뿌링클 치킨', type: 'korean', spicy: 'mild', budget: 'high' },
  { name: '후라이드 치킨', type: 'korean', spicy: 'mild', budget: 'high' },
  { name: '양념 치킨', type: 'korean', spicy: 'medium', budget: 'high' },
  { name: '간장 치킨', type: 'korean', spicy: 'mild', budget: 'high' },
  { name: '황금 올리브 치킨', type: 'korean', spicy: 'mild', budget: 'high' },
  { name: '자메이카 통다리 구이', type: 'korean', spicy: 'medium', budget: 'high' },
  { name: '슈프림 양념 치킨', type: 'korean', spicy: 'medium', budget: 'high' },
  { name: '허니콤보 치킨', type: 'korean', spicy: 'mild', budget: 'high' },

  // 곱창/대창 등
  { name: '곱창 구이', type: 'korean', spicy: 'medium', budget: 'high' },
  { name: '대창 구이', type: 'korean', spicy: 'medium', budget: 'high' },
  { name: '순대곱창 볶음', type: 'korean', spicy: 'hot', budget: 'high' },

  // 회
  { name: '연어회', type: 'korean', spicy: 'mild', budget: 'high' },
  { name: '광어회', type: 'korean', spicy: 'mild', budget: 'high' },
  { name: '모둠회', type: 'korean', spicy: 'mild', budget: 'high' },

  // 해산물 구이
  { name: '조개구이', type: 'korean', spicy: 'mild', budget: 'high' },
  { name: '새우구이', type: 'korean', spicy: 'mild', budget: 'high' },

  // ===== 중식 (chinese) =====
  { name: '짜장면', type: 'chinese', spicy: 'mild', budget: 'low' },
  { name: '짬뽕', type: 'chinese', spicy: 'hot', budget: 'mid' },
  { name: '탕수육', type: 'chinese', spicy: 'mild', budget: 'high' },
  { name: '볶음밥(중식)', type: 'chinese', spicy: 'mild', budget: 'low' },
  { name: '고추잡채', type: 'chinese', spicy: 'medium', budget: 'mid' },

  { name: '마라탕', type: 'chinese', spicy: 'hot', budget: 'mid' },
  { name: '마라샹궈', type: 'chinese', spicy: 'hot', budget: 'high' },
  { name: '꿔바로우', type: 'chinese', spicy: 'mild', budget: 'high' },
  { name: '깐풍기', type: 'chinese', spicy: 'medium', budget: 'high' },
  { name: '크림새우', type: 'chinese', spicy: 'mild', budget: 'high' },
  { name: '깐풍새우', type: 'chinese', spicy: 'medium', budget: 'high' },
  { name: '칠리새우', type: 'chinese', spicy: 'hot', budget: 'high' },
  { name: '유산슬', type: 'chinese', spicy: 'mild', budget: 'high' },
  { name: '양꼬치', type: 'chinese', spicy: 'medium', budget: 'high' },
  { name: '멘보샤', type: 'chinese', spicy: 'mild', budget: 'high' },
  { name: '쏸라펀', type: 'chinese', spicy: 'hot', budget: 'mid' },

  { name: '훠궈', type: 'chinese', spicy: 'hot', budget: 'high' },
  { name: '우육면', type: 'chinese', spicy: 'medium', budget: 'mid' },

  // ===== 일식 (japanese) =====
  { name: '초밥', type: 'japanese', spicy: 'mild', budget: 'high' },
  { name: '라멘', type: 'japanese', spicy: 'medium', budget: 'mid' },
  { name: '우동', type: 'japanese', spicy: 'mild', budget: 'mid' },
  { name: '규동', type: 'japanese', spicy: 'mild', budget: 'mid' },
  { name: '가츠동', type: 'japanese', spicy: 'mild', budget: 'mid' },
  { name: '카레라이스', type: 'japanese', spicy: 'medium', budget: 'low' },
  { name: '사케동', type: 'japanese', spicy: 'mild', budget: 'high' },
  { name: '돈카츠 정식', type: 'japanese', spicy: 'mild', budget: 'high' },
  { name: '냉모밀', type: 'japanese', spicy: 'mild', budget: 'mid' },
  { name: '샤브샤브', type: 'japanese', spicy: 'mild', budget: 'high' },
  { name: '타코야끼', type: 'japanese', spicy: 'mild', budget: 'mid' },
  { name: '오꼬노미야끼', type: 'japanese', spicy: 'mild', budget: 'mid' },
  { name: '가라아게', type: 'japanese', spicy: 'mild', budget: 'mid' },

  // ===== 분식/간식 (snack) =====
  { name: '김밥', type: 'snack', spicy: 'mild', budget: 'low' },
  { name: '떡볶이', type: 'snack', spicy: 'hot', budget: 'low' },
  { name: '로제 떡볶이', type: 'snack', spicy: 'medium', budget: 'mid' },
  { name: '짜장 떡볶이', type: 'snack', spicy: 'mild', budget: 'mid' },
  { name: '크림 떡볶이', type: 'snack', spicy: 'mild', budget: 'mid' },
  { name: '치즈볼', type: 'snack', spicy: 'mild', budget: 'mid' },

  { name: '라면', type: 'snack', spicy: 'medium', budget: 'low' },

  { name: '순대', type: 'snack', spicy: 'mild', budget: 'low' },
  { name: '쫄면', type: 'snack', spicy: 'hot', budget: 'low' },
  { name: '튀김 모둠', type: 'snack', spicy: 'mild', budget: 'low' },
  { name: '분식 세트(떡볶이+튀김+순대)', type: 'snack', spicy: 'hot', budget: 'mid' },
  { name: '만두', type: 'snack', spicy: 'mild', budget: 'low' },
  { name: '닭꼬치', type: 'snack', spicy: 'medium', budget: 'low' },

  { name: '붕어빵', type: 'snack', spicy: 'mild', budget: 'low' },
  { name: '호떡', type: 'snack', spicy: 'mild', budget: 'low' },
  { name: '츄러스', type: 'snack', spicy: 'mild', budget: 'low' },
  { name: '델리만쥬', type: 'snack', spicy: 'mild', budget: 'low' },
  { name: '구운 옥수수', type: 'snack', spicy: 'mild', budget: 'low' },
  { name: '핫도그', type: 'snack', spicy: 'mild', budget: 'low' },
  { name: '모짜렐라 핫도그', type: 'snack', spicy: 'mild', budget: 'mid' },
  { name: '와플', type: 'snack', spicy: 'mild', budget: 'mid' },
  { name: '생크림 케이크', type: 'snack', spicy: 'mild', budget: 'high' },
  { name: '크레이프 케이크', type: 'snack', spicy: 'mild', budget: 'high' },

  // ===== 양식 (western) =====
  { name: '로제 파스타', type: 'western', spicy: 'medium', budget: 'mid' },
  { name: '까르보나라 파스타', type: 'western', spicy: 'mild', budget: 'mid' },
  { name: '알리오 올리오 파스타', type: 'western', spicy: 'mild', budget: 'mid' },
  { name: '크림 파스타', type: 'western', spicy: 'mild', budget: 'mid' },
  { name: '불닭 까르보나라 파스타', type: 'western', spicy: 'hot', budget: 'mid' },

  { name: '마르게리타 피자', type: 'western', spicy: 'mild', budget: 'high' },
  { name: '페퍼로니 피자', type: 'western', spicy: 'mild', budget: 'high' },
  { name: '고르곤졸라 피자', type: 'western', spicy: 'mild', budget: 'high' },
  { name: '불고기 피자', type: 'western', spicy: 'mild', budget: 'high' },
  { name: '새우 피자', type: 'western', spicy: 'mild', budget: 'high' },

  { name: '함박스테이크', type: 'western', spicy: 'mild', budget: 'high' },
  { name: '리조또', type: 'western', spicy: 'mild', budget: 'high' },
  { name: '햄버거 세트', type: 'western', spicy: 'mild', budget: 'mid' },
  { name: '치즈버거 세트', type: 'western', spicy: 'mild', budget: 'mid' },

  // ===== 동남아 (seasia) =====
  { name: '쌀국수(베트남)', type: 'seasia', spicy: 'mild', budget: 'mid' },
  { name: '분짜(베트남)', type: 'seasia', spicy: 'mild', budget: 'mid' },
  { name: '반미(베트남식 샌드위치)', type: 'seasia', spicy: 'mild', budget: 'low' },
  { name: '짜조(베트남 춘권)', type: 'seasia', spicy: 'mild', budget: 'low' },

  { name: '팟타이(태국)', type: 'seasia', spicy: 'mild', budget: 'mid' },
  { name: '뿌팟퐁커리(태국)', type: 'seasia', spicy: 'medium', budget: 'high' },
  { name: '똠얌꿍(태국)', type: 'seasia', spicy: 'hot', budget: 'high' },
  { name: '그린 커리(태국)', type: 'seasia', spicy: 'hot', budget: 'high' },

  // ===== 기타 (other: 스페인/멕시코 등) =====
  { name: '빠에야(스페인)', type: 'other', spicy: 'mild', budget: 'high' },
  { name: '감바스 알 아히요(스페인)', type: 'other', spicy: 'mild', budget: 'high' },
  { name: '스페인식 또르티야(감자 오믈렛)', type: 'other', spicy: 'mild', budget: 'mid' },
  { name: '타코', type: 'other', spicy: 'medium', budget: 'mid' },
  // ===== 추가 메뉴 =====
  { name: '간장게장', type: 'korean', spicy: 'mild', budget: 'high' },
  { name: '양념게장', type: 'korean', spicy: 'medium', budget: 'high' },
  { name: '멸치국수', type: 'korean', spicy: 'mild', budget: 'low' },
  { name: '떡만둣국', type: 'korean', spicy: 'mild', budget: 'mid' },
  { name: '콩나물국', type: 'korean', spicy: 'mild', budget: 'low' },
  { name: '전골', type: 'korean', spicy: 'medium', budget: 'mid' },
  { name: '생선조림', type: 'korean', spicy: 'medium', budget: 'mid' },
  { name: '물회', type: 'korean', spicy: 'medium', budget: 'mid' },
  { name: '회덮밥', type: 'korean', spicy: 'medium', budget: 'mid' },
  { name: '야채곱창', type: 'korean', spicy: 'hot', budget: 'mid' },

  { name: '규카츠', type: 'japanese', spicy: 'mild', budget: 'high' },
  { name: '돈까스', type: 'japanese', spicy: 'mild', budget: 'mid' },
  { name: '소바', type: 'japanese', spicy: 'mild', budget: 'mid' },
  { name: '밀푀유나베', type: 'japanese', spicy: 'mild', budget: 'high' },

  { name: '계란말이', type: 'korean', spicy: 'mild', budget: 'low' },
  { name: '샌드위치', type: 'western', spicy: 'mild', budget: 'mid' },
  { name: '햄버거', type: 'western', spicy: 'mild', budget: 'mid' },
  { name: '샐러드', type: 'western', spicy: 'mild', budget: 'mid' },

  { name: '떡꼬치', type: 'snack', spicy: 'medium', budget: 'low' },
  { name: '소떡소떡', type: 'snack', spicy: 'medium', budget: 'low' },
  { name: '콘치즈', type: 'snack', spicy: 'mild', budget: 'low' },
  { name: '주먹밥', type: 'snack', spicy: 'mild', budget: 'low' },

];


// DOM 요소 가져오기
const typeSelect = document.getElementById('type-select');
const spicySelect = document.getElementById('spicy-select');
const budgetSelect = document.getElementById('budget-select');
const recommendButton = document.getElementById('recommend-button');
const resultText = document.getElementById('result-text');

/**
 * 조건별로 메뉴 필터링하는 헬퍼 함수
 */
function filterMenus(selectedType, selectedSpicy, selectedBudget, options = {}) {
  const { ignoreType = false, ignoreSpicy = false, ignoreBudget = false } = options;

  return menus.filter(menu => {
    const typeMatch =
      ignoreType ||
      selectedType === 'any' ||
      menu.type === selectedType;

    const spicyMatch =
      ignoreSpicy ||
      selectedSpicy === 'any' ||
      menu.spicy === selectedSpicy;

    const budgetMatch =
      ignoreBudget ||
      selectedBudget === 'any' ||
      menu.budget === selectedBudget;

    return typeMatch && spicyMatch && budgetMatch;
  });
}

/**
 * 사용자가 선택한 조건에 맞는 메뉴를 필터링하고,
 * 조건이 너무 빡세서 없으면 자동으로 조금씩 완화해서
 * 결국에는 무조건 하나는 추천해주는 함수
 */
function recommendMenu() {
  const selectedType = typeSelect.value;      // 메뉴 종류
  const selectedSpicy = spicySelect.value;    // 매운 정도
  const selectedBudget = budgetSelect.value;  // 가격대

  let filtered = [];
  let messageSuffix = '';

  // 1단계: 모든 조건 그대로 적용
  filtered = filterMenus(selectedType, selectedSpicy, selectedBudget);
  if (!filtered.length) {
    // 2단계: 예산 무시
    filtered = filterMenus(selectedType, selectedSpicy, selectedBudget, { ignoreBudget: true });
    messageSuffix = ' (예산 조건을 조금 완화했어요)';
  }
  if (!filtered.length) {
    // 3단계: 예산 + 매운 정도 둘 다 무시, 종류(type)는 유지
    filtered = filterMenus(selectedType, selectedSpicy, selectedBudget, {
      ignoreBudget: true,
      ignoreSpicy: true,
    });
    messageSuffix = ' (매운 정도와 예산 조건을 조금 완화했어요)';
  }
  if (!filtered.length) {
    // 4단계: 종류(type)까지 무시 → 전체 메뉴 중에서 랜덤
    filtered = filterMenus(selectedType, selectedSpicy, selectedBudget, {
      ignoreBudget: true,
      ignoreSpicy: true,
      ignoreType: true,
    });
    messageSuffix = ' (모든 조건을 조금 완화해서 골랐어요)';
  }

  const randomIndex = Math.floor(Math.random() * filtered.length);
  const pickedMenu = filtered[randomIndex];

  resultText.textContent = `추천 메뉴는 "${pickedMenu.name}" 입니다! 😋${messageSuffix}`;
}

// 버튼 클릭 이벤트 연결 (한 번만!)
recommendButton.addEventListener('click', recommendMenu);
