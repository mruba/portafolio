import * as React from 'react';
import { ReactNode } from 'react';

interface ImenuOption {
    label: string
    href: string
    id: string
    active: boolean


}

interface IMenuState {
    options: ImenuOption[];
}

interface IMenuProps {
    initialOptions: ImenuOption[];
    children: (props: any) => ReactNode
    className?: string
    // handleSelectOption(): void;
}


export default class Menu extends React.Component<IMenuProps, IMenuState> {
    private audio: HTMLAudioElement | null;
    private playPromise: Promise<any> | null;
    constructor(props: IMenuProps) {
        super(props);
        this.handleSelectOption = this.handleSelectOption.bind(this);
        this.getAudioHandler = this.getAudioHandler.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.playPromise = null;
        this.audio = null;
        this.state = {
            options: this.props.initialOptions
        }
    }

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyPress);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyPress);
    }

    handleKeyPress(event: any) {
        if (event.key === "ArrowUp" || event.key === "ArrowDown") {
            const index = this.state.options.findIndex((option: ImenuOption) => option.active);
            if (event.key === "ArrowDown" && index < this.state.options.length - 1) {
                this.handleSelectOption(this.state.options[index + 1].id);
            }

            if (event.key === "ArrowUp" && index > 0) {
                this.handleSelectOption(this.state.options[index - 1].id);
            }
        }

    }

    private getAudioHandler() {
        if (process.browser && this.audio === null) {
            this.audio = new Audio("enable-sound.mp3");
        }

        if (this.audio !== null) {
            if (this.playPromise !== undefined) {
                this.audio.pause();
                this.audio.currentTime = 0;
            }
            this.playPromise = this.audio.play();
        }

    }

    public handleSelectOption(id: any) {


        this.getAudioHandler();

        this.setState({
            options: this.state.options.map((option: ImenuOption) => {
                if (option.id === id) {
                    option.active = true;
                } else {
                    option.active = false;
                }
                return option;
            })
        })
    }

    public render() {

        return (
            <div className={this.props.className}>
                {this.props.children({
                    options: this.state.options,
                    handleSelectOption: this.handleSelectOption
                })}
            </div>
        );
    }
}
