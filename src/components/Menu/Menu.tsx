import { createSignal, onCleanup, onMount, type Component } from 'solid-js';

import styles from './Menu.module.css';
import uiiLogo from '../../assets/uiiClear.svg';

export const Menu: Component = () => {
    const channels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    // Clock signal
    const formatOpts = { hour: '2-digit', minute: '2-digit', hour12: false } as Intl.DateTimeFormatOptions;
    const [time, setTime] = createSignal(new Date().toLocaleTimeString([], formatOpts));
    const updateClock = setInterval(() => {
        setTime(new Date().toLocaleTimeString([], formatOpts));
    }, 1000);

    onCleanup(() => {
        clearInterval(updateClock);
    });

    return (
        <div class={styles.Menu}>
            <svg width="0" height="0">
                <defs>
                    <clipPath id="notchLeftBorder" clipPathUnits="objectBoundingBox">
                        <path d="M 0 0 C 0.4 0 0.6 0.95 1 0.95 V 1 H 0 Z"/>
                    </clipPath>
                    <clipPath id="notchRightBorder" clipPathUnits="objectBoundingBox">
                        <path d="M 0 0.95 C 0.4 0.95 0.6 0 1 0 V 1 H 0 Z"/>
                    </clipPath>
                    <clipPath id="notchLeft" clipPathUnits="objectBoundingBox">
                        <path d="M 0 0.05 C 0.4 0.05 0.6 1 1 1 V 0 H 0 Z"/>
                    </clipPath>
                    <clipPath id="notchRight" clipPathUnits="objectBoundingBox">
                        <path d="M 0 1 C 0.4 1 0.6 0.05 1 0.05 V 0 H 0 Z"/>
                    </clipPath>
                    <clipPath id="notchEdgeBorder" clipPathUnits="objectBoundingBox">
                        <path d="M 0 0 H 1 V 0.05 H 0 V 0"/>
                    </clipPath>
                    <clipPath id="notchArea" clipPathUnits="objectBoundingBox">
                        <path d="M 0 0 H 1 V 0.95 H 0 V 0"/>
                    </clipPath>
                </defs>
            </svg>
            <div class={styles.ChannelGrid}>
                {channels.map((channel) => (
                    <div class={styles.Channel}>
                        <p>Channel {channel}</p>
                    </div>
                ))}
            </div>
            <div class={styles.InfoBar}>
                <div class={styles.InfoBarEdge}></div>
                <div class={styles.InfoBarLeftNotch}></div>
                <div class={styles.InfoBarNotch}>
                    <div class={styles.InfoBarNotchContent}>
                        <p class={styles.InfoBarText}>{time()}</p>
                    </div>
                </div>
                <div class={styles.InfoBarRightNotch}></div>
                <div class={styles.InfoBarEdge}></div>
            </div>
            <div class={styles.SettingsButton}>
                <img src={uiiLogo} alt="uii logo" />
            </div>
        </div>
    );
}
