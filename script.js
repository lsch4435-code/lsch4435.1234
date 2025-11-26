// 메뉴 데이터: 이름, 종류(type), 매운 정도(spicy), 가격대(budget)
const menus = [
    { name: '김치찌개', type: 'korean', spicy: 'medium', budget: 'mid' },
    { name: '된장찌개', type: 'korean', spicy: 'mild', budget: 'mid' },
    { name: '비빔밥', type: 'korean', spicy: 'medium', budget: 'mid' },
    { name: '불고기', type: 'korean', spicy: 'mild', budget: 'high' },
    { name: '삼겹살', type: 'korean', spicy: 'medium', budget: 'high' },

    { name: '짜장면', type: 'chinese', spicy: 'mild', budget: 'low' },
    { name: '짬뽕', type: 'chinese', spicy: 'hot', budget: 'mid' },
    { name: '탕수육', type: 'chinese', spicy: 'mild', budget: 'high' },

    { name: '초밥', type: 'japanese', spicy: 'mild', budget: 'high' },
    { name: '라멘', type: 'japanese', spicy: 'medium', budget: 'mid' },
    { name: '우동', type: 'japanese', spicy: 'mild', budget: 'mid' },

    { name: '떡볶이', type: 'snack', spicy: 'hot', budget: 'low' },
    { name: '김밥', type: 'snack', spicy: 'mild', budget: 'low' },
    { name: '라면', type: 'snack', spicy: 'medium', budget: 'low' },
];

// DOM 요소 가져오기
const typeSelect = document.getElementById('type-select');
const spicySelect = document.getElementById('spicy-select');
const budgetSelect = document.getElementById('budget-select');
const recommendButton = document.getElementById('recommend-button');
const resultText = document.getElementById('result-text');

/**
 * 사용자가 선택한 조건에 맞는 메뉴를 필터링하고,
 * 그 중 하나를 랜덤으로 골라 결과를 화면에 보여주는 함수
 */
function recommendMenu() {
    const selectedType = typeSelect.value;      // 메뉴 종류 (korean, chinese, ...)
    const selectedSpicy = spicySelect.value;    // 매운 정도 (mild, medium, hot)
    const selectedBudget = budgetSelect.value;  // 가격대 (low, mid, high)

    // 1. 조건에 맞게 메뉴 필터링
    const filtered = menus.filter(menu => {
        const typeMatch = (selectedType === 'any') || (menu.type === selectedType);
        const spicyMatch = (selectedSpicy === 'any') || (menu.spicy === selectedSpicy);
        const budgetMatch = (selectedBudget === 'any') || (menu.budget === selectedBudget);
        return typeMatch && spicyMatch && budgetMatch;
    });

    // 2. 조건에 맞는 메뉴가 없는 경우
    if (filtered.length === 0) {
        resultText.textContent = '조건에 맞는 메뉴가 없습니다. 옵션을 조금 더 넓게 선택해 보세요!';
        return;
    }

    // 3. Math.random()을 이용해 랜덤으로 하나 선택
    const randomIndex = Math.floor(Math.random() * filtered.length);
    const pickedMenu = filtered[randomIndex];

    // 4. 결과 문구 구성 & 화면에 출력 (DOM 조작)
    resultText.textContent = `추천 메뉴는 "${pickedMenu.name}" 입니다! 😋`;
}

// 버튼 클릭 이벤트 연결
recommendButton.addEventListener('click', recommendMenu);
