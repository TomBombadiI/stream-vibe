import './Logo.scss';
import classNames from 'classnames';
import logoImgSrc from '@/assets/images/logo.svg'

type LogoProps = {
  className?: string;
  loading?: 'eager' | 'lazy';
}

const Logo = (props: LogoProps) => {
  const {
    className,
    loading = 'lazy',
  } = props;

  const title: string = 'Home';

  return (
    <a
      className={classNames(className, 'logo')}
      href="/"
      title={title}
      aria-label={title}
    >

      <img
        className='logo__image'
        src={logoImgSrc}
        alt=''
        width={199}
        height={60}
        loading={loading}
      />

    </a>
  )
}

export default Logo;
