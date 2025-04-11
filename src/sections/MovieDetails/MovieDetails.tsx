import SliderNavigation from '@/components/Slider/components/SliderNavigation';
import './MovieDetails.scss';
import Slider from '@/components/Slider';
import PersonCard from '@/components/PersonCard';
import Button from '@/components/Button';
import ReviewCard from '@/components/ReviewCard';

const MovieDetails = (props: any) => {
  const titleId = 'movie-details-title';
  const castSliderNavigationId = 'movie-cast-slider-navigation';

  const castItems = [
    { imgSrc: '/src/assets/images/people/cast.jpg', imgAlt: 'Ivan Ivanov' },
    { imgSrc: '/src/assets/images/people/cast.jpg', imgAlt: 'Ivan Ivanov' },
    { imgSrc: '/src/assets/images/people/cast.jpg', imgAlt: 'Ivan Ivanov' },
    { imgSrc: '/src/assets/images/people/cast.jpg', imgAlt: 'Ivan Ivanov' },
    { imgSrc: '/src/assets/images/people/cast.jpg', imgAlt: 'Ivan Ivanov' },
    { imgSrc: '/src/assets/images/people/cast.jpg', imgAlt: 'Ivan Ivanov' },
    { imgSrc: '/src/assets/images/people/cast.jpg', imgAlt: 'Ivan Ivanov' },
    { imgSrc: '/src/assets/images/people/cast.jpg', imgAlt: 'Ivan Ivanov' },
    { imgSrc: '/src/assets/images/people/cast.jpg', imgAlt: 'Ivan Ivanov' },
  ];

  const reviewItems = [
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
  ];

  return (
    <section
      className="movie-details container"
      aria-labelledby={titleId}
    >
      <h2 className="visually-hidden" id={titleId}>
        Detailed movie information
      </h2>
      <div className="movie-details__main">
        <div className="movie-details__panel">
          <div className="movie-details__group">
            <h3 className="movie-details__title">Description</h3>
            <div className="movie-details__description">
              <p>
                A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.
              </p>
            </div>
          </div>
        </div>
        <div className="movie-details__panel">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">Cast</h3>
            <SliderNavigation
              id={castSliderNavigationId}
              hasPagination={false}
              mode='rounded'
              buttonMode='black08'
            />

          </header>
          <Slider
            navigationTargetElementId={castSliderNavigationId}
            hasScrollbarOnMobile={false}
            sliderParams={{
              slidesPerView: 'auto',
              spaceBetween: 10,
              breakpoints: {
                1024: {
                  slidesPerView: 'auto',
                  spaceBetween: 20,
                  allowTouchMove: false,
                }
              }
            }}
          >
            {castItems.map((castItem, index) => (
              <PersonCard
                {...castItem}
                key={index}
              />
            ))}
          </Slider>
        </div>
        <div className="movie-details__panel">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">Reviews</h3>
            <Button
              mode='black08'
              iconName='plus'
              label='Add your Review'
              href='/'
            />
          </header>
          <Slider
            navigationMode='rounded'
            isNavigationHiddenMobile={false}
            hasScrollbarOnMobile={false}
            sliderParams={{
              slidesPerView: 2,
              slidesPerGroup: 2,
              breakpoints: {
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 16
                },
                1024: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 20,
                  allowTouchMove: false,
                }
              }
            }}
          >
            {reviewItems.map((reviewItem, index) => (
              <ReviewCard
                {...reviewItem}
                key={index}
              />
            ))}
          </Slider>
        </div>
      </div>
      <aside className="movie-details__info">
        <div className="movie-details__panel"></div>
      </aside>
    </section>
  )
}

export default MovieDetails;
