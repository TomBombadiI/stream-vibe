import Icon from '@/components/Icon';
import './Button.scss';
import classNames from 'classnames';

type ButtonProps = {
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    href?: string;
    target?: string;
    mode?: '' | 'transparent';
    label: string;
    isLabelVisible?: boolean;
    iconName?: string;
    iconPosition?: 'before' | 'after';
}

const Button = (props: any) => {
    const {
        className,
        type = 'button',
        href,
        target,
        mode = '',
        label,
        isLabelVisible = true,
        iconName,
        iconPosition = 'before'
    } = props;

    const isLink: boolean = href !== undefined;
    const Component: string = isLink ? 'a' : 'button';

    const linkProps: any = { href, target };
    const buttonProps: any = { type };
    const specificProps: any = isLink ? linkProps : buttonProps;

    const title: string | undefined = isLabelVisible ? undefined : label;
    const iconComponent = iconName && (
        <Icon
            className='button__icon'
            name={iconName}
        />
    );

    return (
        <Component
            className={classNames(className, 'button', {
                [`button--${mode}`]: mode
            })}
            title={title}
            aria-label={title}
            {...specificProps}
        >

            {iconPosition === 'before' && iconComponent}

            {isLabelVisible && (
                <span className='button__label'>
                    {label}
                </span>
            )}

            {iconPosition === 'after' && iconComponent}

        </Component>
    )
};

export default Button;
