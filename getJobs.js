import RSSParser from "rss-parser";

export const getJobs = async (req, res) => {
  const feedURL = "https://careers.moveoneinc.com/rss/all-rss.xml/";
  const parser = new RSSParser({
    customFields: {
      item: ['country', 'description', 'posted_date']
    }
  });

  await parse(res, parser, feedURL);
}

const parse = async (res, parser, url) => {
  let jobPosts = [];
  const feed = await parser.parseURL(url);
  feed.items.forEach(item => {
    jobPosts.push({item});
  })

  res.send(jobPosts);
}
