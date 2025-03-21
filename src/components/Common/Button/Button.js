import cn from 'classnames';
import styles from './Button.module.scss';


export const Button = ({ href, variant = 'filled', size = 'medium', uppercase = false, color = 'dark', children, className, ...props }) => {
    const buttonClass = cn(styles.btn, styles[variant], styles[size], styles[color], className, {
        [styles.uppercase]: uppercase,
    });

    if (href) {
		return (
			<Link href={href}>
                <a className={buttonClass} {...props}>
                    {children}
                </a>
			</Link>
		);
	}

	return (
		<button className={buttonClass} {...props}>
			{children}
		</button>
	);
};