import getIdFromTitle from '@/utils/getIdFromTitle';
import './Field.scss';
import classNames from 'classnames';

type FieldProps = {
  id?: string,
  className: string,
  label: string,
  type?: 'text' | 'email' | 'textarea',
  placeholder?: string,
  isRequired?: boolean,
  inputMode?: "text" | "email" | "search" | "tel" | "none" | "url" | "numeric" | "decimal",
  mask?: string
}

const Field = (props: FieldProps) => {
  const {
    id = getIdFromTitle(props.label),
    className,
    label,
    type = 'text',
    placeholder,
    isRequired = false,
    inputMode,
    mask
  } = props;

  const Component = type === 'textarea' ? 'textarea' : 'input';

  const extraAttrs = {};

  if (mask) {
    extraAttrs['data-js-input-mask'] = mask;
  }

  return (
    <div
      className={classNames(className, 'field')}
    >
      <label
        className='field__label'
        htmlFor={id} >
        {label} {isRequired && (
          <span
            className='field__required-star'
            aria-hidden={true}
          >*</span>
        )}
      </label>
      <div className="field__body">
        <Component
          className='field__control'
          id={id}
          type={type}
          placeholder={placeholder}
          required={isRequired}
          inputMode={inputMode}
          {...extraAttrs}
        />
      </div>
    </div>
  )
}

export default Field;
