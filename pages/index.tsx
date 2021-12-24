import type { NextPage } from 'next'
import React, { useEffect } from 'react'
import Menu from '@components/menu'
import MenuOption from '@components/menu-option'
import { useTheme } from '@components/useTheme'
import { IHomeProps } from 'types'


const Home: NextPage<IHomeProps> = ({ options }) => {
  const { theme: _theme, changeTheme } = useTheme();
  useEffect(() => {
    changeTheme('dark')
  }, [])
  return (
    <div className="px-5 py-5">
      <div className="space-y-3 bg-blue-light dark:bg-green-light text-center space-y-2 p-6 border-solid border-8 border-white mb-16" >
        <p className="text-white text-xl">hi, my name is</p>
        <p className="text-green-dark dark:text-pink text-4xl ">Miguel</p>
      </div>
      
      <Menu
        className="space-y-2"
        options={options}
        optionComponent={MenuOption}
      />

    </div>

  )
}

const options = [
  { id: 0, label: 'About Me', href: '/about' },
  { id: 1, label: 'Projects', href: '/who' },
  { id: 2, label: 'Blog', href: '/posts' },
  { id: 3, label: 'Configs', href: '/who' },
  { id: 4, label: 'Social', href: '/who' },
]

Home.defaultProps = {
  options
}

export default Home
