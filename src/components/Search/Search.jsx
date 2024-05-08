function Search() {
  return (
    <div className="join">
      <div>
        <div>
          <input
            className="input w-80 input-bordered join-item"
            placeholder="Search"
          />
        </div>
      </div>
      <button className="btn join-item hover:bg-orange-700 bg-orange-600 text-white text-base">
        Search
      </button>
    </div>
  )
}

export default Search
