import { useEffect, useState } from 'react';
import axios from 'axios';
import * as types from '../utils/types';

// TODO add refetchArticles functionality

const url = 'https://getpocket.com/v3/get';
const cors = 'http://127.0.0.1:8080/';
const keys = {
  consumer_key: process.env.POCKET_CONSUMER_KEY,
  access_token: process.env.POCKET_ACCESS_TOKEN,
};

const refetchUrl = '';

const usePocketFeed = () => {
  const [articles, setArticles] = useState<Array<never> | Array<types.Article>>(
    []
  );
  const [lastTime, setLastTime] = useState(null);

  const refetchArticles = async () => {
    if (!lastTime) {
      try {
        const response = await axios.post(`${cors}${url}`, {
          consumer_key: keys.consumer_key,
          access_token: keys.access_token,
          state: 'all',
          sort: 'newest',
          detailType: 'complete',
        });
        const articlesResponse: Array<types.Article> = Object.values(
          response.data.list
        );
        const sortedArticles: Array<types.Article> = articlesResponse.sort(
          (a: types.Article, b: types.Article) => b.time_added - a.time_added
        );
        setArticles(sortedArticles);
        setLastTime(response.data.since);
      } catch (error) {
        console.log(error);
      }
    } else if (lastTime < Date.now()) {
      return;
      // make a difference a debounce rate
      const { data } = await axios.get(refetchUrl);
      console.log('refetch data', data);
      setArticles(articles.concat(data));
      setLastTime(data.time);
    }
  };
  useEffect(() => {
    refetchArticles();
  }, []);

  return [articles, refetchArticles()];
};

export default usePocketFeed;
