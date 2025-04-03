import classNames from 'classnames';
import './Tabs.scss';

const Tabs = (props: any) => {
    const {
        className,
        title,
        items = [],
        navigationTargetElementId = null
    } = props;

    <div
        className={classNames(className, 'tabs')}
        data-js-tabs={JSON.stringify({
            navigationTargetElementId,
        })}
    >
        {!navigationTargetElementId && (
            <div className="">НАВИГАЦИЯ ТАБОВ</div>
        )}

        <div className="tabs__body">
            {items.map((item, index) => {
                const {
                    title,
                } = item;

                // return (

                // );
            })}
        </div>
    </div>
}

export default Tabs;
