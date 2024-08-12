'use client'
import Image from 'next/image'
import { useState } from 'react'
import toolIcon from '../../public/icons/iconTool.svg'
import TreeView from '@/components/TreeView'

export default function Contact() {
  const [open, setOpen] = useState(false)
  const treeData = [
    {
      id: 1,
      name: 'Parent 1',
      children: [
        {
          id: 2,
          name: 'Child 1.1',
          children: [
            { id: 4, name: 'Grandchild 1.1.1' },
            { id: 5, name: 'Grandchild 1.1.2' }
          ]
        },
        {
          id: 3,
          name: 'Child 1.2',
          children: [
            { id: 6, name: 'Grandchild 1.2.1' },
            { id: 7, name: 'Grandchild 1.2.2' }
          ]
        }
      ]
    },
    {
      id: 8,
      name: 'Parent 2',
      children: [
        {
          id: 9,
          name: 'Child 2.1',
          children: [
            { id: 10, name: 'Grandchild 2.1.1' },
            { id: 11, name: 'Grandchild 2.1.2' }
          ]
        }
      ]
    }
  ]
  return (
    <div className="container mx-auto h-full pt-12">
      <h1 className="mb-4 text-2xl font-bold">
        TreeView Example with 3 Levels
      </h1>
      <div className="max-h-[1000px] overflow-auto">
        {' '}
        {/* Adjust max-h value as needed */}
        <TreeView items={treeData} />
      </div>
    </div>
  )
}
