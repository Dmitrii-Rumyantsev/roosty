export default function Navbar() {
    return (
      <nav className="bg-white p-4 shadow-sm">
        <div className="container d-flex justify-content-between align-items-center">
          <a href="#" className="text-2xl font-bold text-dark text-decoration-none">Roosty</a>
          <div className="ml-auto">
            <button className="btn btn-light mx-2">Авторизация</button>
            <button className="btn btn-light">Вход</button>
          </div>
        </div>
      </nav>
    );
  }
  