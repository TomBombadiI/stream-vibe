import './Icon.scss';
import classNames from 'classnames';
import { Icon as MinistaIcon } from 'minista';

type IconProps = {
    className?: string,
    name?: string,
    hasFill?: boolean,
    ariaLabel?: string,
}

const Icon = (props: IconProps) => {
    const {
        className,
        name,
        hasFill = false,
        ariaLabel,
    } = props;

    return (
        <span
            className={classNames(className, 'icon')}
            aria-label={ariaLabel}
        >
            <MinistaIcon
                iconId={name}
                fill={hasFill ? 'currentColor' : 'none'}
                stroke={hasFill ? 'none' : 'currentColor'}
            />
        </span>
    )
}

export default Icon;
