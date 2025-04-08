import classNames from 'classnames';
import './Badge.scss';

type BadgeProps = {
  className?: string,
  mode?: '' | 'accent',
  isBig?: boolean,
  children?: any,
}

const Badge = (props: BadgeProps) => {
  const {
    className,
    mode = '',
    isBig = false,
    children
  } = props;

  return (
    <div
      className={classNames(className, 'badge', {
        [`badge--${mode}`]: mode,
        'badge--big': isBig
      })}
    >
      {children}
    </div>
  )
}

export default Badge;
