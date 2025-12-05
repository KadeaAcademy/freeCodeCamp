import React from 'react';

export function MembersTab(): JSX.Element {
  const tableHeaders = [
    'Email',
    'Name',
    'Group',
    'Last Active',
    'Days Active',
    'Courses/Paths Completed',
    'Modules Completed',
    'Quiz Average',
    'Recent Course/Path',
    'Recent Content'
  ];

  return (
    <>
      {/* Filters Section */}
      <div className='mb-6'>
        <div className='flex items-end gap-4'>
          {/* Group Filter */}
          <div className='w-48'>
            <label
              htmlFor='group-filter'
              className='block text-xs font-semibold text-gray-600 mb-1'
            >
              Group
            </label>
            <div className='relative'>
              <select
                id='group-filter'
                className='block w-full text-gray-900 pl-3 pr-10 py-2 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md appearance-none bg-white'
              >
                <option className='text-gray-900'>All</option>
                <option className='text-gray-900'>Group A</option>
                <option className='text-gray-900'>Group B</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <svg
                  className='h-4 w-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Member Search */}
          <div className='w-64'>
            <label
              htmlFor='member-search'
              className='block text-xs font-semibold text-gray-600 mb-1'
            >
              Member
            </label>
            <div className='relative rounded-md shadow-sm'>
              <input
                id='member-search'
                type='text'
                className='focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 pr-10 py-2 sm:text-sm border border-gray-300 rounded-md'
                placeholder=''
              />
              <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                <svg
                  className='h-4 w-4 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions Row */}
      <div className='flex justify-end mb-2'>
        <button className='inline-flex items-center px-3 py-1.5 border border-gray-800 text-xs font-bold text-gray-700 bg-white rounded'>
          Download .CSV
        </button>
      </div>

      {/* Data Table */}
      <div className='border border-gray-200 rounded-sm overflow-hidden bg-white'>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-white'>
              <tr>
                {tableHeaders.map(header => (
                  <th
                    key={header}
                    scope='col'
                    className='px-3 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-b-2 border-gray-800 whitespace-nowrap cursor-pointer group'
                  >
                    <div className='flex items-center gap-1'>
                      {header}
                      <svg
                        className='h-3 w-3 text-gray-400 group-hover:text-gray-600'
                        fill='currentColor'
                        viewBox='0 0 320 512'
                      >
                        <path d='M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z' />
                      </svg>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        </div>

        {/* Empty State / No Results */}
        <div className='flex flex-col items-center justify-center min-h-[400px] bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'>
          <div className='bg-white p-8 text-center'>
            <h3 className='text-lg font-bold text-gray-900 mb-1'>
              No Results Found
            </h3>
            <p className='text-sm text-gray-500 mb-6'>Remove filters to view</p>
            <button
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              onClick={() => {
                // Logique de reset à ajouter
                console.log('Reset filters');
              }}
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

MembersTab.displayName = 'MembersTab';
