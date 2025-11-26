// 1. 필요한 DOM 요소 가져오기
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

/**
 * 새로운 할 일 항목을 생성하고 목록에 추가하는 함수
 */
function addTodoItem() {
    // 1. 사용자 입력 값 가져오기 및 공백 제거
    const todoText = todoInput.value.trim();

    // 2. 입력 값 유효성 검사 (빈 문자열 방지)
    if (todoText === '') {
        alert('할 일을 입력해 주세요.');
        return; // 함수 실행 중단
    }

    // 3. **DOM 조작:** 새로운 <li> 요소 생성 및 내용 구성
    
    // 3-1. <li> 요소 생성 및 클래스 추가
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');
    
    // 3-2. 텍스트를 담을 <span> 생성
    const textSpan = document.createElement('span');
    textSpan.textContent = todoText;

    // 3-3. '삭제' 버튼 생성 및 클래스 추가
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.classList.add('delete-btn');
    
    // 3-4. **이벤트 리스너:** 삭제 버튼에 클릭 이벤트 연결
    deleteButton.addEventListener('click', function() {
        // 클릭된 버튼의 부모 요소(<li>)를 목록(<ul>)에서 제거합니다.
        todoList.removeChild(listItem);
    });

    // 3-5. <li>에 텍스트와 버튼을 자식 요소로 추가
    listItem.appendChild(textSpan);
    listItem.appendChild(deleteButton);
    
    // 3-6. **DOM 조작:** 완성된 <li>를 <ul> 목록에 추가
    todoList.appendChild(listItem);

    // 4. 입력 필드 초기화 및 포커스 재설정
    todoInput.value = '';
    todoInput.focus();
}

// 5. '추가' 버튼에 클릭 이벤트 연결
addButton.addEventListener('click', addTodoItem);

// 6. Enter 키를 눌러도 항목이 추가되도록 이벤트 연결 (사용자 편의성)
todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodoItem();
    }
});