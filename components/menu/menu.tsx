import * as React from "react";
import { IMenuProps } from "types";

export default class Menu extends React.Component<IMenuProps> {
  private audio: HTMLAudioElement | null;
  constructor(props: IMenuProps) {
    super(props);
    this.handleSelectOption = this.handleSelectOption.bind(this);
    this.getAudioHandler = this.getAudioHandler.bind(this);
    this.audio = null;
  }

  private getAudioHandler() {
    if (process.browser && this.audio === null) {
      this.audio = new Audio("enable-sound.mp3");
    }

    if (process.browser && this.audio !== null) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

  public handleSelectOption(id: string) {
    this.getAudioHandler();
  }

  public render() {
    const { optionComponent, options, className } = this.props;
    return <div className={className}>{options.map(optionComponent)}</div>;
  }
}
