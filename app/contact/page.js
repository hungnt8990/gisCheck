'use client'
import Image from 'next/image'
import { useState } from 'react'
import toolIcon from '../../public/icons/iconTool.svg'
import TreeView from '@/components/TreeView'

const treeData = [
  {
    id: '1',
    label: 'Root Node 1',
    children: [
      {
        id: '1-1',
        label: 'Child Node 1-1',
        children: [{ id: '1-1-1', label: 'Child Node 1-1-1' }]
      },
      { id: '1-2', label: 'Child Node 1-2' }
    ]
  },
  {
    id: '2',
    label: 'Root Node 2',
    children: [{ id: '2-1', label: 'Child Node 2-1' }]
  }
]

export default function Contact() {
  const [open, setOpen] = useState(false)
  const data = [
    {
      name: 'Color Picker',
      icon: ''
    },
    {
      name: 'Highlighter',
      icon: ''
    },
    {
      name: 'Pen',
      icon: ''
    }
  ]
  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl font-bold">Tree View Example</h1>
      <TreeView data={treeData} />
    </div>
  )
}
