import React from 'react';

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  return <div className="group bg-zinc-900 col-span">{data.id}</div>;
};

export default MovieCard;
