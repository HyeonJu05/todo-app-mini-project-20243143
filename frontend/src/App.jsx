import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const API = 'http://localhost:5000/api/todos';

  // 조회
  const fetchTodos = async () => {
    const res = await axios.get(API);
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // 추가
  const addTodo = async () => {
    if (!text.trim()) return;
    await axios.post(API, { title: text });
    setText('');
    fetchTodos();
  };

  // 완료 체크
  const toggleTodo = async (id, completed) => {
    await axios.put(`${API}/${id}`, { completed: !completed });
    fetchTodos();
  };

  // 삭제
  const deleteTodo = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTodos();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        
        <h1 className="text-2xl font-bold text-center mb-4">
          📝 Todo App
        </h1>

        {/* 개수 표시 */}
        <p className="text-sm text-gray-500 mb-4 text-center">
          총 {todos.length}개
        </p>

        {/* 입력창 */}
        <div className="flex gap-2 mb-4">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTodo()}
            placeholder="할 일을 입력하세요"
            className="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-lg"
          >
            추가
          </button>
        </div>

        {/* 리스트 */}
        <div className="space-y-2">
          {todos.length === 0 && (
            <p className="text-center text-gray-400">
              할 일이 없습니다
            </p>
          )}

          {todos.map(todo => (
            <div
              key={todo._id}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:shadow"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo._id, todo.completed)}
                  className="w-4 h-4"
                />

                <span
                  className={`cursor-pointer ${
                    todo.completed
                      ? 'line-through text-gray-400'
                      : 'text-gray-800'
                  }`}
                >
                  {todo.title}
                </span>
              </div>

              <button
                onClick={() => deleteTodo(todo._id)}
                className="text-red-500 hover:text-red-700"
              >
                삭제
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;