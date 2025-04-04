import classNames from 'classnames';
import './Tabs.scss';
import getTabsElementsIdsFromTitle from './utils/getTabsElementsIdsFromTitle';
import TabsNavigation from './components/TabsNavigation';

const Tabs = (props: any) => {
    const {
        className,
        title,
        items = [],
        navigationTargetElementId = null
    } = props;

    return (
        <div
            className={classNames(className, 'tabs')}
            data-js-tabs={JSON.stringify({
                navigationTargetElementId,
            })}
        >
            {!navigationTargetElementId && (
                <TabsNavigation title={title} items={items} />
            )}

            <div className="tabs__body">
                {items.map((item, index) => {
                    const {
                        title,
                        children,
                        isActive
                    } = item;

                    const { buttonId, contentId } = getTabsElementsIdsFromTitle(title);

                    return (
                        <div
                            className={classNames('tabs__content', {
                                'is-active': isActive
                            })}
                            tabIndex={0}
                            data-js-tabs-content=""
                            id={contentId}
                            aria-labelledby={buttonId}
                            key={index}
                        >
                            {children}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Tabs;
