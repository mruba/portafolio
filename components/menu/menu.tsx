import * as React from 'react';
import { ReactNode } from 'react';
import { IMenuProps, IMenuState } from 'types';



export default class Menu extends React.Component<IMenuProps, IMenuState> {
    private audio: HTMLAudioElement | null;
    private playPromise: Promise<any> | null;
    constructor(props: IMenuProps) {
        super(props);
        this.handleSelectOption = this.handleSelectOption.bind(this);
        this.getAudioHandler = this.getAudioHandler.bind(this);
        this.playPromise = null;
        this.audio = null;
    }

    private getAudioHandler() {
        if (process.browser && this.audio === null) {
            this.audio = new Audio("enable-sound.mp3");
        }

        if (process.browser && this.audio !== null && this.playPromise === null) {
            this.audio.pause();
            this.audio.currentTime = 0;
        }

    }

    public handleSelectOption(id: string) {
        this.getAudioHandler();
    }

    public render() {

        const { optionComponent, options } = this.props;

        return (
            <div className={this.props.className}>
                {options.map(option => optionComponent(option))}
            </div>
        );
    }
}
