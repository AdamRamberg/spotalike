import fetch from 'isomorphic-unfetch';

const fetchWithParams = async (url, params = {}) => {
  // Based on: https://github.com/github/fetch/issues/256#issuecomment-241613757
  const esc = encodeURIComponent;
  const query = Object.keys(params)
    .map(k => `${esc(k)}=${esc(params[k])}`)
    .join('&');
  const fullUrl = `${url}${query ? `?${query}` : ''}`;
  const res = await fetch(fullUrl);
  const json = await res.json();
  return json;
};

export default fetchWithParams;
