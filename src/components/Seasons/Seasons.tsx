import Accordion from '../Accordion';
import AccordionGroup from '../AccordionGroup';
import EpisodeCard from '../EpisodeCard';
import seasonItems from './seasonItems';
import './Seasons.scss';

const Seasons = () => {
  return (
    <AccordionGroup
      className='seasons'
      mode='dark'
      isOrderedList={false}
    >
      {seasonItems.map(({ title, subtitle, episods }, index) => (
        <Accordion
          title={title}
          subtitle={subtitle}
          id={`season-${index}`}
          name='seasons'
          isOpen={index === 0}
          titleLevelClassName='h4'
          isArrowButton
          key={index}
        >
          <ul className='seasons__list'>
            {episods.map((episode, index) => (
              <li className="seasons__item" key={index}>
                <EpisodeCard {...episode} />
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons;
