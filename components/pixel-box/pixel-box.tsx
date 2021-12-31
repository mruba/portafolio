import React, { ReactElement } from 'react'
import classnames from "classnames";
import styles from './pixel-box.module.css'

interface Props {
    children: ReactElement | ReactElement[]
    className?: string
    id?: string
}

export default function pixelateContainer({ className, children, id }: Props): ReactElement {
    return (
        <div id={id} className={classnames(className)}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    {children}
                </div>
            </div>
        </div>
    )
}
