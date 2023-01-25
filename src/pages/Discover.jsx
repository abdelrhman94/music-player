import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';

import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { useState } from 'react';

const Discover = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  const [genreTitle, setGenreTitle] = useState('Pop');

  if (isFetching) return <Loader title='Loading songs...' />;
  if (error) return <Error />;

  return (
    <div className='flex flex-col'>
      <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
        <h2 className='font-bold text-3xl text-white text-left'>
          Discover {genreTitle}
        </h2>
        <select
          onChange={(event) => { setGenreTitle(event.target.value)}}
          value={genreTitle}
          className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5 '
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.title}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {data?.tracks.map((song, index) => (
          <SongCard key={song.key} song={song} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
