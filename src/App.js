import './App.scss';

import Snowflakes from './components/snowflakes/snowflakes';
import Contact from './components/contact/contact';
import Overview from './components/overview/overview';
import Experience from './components/experience/experience';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';
import Introduction from './components/introduction/introduction';
import StickyElement from './components/sticky_header/sticky_header';

function App() {
  return (
    <div>
      <header></header>
      <main>
        <Introduction />
        <StickyElement />
        <Snowflakes />
        <Overview />
        <Experience />
        <Projects/>
        <Contact/>
        <Footer />
      </main>
    </div>
  );
}

export default App;
