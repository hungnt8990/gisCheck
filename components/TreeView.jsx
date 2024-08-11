import { useState } from 'react'

const TreeView = () => {
  const [openId, setOpenId] = useState(null)

  const handleToggle = id => {
    setOpenId(openId === id ? null : id)
  }

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
        {/* Accordion Item 1 */}
        <div
          className="hs-accordion"
          role="treeitem"
          aria-expanded={openId === 'item-1'}
          id="item-1-heading"
        >
          <div className="hs-accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
            <button
              className="hs-accordion-toggle flex size-6 items-center justify-center rounded-md hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              aria-expanded={openId === 'item-1'}
              aria-controls="item-1-content"
              onClick={() => handleToggle('item-1')}
            >
              <svg
                className={`transition-transform duration-300 ${openId === 'item-1' ? 'rotate-90' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
              </svg>
            </button>
            <div className="grow cursor-pointer rounded-md px-1.5">
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
                    Files
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            id="item-1-content"
            className={`hs-accordion-content ${openId === 'item-1' ? 'block' : 'hidden'} w-full overflow-hidden transition-[height] duration-300`}
            role="group"
            aria-labelledby="item-1-heading"
          >
            <div className="relative ms-3 ps-3 before:absolute before:start-0 before:top-0 before:-ms-px before:h-full before:w-0.5 before:bg-gray-100 dark:before:bg-neutral-700">
              <div className="cursor-pointer rounded-md px-2" role="treeitem">
                <div className="flex items-center gap-x-3">
                  <div className="grow">
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      design.txt
                    </span>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer rounded-md px-2" role="treeitem">
                <div className="flex items-center gap-x-3">
                  <div className="grow">
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      tutorials.txt
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Accordion Item 1 */}
      </div>
    </div>
  )
}

export default TreeView
