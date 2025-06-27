import type { Component } from 'solid-js';

import logo from './assets/uii.svg';
import styles from './App.module.css';
import { Menu } from './components/Menu/Menu';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <h1 class={styles.welcome}>Welcome to the Uii Menu!</h1>
      <main class={styles.uiiContainer}>
        <Menu></Menu>
      </main>
    </div>
  );
};

export default App;
