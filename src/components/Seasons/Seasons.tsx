import Accordion from '../Accordion';
import AccordionGroup from '../AccordionGroup';
import seasonItems from './seasonItems';
import './Seasons.scss';

const Seasons = () => {
  return (
    <AccordionGroup
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, velit?
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons;
