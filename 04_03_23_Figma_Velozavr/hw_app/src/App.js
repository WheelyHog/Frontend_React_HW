import styles from './App.module.css';
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import CardsList from "./components/CardsList/CardsList";
import Rental from "./components/Rental/Rental";

function App() {
    return (
        <div className={styles.app}>
            <Header/>
            <Banner/>
            <Services />
            <About />
            <CardsList />
            <Rental />
        </div>
    );
}

export default App;
