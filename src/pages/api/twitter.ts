import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'twitter-api-sdk';

export default async function getTweet(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // 以下は、下記URLの抜粋。
    // https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent#tab1
    
    // Pass auth credentials to the library client
    const twitterClient = new Client(process.env.TWITTER_BEARER_TOKEN as string);

    const recentSearch = await twitterClient.tweets.tweetsRecentSearch({
      //One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length
      query: '(from:pitang1965)',

      //A comma separated list of fields to expand.
      expansions: ['author_id'],

      //A comma separated list of User fields to display.
      'tweet.fields': ['created_at'],

      //A comma separated list of User fields to display.
      "user.fields": ["profile_image_url"],

      //The maximum number of results
      max_results: 10,
    });

    res.status(200).json(recentSearch);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
  }
}