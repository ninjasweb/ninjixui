const Header = () => {
  return (
    <header className="w-full border border-red-500 h-[80px]">
      <div className="max-w-[1200px] h-full mx-auto border border-green-500 px-1 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl">Ninjix</h1>
        <div className="flex items-center">
          {/* Nav */}
          <nav className="flex-1">
            <ul className="flex justify-end">
              <li className="mx-2">Home</li>
              <li className="mx-2">About</li>
              <li className="mx-2">Contact</li>
            </ul>
          </nav>
          {/* Search */}
          <div className="">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 p-1"
            />
          </div>
          {/* Social Links */}
          <div className="flex items-center">
            <a href="#" className="mx-2">
              Facebook
            </a>
            <a href="#" className="mx-2">
              Twitter
            </a>
            <a href="#" className="mx-2">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
