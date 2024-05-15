
import React, { Suspense } from 'react';


const LazyBanner = React.lazy(() => import('./Banner'));

const Home = () => {
  return (
    <Suspense fallback={<div><h1 className='text-center h-5 text-gray-700'>Loading...</h1></div>}>
      <LazyBanner />
    </Suspense>
  );
}

export default Home;
