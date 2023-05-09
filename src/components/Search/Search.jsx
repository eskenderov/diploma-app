import { UiButton } from 'shared/ui/UiButton';

export const Search = ({ label, error, onSubmit, btnTitle, children }) => {
  return (
    <div className="search">
      <p className="search__label">{label}</p>
      <form className="search__form" onSubmit={onSubmit} autoComplete="off">
        {children}
        <div className="search__error">{error}</div>
        <UiButton label={btnTitle} onClick={onSubmit} type="submit" />
      </form>
    </div>
  );
};
