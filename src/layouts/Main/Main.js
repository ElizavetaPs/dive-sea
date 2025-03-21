import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import styles from './Main.module.scss';


export const Main = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}