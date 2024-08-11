import React from 'react'

function compareData() {
  return (
    <div className="mt-14 rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div className="flex h-28 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              className="h-3.5 w-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
        <div className="flex h-28 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              className="h-3.5 w-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-2 justify-between gap-4 gap-x-2 divide-x overflow-y-scroll px-3 py-5">
        <div>
          <ul role="list" class="divide-y divide-gray-100">
            <li class="flex justify-between gap-x-2 px-3 py-5">
              <div class="flex min-w-0 items-center gap-x-1.5">
                <div class="min-w-0 flex-auto">
                  <div class="mt-1 flex items-center gap-x-1.5">
                    <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                    </div>
                    <p class="text-sm font-semibold leading-6 text-gray-900">
                      F03_TUBU_CT
                    </p>
                  </div>
                  <div class="flex items-center gap-x-1.5 px-5">
                    <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                      SoCapDieuChinh - smallint - Số cấp điều chỉnh
                    </p>
                  </div>
                  <div class="flex items-center gap-x-1.5 px-5">
                    <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                      TBDCTuBu - smallint - Số cấp điều chỉnh
                    </p>
                  </div>
                  <div class="flex items-center gap-x-1.5 px-5">
                    <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                      TBBVTuBu - smallint - Thiết bị bảo vệ tụ bù
                    </p>
                  </div>
                  <div class="flex items-center gap-x-1.5 px-5">
                    <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                      DonViQuanLy - nvarchar(50) - Số cấp điều chỉnh
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul role="list" class="divide-y divide-gray-100">
            <li class="flex justify-between gap-x-2 px-3 py-5">
              <div class="flex min-w-0 items-center gap-x-1.5">
                <div class="min-w-0 flex-auto">
                  <div class="mt-1 flex items-center gap-x-1.5">
                    <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                    </div>
                    <p class="text-sm font-semibold leading-6 text-gray-900">
                      F03_TUBU_CT
                    </p>
                  </div>
                  <div class="flex items-center gap-x-1.5 px-5">
                    <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                      SoCapDieuChinh - smallint - Số cấp điều chỉnh
                    </p>
                  </div>
                  <div class="flex items-center gap-x-1.5 px-5">
                    <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                      TBDCTuBu - smallint - Số cấp điều chỉnh
                    </p>
                  </div>
                  <div class="flex items-center gap-x-1.5 px-5">
                    <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                      TBBVTuBu - smallint - Thiết bị bảo vệ tụ bù
                    </p>
                  </div>
                  <div class="flex items-center gap-x-1.5 px-5">
                    <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                      DonViQuanLy - nvarchar(50) - Số cấp điều chỉnh
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default compareData
