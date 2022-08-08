import React from 'react'
import cls from  './sidebaritem.module.css'
export default function Sidebaritem({value}) {
  return (
    <div className={cls.sidebaritem} >{value}</div>
  )
}
