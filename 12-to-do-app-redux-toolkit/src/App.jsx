import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center p-6 overflow-hidden">
      
      {/* Floating shapes */}
      <div className="absolute top-0 left-1/4 w-40 h-40 bg-purple-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 right-0 w-60 h-60 bg-pink-200 rounded-full opacity-20 animate-ping"></div>
      <div className="absolute bottom-0 left-0 w-52 h-52 bg-blue-200 rounded-full opacity-25 animate-pulse"></div>
      
      {/* Header */}
      <h1 className="relative text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-6 z-10">
        React Redux Todo App
      </h1>
      
      {/* Sticky Add Todo Form */}
      <div className="relative z-10 w-full flex justify-center sticky top-4 bg-white/30 backdrop-blur-md p-4 rounded-2xl shadow-lg mb-6">
        <AddTodo />
      </div>
      
      {/* Todo List */}
      <div className="relative z-10 w-full flex justify-center">
        <Todo />
      </div>
      
    </div>
  );
}

export default App;
