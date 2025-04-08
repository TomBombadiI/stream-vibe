import Tabs from '@/components/Tabs';
import './Collections.scss';
import collectionGroups from './collectionGroups';
import getIdFromTitle from '@/utils/getIdFromTitle';
import Section from '@/layouts/Section';
import SliderNavigation from '@/components/Slider/components/SliderNavigation';
import Slider from '@/components/Slider';
import CategoryCard from '@/components/CategoryCard';

const Collections = (props: any) => {
  return (
    <Tabs
      className="collections container"
      title="collections"
      isEnableOnlyOnMobile={true}
      items={collectionGroups.map((collectionGroup, index) => ({
        isActive: collectionGroup.isActive,
        title: collectionGroup.title,
        children: (
          <div className='collections__group'>
            <p className='collections__title hidden-mobile'>
              {collectionGroup.title}
            </p>
            {collectionGroup.items.map((collectionItem, index) => {
              const {
                title,
                categoryItems,
                sliderParams,
              } = collectionItem;

              const titleFormatted = `${getIdFromTitle(collectionGroup.title)}-${getIdFromTitle(title)}`;
              const titleId = `${titleFormatted}-title`;
              const sliderNavigationId = `${titleFormatted}-slider-navigation`;

              return (
                <Section
                  className="collections__section"
                  title={title}
                  titleId={titleId}
                  actions={(
                    <SliderNavigation
                      id={sliderNavigationId}
                      mode="tile"
                    />
                  )}
                  isActionsVisibleOnMobile={false}
                  key={index}
                >
                  <Slider
                    sliderParams={sliderParams}
                    navigationTargetElementId={sliderNavigationId}
                    isBeyondTheViewportOnMobileS
                  >
                    {categoryItems.map((categoryItem, index) => (
                      <CategoryCard
                        {...categoryItem}
                        key={index}
                      />
                    ))}
                  </Slider>
                </Section>
              )
            })}
          </div>
        )
      }))}
    />
  )
}

export default Collections;
