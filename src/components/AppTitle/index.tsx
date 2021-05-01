import {useResponsive} from 'ahooks';
import isSmallScreen from '@/utils/isSmallScreen';

export default (props: any) => {
    const {title = 'XYZ', subTitle = 'App', icon} = props;

    //const refTitle = useRef(document.getElementsByClassName('app-title-block')[0]);
    const responsive = useResponsive();

    console.log(isSmallScreen(responsive));

    return <>
        {isSmallScreen(responsive) && <div className={'app-title-block'}>
            {icon && <span className={'app-logo'}>{icon}</span>}
            <span className={'app-title'}>{title}</span>
        </div>}

        {!isSmallScreen(responsive) && <div className={'app-title-block'}>
            {icon && <span className={'app-logo'}>{icon}</span>}
            <span className={'app-title'}>{title}</span><span className={'app-subtitle'}>{subTitle}</span>
        </div>}
    </>;
};