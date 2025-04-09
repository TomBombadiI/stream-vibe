import classNames from 'classnames';
import './Badge.scss';
import Icon from '@/components/Icon';

type BadgeProps = {
  className?: string,
  mode?: '' | 'accent',
  isBig?: boolean,
  children?: any,
  iconName?: string,
  hasFillIcon?: boolean,
  iconAriaLabel?: string,
}

const Badge = (props: BadgeProps) => {
  const {
    className,
    mode = '',
    isBig = false,
    children,
    iconName,
    hasFillIcon,
    iconAriaLabel
  } = props;

  return (
    <div
      className={classNames(className, 'badge', {
        [`badge--${mode}`]: mode,
        'badge--big': isBig
      })}
    >
      {iconName && (
        <Icon
          className='badge__icon'
          name={iconName}
          hasFill={hasFillIcon}
          ariaLabel={iconAriaLabel}
        />
      )}
      <span>{children}</span>

    </div>
  )
}

export default Badge;
