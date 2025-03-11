import classNames from 'classnames';
import './Socials.scss';
import Button from '../Button';

const Socials = (props: any) => {
    const {
        className,
        links = []
    } = props;

    return (
        <div
            className={classNames(className, 'soc1als')}
        >
            <ul className="soc1als__list">
                {links.map(({ label, iconName }, index) => (
                    <li className="soc1als__item" key={index}>
                        <Button 
                            className="soc1als__link"
                            href='/'
                            target="_blank"
                            mode="black10"
                            label={label}
                            isLabelVisible={false}
                            iconName={iconName}
                            hasFillIcon
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Socials;
