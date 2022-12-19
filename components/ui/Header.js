export default function Header() {
  return (
    <header className="p-4 lg:px-8 sticky top-0 bg-stone-50 z-50">
      <nav className="flex justify-between items-center">
        <div>
          <div className="text-2xl font-semibold">Infinitea</div>
          <a href="https://www.unsplash.com">
            <div className="text-xs">
              Photos provided by
              <span className="font-semibold"> Unsplash</span>
            </div>
          </a>
        </div>
        <div>
          <a href="https://github.com">
            <div>GitHub</div>
          </a>
        </div>
      </nav>
    </header>
  );
}
