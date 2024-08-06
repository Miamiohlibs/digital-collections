const API_KEY = process.env.GOOGLE_SITE_SEARCH_API_KEY;
const SEARCH_ENGINE_ID = process.env.GOOGLE_SITE_SEARCH_ENGINE_ID;

async function getData() {
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=lectures`
  );

  return await data.text();
}

export default function GoogleSiteSearch() {
  return <div className="gcse-search">{getData()}</div>;
}
