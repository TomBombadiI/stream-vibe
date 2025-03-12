import Button from '@/components/Button';
import './Header.scss';
import Logo from '@/components/Logo';
import classNames from 'classnames';
import BurgerButton from '@/components/BurgerButton';

const Header = (props: any) => {
    const {
        url,
        isFixed
    } = props;

    const menuItems = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'Movies & Shows',
            href: '/movies'
        },
        {
            label: 'Support',
            href: '/support'
        },
        {
            label: 'Subscriptions',
            href: '/subscriptions'
        },
    ];

    return (
        <header
            className={classNames('header', {
                'is-fixed': isFixed
            })}
            data-js-overlay-menu="">
            <div className="header__inner container">
                <Logo
                    className='header__logo'
                    loading='eager'
                />
                <dialog
                    className="header__overlay-menu-dialog"
                    data-js-overlay-menu-dialog=""
                >
                    <nav className="header__menu">
                        <ul className="header__menu-list">
                            {menuItems.map(({ label, href }, index) => (
                                <li
                                    className="header__menu-item"
                                    key={index}
                                >
                                    <a
                                        className={classNames('header__menu-link', {
                                            'is-active': href === url
                                        })}
                                        href={href}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="header__actions">
                        <Button
                            className="header__button"
                            label="Search"
                            mode="transparent"
                            isLabelVisible={false}
                            iconName="search"
                        />
                        <Button
                            className="header__button"
                            label="Notification"
                            mode="transparent"
                            isLabelVisible={false}
                            iconName="notification"
                        />
                    </div>
                </dialog>
                <BurgerButton
                    className="header__burger-button visible-tablet"
                    extraAttrs={{
                        'data-js-overlay-menu-burger-button': '',
                    }}
                />
            </div>
        </header>
    )
}

export default Header;
