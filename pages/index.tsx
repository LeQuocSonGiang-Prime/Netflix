import { NextPageContext } from 'next';
import { getSession, signOut } from 'next-auth/react';

import Navbar from '@/components/Navbar';
import BillBoard from '@/components/BillBoard';
import MovieList from '@/components/MovieList';

import useMovieList from '@/hooks/useMovieList';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default function Home() {
  const { data: movies = [] } = useMovieList();
  console.log(movies);
  return (
    <>
      <Navbar />
      <BillBoard />
      <div className="pb-40">
        <MovieList title="Trending Movie" data={movies} />
      </div>
    </>
  );
}
