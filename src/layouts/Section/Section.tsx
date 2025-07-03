import classNames from 'classnames';
import './Section.scss';

type SectionProps = {
    className?: string;
    title: string;
    titleId: string;
    description?: string;
    actions?: JSX.Element;
    isActionsVisibleOnMobile?: boolean;
    children: JSX.Element[];
}

const Section = (props: SectionProps) => {
    const {
        className,
        title,
        titleId,
        description,
        actions,
        isActionsVisibleOnMobile = true,
        children
    } = props;

    return (
        <section
            className={classNames(className, 'section container')}
            aria-labelledby={titleId}
        >
            <header className='section__header'>
                <div className="section__info">
                    <h2 className="section__title h3" id={titleId}>
                        {title}
                    </h2>
                    {description && (
                        <div className="section__description">
                            <p>{description}</p>
                        </div>
                    )}
                </div>
                {actions && (
                    <div className={
                        classNames('section__actions', {
                            'hidden-mobile': !isActionsVisibleOnMobile
                        })
                    }>
                        {actions}
                    </div>
                )}
            </header>
            <div className="section__body">
                {children}
            </div>

        </section>
    )
}

export default Section;
