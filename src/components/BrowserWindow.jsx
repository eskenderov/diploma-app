export const BrowserWindow = ({
  url = 'https://www.example.com',
  children,
}) => {
  return (
    <div className="browser-window">
      <div className="browser-toolbar">
        <button disabled className="browser-button">
          {'<'}
        </button>
        <button disabled className="browser-button">
          {'>'}
        </button>
        <button disabled className="browser-button">
          ↻
        </button>
        <input disabled className="browser-url-input" type="text" value={url} />
      </div>
      <div className="browser-content">{children}</div>
    </div>
  );
};
