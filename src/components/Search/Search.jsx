export const Search = ({
  label,
  value,
  placeholder,
  onChange,
  onSubmit,
  btnTitle,
}) => {
  return (
    <div className="search">
      <p className="search__label">{label}</p>
      <form className="search__form" onSubmit={onSubmit}>
        <input
          type="text"
          className="search__input"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <button type="submit" className="btn search__btn">
          {btnTitle}
        </button>
      </form>
    </div>
  );
};
