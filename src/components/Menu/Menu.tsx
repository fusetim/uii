import type { Component } from 'solid-js';

import styles from './Menu.module.css';

export const Menu: Component = () => {
    const channels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <div class={styles.Menu}>
            <div class={styles.ChannelGrid}>
                {channels.map((channel) => (
                    <div class={styles.Channel}>
                        <p>Channel {channel}</p>
                    </div>
                ))}
            </div>
            <div class={styles.InfoBar}>

            </div>
        </div>
    );
}
