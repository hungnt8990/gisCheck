import { useState, useRef, useEffect } from 'react'

const TreeView = ({ items }) => {
  return (
    <div
      className="hs-accordion-treeview-root"
      role="tree"
      aria-orientation="vertical"
    >
      <div
        className="hs-accordion-group"
        role="group"
        data-hs-accordion-always-open=""
      >
        {items.map(item => (
          <TreeItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

const TreeItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const content = contentRef.current
    if (isOpen) {
      content.style.height = `${content.scrollHeight}px`

      const transitionEnd = () => {
        content.style.height = 'auto'
        content.removeEventListener('transitionend', transitionEnd)
      }

      content.addEventListener('transitionend', transitionEnd)
    } else {
      content.style.height = `${content.scrollHeight}px`
      requestAnimationFrame(() => {
        content.style.height = '0px'
      })
    }
  }, [isOpen])

  return (
    <div className="hs-accordion" role="treeitem" aria-expanded={isOpen}>
      <div className="hs-accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
        {item.children && (
          <button
            className="hs-accordion-toggle flex size-6 items-center justify-center rounded-md hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            onClick={toggleOpen}
            aria-expanded={isOpen}
          >
            <svg
              className={`size-2.5 text-gray-600 transition-transform duration-300 dark:text-neutral-400 ${
                isOpen ? 'rotate-90' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
            </svg>
          </button>
        )}
        <div className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 dark:hs-accordion-selected:bg-neutral-700 grow cursor-pointer rounded-md px-1.5">
          <div className="flex items-center gap-x-3">
            <svg
              className="size-4 shrink-0 text-gray-500 dark:text-neutral-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
            </svg>
            <div className="grow">
              <span className="text-sm text-gray-800 dark:text-neutral-200">
                {item.name}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        id={`hs-caret-tree-collapse-${item.id}`}
        ref={contentRef}
        className="hs-accordion-content transition-height overflow-hidden duration-300 ease-in-out"
        style={{ height: '0px' }}
        role="group"
        aria-labelledby={`hs-caret-tree-heading-${item.id}`}
      >
        <div className="relative ms-3 ps-3 before:absolute before:start-0 before:top-0 before:-ms-px before:h-full before:w-0.5 before:bg-gray-100 dark:before:bg-neutral-700">
          {item.children &&
            item.children.map(child => (
              <TreeItem key={child.id} item={child} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default TreeView
