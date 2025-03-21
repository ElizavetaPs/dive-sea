import cn from 'classnames';
import styles from './Container.module.scss';


export const Container = ({ children, className, ...props }) => {
    return (
        <div className={cn(styles.container, className)} {...props}>
            {children}
        </div>
    );
};