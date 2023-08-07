import React from 'react';

import { isEmpty } from 'lodash';

interface MovieListProps {
  data: Record<string, any>;
  title: string;
}

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
  if (isEmpty(data)) {
    return null;
  }

  return <div className="px-4 md:px-12 mt-4 space-y-8"></div>;
};

export default MovieList;
