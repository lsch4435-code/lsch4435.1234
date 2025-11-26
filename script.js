// 메뉴 데이터: 이름, 종류(type), 매운 정도(spicy), 가격대(budget)
const menus = [
  // ===== 한식 (korean) =====
  { name: '김치찌개', type: 'korean', spicy: 'medium', budget: 'mid' },
  { name: '된장찌개', type: 'korean', spicy: 'mild', budget: 'mid' },
  { name: '순두부찌개', type: 'korean', spicy: 'hot', budget: 'mid' },
  { name: '부대찌개', type: 'korean', spicy: 'hot', budget: 'mid' },
  { name: '청국장찌개', type: 'korean', spicy: 'medium', budget: 'mid' },
  { name: '차돌 된장찌개', type: 'korean', spicy: 'mild', budget: 'mid' },

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

  // ===== 분식/간식/기타 (snack) =====
  { name: '김밥', type: 'snack', spicy: 'mild', budget: 'low' },
  { name: '떡볶이', type: 'snack', spicy: 'hot', budget: 'low' },
  { name: '로제 떡볶이', type: 'snack', spicy: 'medium', budget: 'mid' },
  { name: '짜장 떡볶이', type: 'snack', spicy: 'mild', budget: 'mid' },
  { name: '크림 떡볶이', type: 'snack', spicy: 'mild', budget: 'mid' },
  { name: '치즈볼', type: 'snack', spicy: 'mild', budget: 'mid' },

  // 라면: 종류 통합 → 그냥 라면 하나만
  { name: '라면', type: 'snack', spicy: 'medium', budget: 'low' },

  // 분식/야식
  { name: '순대', type: 'snack', spicy: 'mild', budget: 'low' },
  { name: '쫄면', type: 'snack', spicy: 'hot', budget: 'low' },
  { name: '튀김 모둠', type: 'snack', spicy: 'mild', budget: 'low' },
  { name: '분식 세트(떡볶이+튀김+순대)', type: 'snack', spicy: 'hot', budget: 'mid' },
  { name: '만두', type: 'snack', spicy: 'mild', budget: 'low' },
  { name: '닭꼬치', type: 'snack', spicy: 'medium', budget: 'low' },

  // 간식/디저트
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

  // 파스타 / 양식 / 피자
  { name: '로제 파스타', type: 'snack', spicy: 'medium', budget: 'mid' },
  { name: '까르보나라 파스타', type: 'snack', spicy: 'mild', budget: 'mid' },
  { name: '알리오 올리오 파스타', type: 'snack', spicy: 'mild', budget: 'mid' },
  { name: '크림 파스타', type: 'snack', spicy: 'mild', budget: 'mid' },
  { name: '불닭 까르보나라 파스타', type: 'snack', spicy: 'hot', budget: 'mid' },

  { name: '마르게리타 피자', type: 'snack', spicy: 'mild', budget: 'high' },
  { name: '페퍼로니 피자', type: 'snack', spicy: 'mild', budget: 'high' },
  { name: '고르곤졸라 피자', type: 'snack', spicy: 'mild', budget: 'high' },
  { name: '불고기 피자', type: 'snack', spicy: 'mild', budget: 'high' },
  { name: '새우 피자', type: 'snack', spicy: 'mild', budget: 'high' },

  { name: '함박스테이크', type: 'snack', spicy: 'mild', budget: 'high' },
  { name: '리조또', type: 'snack', spicy: 'mild', budget: 'high' },
  { name: '햄버거 세트', type: 'snack', spicy: 'mild', budget: 'mid' },
  { name: '치즈버거 세트', type: 'snack', spicy: 'mild', budget: 'mid' },

  // 동남아 / 멕시코 / 스페인 등
  { name: '쌀국수(베트남)', type: 'snack', spicy: 'mild', budget: 'mid' },
  { name: '분짜(베트남)', type: 'snack', spicy: 'mild', budget: 'mid' },
  { name: '반미(베트남식 샌드위치)', type: 'snack', spicy: 'mild', budget: 'low' },
  { name: '짜조(베트남 춘권)', type: 'snack', spicy: 'mild', budget: 'low' },

  { name: '팟타이(태국)', type: 'snack', spicy: 'mild', budget: 'mid' },
  { name: '뿌팟퐁커리(태국)', type: 'snack', spicy: 'medium', budget: 'high' },
  { name: '똠얌꿍(태국)', type: 'snack', spicy: 'hot', budget: 'high' },
  { name: '그린 커리(태국)', type: 'snack', spicy: 'hot', budget: 'high' },

  { name: '빠에야(스페인)', type: 'snack', spicy: 'mild', budget: 'high' },
  { name: '감바스 알 아히요(스페인)', type: 'snack', spicy: 'mild', budget: 'high' },
  { name: '스페인식 또르티야(감자 오믈렛)', type: 'snack', spicy: 'mild', budget: 'mid' },

  { name: '타코', type: 'snack', spicy: 'medium', budget: 'mid' },
];
