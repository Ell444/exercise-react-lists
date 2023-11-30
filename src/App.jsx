import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      <Navbar title='Foodies' links={[
        {
          name: 'Home',
          url: '/home',
        },
        {
          name: 'About',
          url: '/about',
        },
        {
          name: 'Foods',
          url: '/foods',
        },
        {
          name: 'Lifestyle',
          url: '/lifestyle',
        }, {
          name: 'Contact',
          url: '/contact',
        }
      ]} />

      <Header
        src={'https://www.my-personaltrainer.it/2021/09/29/colazione-sana-per-affrontare-la-giornata-lavorativa_900x760.jpeg'}
        alt='colazione'
        ctaTextH4='FEATURED POST'
        ctaTextH1='I am A Blogger & I Love Foods'
        ctaTextP='Lorem ipsum  dolor sit amet consectetur adipisicing elit. Enim officia officiis voluptas excepturi, assumenda nostrum!'
        ctaBtn='Read More'
      />
    </>
  )
}
export default App;