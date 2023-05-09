export const escapeHtml = (string) => {
  const htmlEscapes = {
    '&': '',
    '<': '',
    '>': '',
    '"': '',
    "'": '',
  };

  const htmlEscaper = /[&<>"']/g;

  return string.replace(htmlEscaper, (match) => htmlEscapes[match]);
};


