import MovieBannerCard from '@/components/MovieBannerCard';
import './MovieBanner.scss';

const MovieBanner = () => {
  const titleId = 'movie-banner-title';

  return (
    <section
      className="container"
      aria-labelledby={titleId}
    >
      <MovieBannerCard
        title='Kantara'
        TitleTag='h1'
        titleId={titleId}
        description='A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.'
        imageSrc='/src/assets/images/movie-banner/2.png'
        isSmallPaddingY
      />
    </section>
  )
}

export default MovieBanner;
