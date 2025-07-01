import MovieBannerCard from '@/components/MovieBannerCard';
import './ShowBanner.scss';

const ShowBanner = () => {
  const titleId = 'show-banner-title';

  return (
    <section
      className="container"
      aria-labelledby={titleId}
    >
      <MovieBannerCard
        title='Stranger Things'
        TitleTag='h1'
        titleId='show-banner-title'
        description='When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.'
        imageSrc='/src/assets/images/movie-banner/3.png'
        isSmallPaddingY
      />
    </section>
  )
}

export default ShowBanner;
