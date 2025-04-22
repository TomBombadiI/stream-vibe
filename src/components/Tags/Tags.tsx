import './Tags.scss';

type TagsProps = {
  items?: string[]
}

const Tags = (props: TagsProps) => {
  const {
    items = [],
  } = props;

  return (
    <div className="tags">
      <ul className="tags__list">
        {items.map((tag, index) => (
          <li className="tags__item" key={index}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tags;
