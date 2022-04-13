import React, { PureComponent } from "react";

type Props = {
  authorName: string;
};

export default class index extends PureComponent<Props> {
  iconComponent() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-2 h-6 w-6 inline -translate-y-1 fill-red-dark"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  render() {
    const { authorName } = this.props;

    return (
      <div className="absolute -bottom-24 right-1/2 translate-x-1/2">
        <p className="text-white text-sm">
          Made with {this.iconComponent()} by {authorName}
        </p>
      </div>
    );
  }
}
