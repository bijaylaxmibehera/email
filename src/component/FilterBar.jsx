export const FilterBar = () => {
  return (
    <>
      <div className="border-black border-[1px] mx-10 my-8 px-5 py-3 relative">
        <h2 className="absolute -top-4  bg-white">Filters</h2>
        <label className="mr-3">
          <input type="checkbox" className="mr-1"/>
          Show unread mail
        </label>
        <label>
          <input type="checkbox"  className="mr-1"/>
          Show starred mail
        </label>
      </div>
    </>
  );
};
