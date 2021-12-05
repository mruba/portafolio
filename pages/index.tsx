import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import profilePic from '../public/pixel-art-mike.png'
import Menu, { ImenuOption } from '../components/menu'
import MenuOption from '../components/menu-option/menu-option'
import styles from '../styles/Home.module.css'
import { useTheme } from '../components/useTheme'

import {
  allPostsQueryVars,
  ALL_POSTS_QUERY,
} from '../components/queries'



interface Iprops {
  menuOptions: ImenuOption[]
}

const Home: NextPage<Iprops> = props => {
  // const { theme, changeTheme } = useTheme();
  return (
    <div className="px-5 py-5">

      <div className="space-y-3 bg-blue-light dark:bg-green-light text-center space-y-2 p-6 border-solid border-8 border-white mb-16" >

          <p className="text-white text-xl">hi, my name is</p>
          <p className="text-green-dark dark:text-pink text-4xl ">Miguel</p>

        {/* <div className="h-40 w-40 m-auto">
          <Image src={profilePic} alt="Picture of the Miguel Rubalcava" />
        </div> */}
      </div>
      {/* <button onClick={() => {
        if (theme === 'dark') {
          changeTheme('light')
        } else {
          changeTheme('dark')
        }

      }}>Click me</button> */}
      <Menu className="space-y-2" initialOptions={props.menuOptions} >
        {
          ({ options, handleSelectOption }) => options.map((option: ImenuOption) => (
            <MenuOption
              key={option.id}
              label={option.label}
              href={option.href}
              id={option.id}
              active={option.active}
              handleSelectOption={handleSelectOption}
              className="justify-center"
            />
          ))
        }
      </Menu>

    </div>

  )
}

const menuOptions = [
  { id: 0, label: 'About Me', href: '/about', active: false },
  { id: 1, label: 'Projects', href: '/who', active: false },
  { id: 2, label: 'Blog', href: '/who', active: false },
  { id: 3, label: 'Configs', href: '/who', active: false },
  { id: 4, label: 'Social', href: '/who', active: false },
]

Home.defaultProps = {
  menuOptions
}



export default Home
