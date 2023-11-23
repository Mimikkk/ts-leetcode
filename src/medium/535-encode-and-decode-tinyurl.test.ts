const forward = new Map<string, string>();
const inverse = new Map<string, string>();

const encode = (longUrl: string): string => {
  let shortUrl = forward.get(longUrl);
  if (shortUrl) return shortUrl;

  shortUrl = `${forward.size}`;
  forward.set(longUrl, shortUrl);
  inverse.set(shortUrl, longUrl);
  return shortUrl;
};

const decode = (shortUrl: string): string => {
  let longUrl = inverse.get(shortUrl);
  if (longUrl) return longUrl;

  longUrl = `${shortUrl}`;
  forward.set(longUrl, shortUrl);
  inverse.set(shortUrl, longUrl);
  return longUrl;
};
