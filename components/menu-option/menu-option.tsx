import * as React from 'react';
import invader from '../../public/invader.svg';
import Image from 'next/image'
import { ImenuOption } from '../menu';
import classnames from 'classnames';
import { Interface } from 'readline';
import Link from 'next/link';

function Icon(props: any) {
    return (
        <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
            <path d="M79 54.004v10h10v-10H79zm-40 0v10h10v-10H39zm0 40h20v10H39v-10zm50 0v10H69v-10h20zm0-60v-10h10v10H89zm-50 0h10v10h30v-10h10v10h10v10h10v10h10v30h-10v-20H99v20H89v-10H39v10H29v-20H19v20H9v-30h10v-10h10v-10h10v-10zm-10-10h10v10H29v-10z" />
        </svg>
    );
}



const MenuOption: React.FunctionComponent<ImenuOption> = (props) => {
    return (
        <Link href={props.href}>
            <div
                className={
                    classnames('p-2 text-2xl text-center space-x-3', {
                        'text-blue dark:text-indigo': !props.active,
                        'text-red dark:text-green': props.active,
                    },
                        props.className
                    )}
                onMouseEnter={() => props.handleSelectOption(props.id)}
            >

                {/* {props.active && <p className="inline-block">{'<'}</p>} */}
                <p className="inline-block">
                    {props.label}
                    {/* {props.active && <Icon className="fill-current h-12 w-12 absolute -top-3 -left-16" />} */}
                </p>
                {/* {props.active && <p className="inline-block">{'>'}</p>} */}
            </div >
        </Link>
    );
};

export default MenuOption;
