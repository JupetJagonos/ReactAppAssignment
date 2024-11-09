import Header from './components/Header';
import TriviaQuestion from './components/TriviaQuestion'; 
import WelcomeSection from './components/WelcomeSection';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <WelcomeSection />
            <TriviaQuestion />
            <Footer />
        </div>
    );
};

export default App;