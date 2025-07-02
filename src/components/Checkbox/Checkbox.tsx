import getIdFromTitle from '@/utils/getIdFromTitle';
import './Checkbox.scss';
import classNames from 'classnames';

type CheckboxProps = {
  id?: string;
  className?: string;
  label: string;
  isRequired?: boolean;
}

const Checkbox = (props: CheckboxProps) => {
  const {
    id = getIdFromTitle(props.label),
    className,
    label,
    isRequired = false,
  } = props;

  return (
    <label
      className={classNames(className, 'checkbox')}
      htmlFor={id}
    >
      <input
        id={id}
        className='checkbox__input'
        type="checkbox"
        required={isRequired}
      />
      <span className='checkbox__label'>{label}</span>
    </label>
  );
}

export default Checkbox;
