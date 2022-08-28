import React, { useContext, useState } from 'react';
import { CardContent } from '../components/CardContent';
import { CardContentSecondary } from '../components/CardContentSecondary';
import { Faq } from '../components/Faq';
import { Footer } from '../components/Footer';
import { Form } from '../components/Form';
import { Header } from '../components/Header';
import { HeroRotation } from '../components/HeroRotation';
import { Menu } from '../components/Menu';
import { Notification } from '../components/Notification';
import { Testimony } from '../components/Testimony';
import { Context } from '../context/Context';

export const Home = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { state } = useContext(Context);
  return (
    <>
      <header className="home-header">
        <Header setShowMenu={setShowMenu} showMenu={showMenu} />
      </header>
      <section className={showMenu ? 'home-menu active' : 'home-menu'}>
        <Menu />
      </section>
      {state.notification && <Notification />}
      {!showMenu && (
        <div>
          <main className="home">
            <section className="home__rotation">
              <HeroRotation />
            </section>
            <section className="home__title-cards">
              <h2 className="home__title">Artículos Populares</h2>
            </section>
            <section className="home__card-1">
              <CardContent />
            </section>
            <section className="home__card-2">
              <CardContentSecondary />
            </section>
            <section className="home__testimony">
              <h2 className="home__title">Testimonios</h2> <Testimony />
            </section>
            <section className="home__faq">
              <h2 className="home__title">Preguntas frecuentes</h2>
              <Faq />
            </section>
            <section className="home__form">
              <h2 className="home__title">Escríbenos un correo</h2>
              <Form />
            </section>
          </main>
          <footer className="home-footer">
            <Footer />
          </footer>
        </div>
      )}
    </>
  );
};
