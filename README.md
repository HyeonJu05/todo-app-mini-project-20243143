# 📝 Todo App Mini Project

## 📌 프로젝트 소개
React + Node.js + MongoDB를 활용한 간단한 Todo 관리 웹 애플리케이션입니다.

사용자는 할 일을 추가, 조회, 완료 체크, 삭제할 수 있습니다.

---

## 🛠️ 기술 스택
- Frontend: React (Vite)
- Backend: Node.js + Express
- Database: MongoDB Atlas

---

## 📂 폴더 구조
todo-app/
├── frontend/   # React
├── backend/    # Express API
└── README.md

---

## 🚀 실행 방법

### 1️⃣ Backend 실행
cd backend
npm install
npm run dev


### 2️⃣ Frontend 실행
cd frontend
npm install
npm run dev


---

## 🔗 API 목록

| 기능 | Method | URL |
|------|--------|-----|
| 전체 조회 | GET | /api/todos |
| 추가 | POST | /api/todos |
| 수정(완료) | PUT | /api/todos/:id |
| 삭제 | DELETE | /api/todos/:id |

---

## ✅ 주요 기능
- 할 일 추가
- 할 일 목록 조회
- 완료 체크 (체크박스)
- 삭제 기능