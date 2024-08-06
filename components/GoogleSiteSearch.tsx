export default async function GoogleSiteSearch() {
  await fetch(`https://cse.google.com/cse.js?cx=d11ec13d3a7b04466`);
  return <div className="gcse-search"></div>;
}
