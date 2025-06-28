import type { Component } from 'solid-js';

import styles from './Menu.module.css';
import uiiLogo from '../../assets/uii.svg';

export const Menu: Component = () => {
    const channels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <div class={styles.Menu}>
            <svg width="0" height="0">
                <defs>
                    <clipPath id="notchArea" clipPathUnits="objectBoundingBox">
                    <path d="M0.8389 0 C0.8106 0 0.7799 0.2411 0.7476 0.4794 C0.7148 0.7186 0.6833 0.9545 0.6552 0.9545 H0.3451 C0.3169 0.9545 0.2854 0.7186 0.2526 0.4794 C0.2203 0.2411 0.1896 0 0.1611 0 H0.8389 Z M0.1611 0 C0.1896 0 0.2203 0.2411 0.2526 0.4794 C0.2854 0.7186 0.3169 0.9545 0.3451 0.9545 H0.6552 C0.6833 0.9545 0.7148 0.7186 0.7476 0.4794 C0.7799 0.2411 0.8106 0 0.8389 0 H1 V0.0227 H0.8389 C0.8108 0.0227 0.7796 0.2617 0.7460 0.5206 C0.7125 0.7777 0.6827 1 0.6552 1 H0.3451 C0.3176 1 0.2878 0.7777 0.2543 0.5206 C0.2207 0.2617 0.1895 0.0227 0.1611 0.0227 H0 V0 H0.1611 Z"/>
                    </clipPath>
                    <clipPath id="notchBorder" clipPathUnits="objectBoundingBox">
                    <path d="M0.1611 0 C0.1895 0 0.2212 0.2411 0.2524 0.4794 C0.2838 0.7186 0.3153 0.9545 0.3451 0.9545 H0.655 C0.6847 0.9545 0.7162 0.7186 0.7476 0.4794 C0.7788 0.2411 0.8105 0 0.8389 0 H1 V0.0227 H0.8389 C0.8111 0.0227 0.7802 0.2617 0.7474 0.5206 C0.7146 0.7777 0.6849 1 0.655 1 H0.3451 C0.3152 1 0.2855 0.7777 0.2527 0.5206 C0.2199 0.2617 0.1889 0.0227 0.1611 0.0227 H0 V0 H0.1611 Z"/>
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
                <div class={styles.InfoBarNotchBorder}></div>
                <div class={styles.InfoBarNotch}>
                    <p>09:45</p>
                </div>
                <div class={styles.InfoBarUnderlay}>
                    <p class={styles.InfoBarDate}>13/06/2025</p>
                </div>
                <img class={styles.UiiButton} src={uiiLogo} ></img>
            </div>
        </div>
    );
}
