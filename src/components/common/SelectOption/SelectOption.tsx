import React, { Fragment, FC } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

type options = {
  text: string | number
  value: string | number
}

type Props = {
  optionsList: options[]
  selectedOption: string | number
  setSelectedOption: (value: string | number) => void
}

const SelectOption: FC<Props> = ({ optionsList, selectedOption, setSelectedOption }) => {
  const getSelectedText = (valueToFind: string | number) => {
    const object = optionsList.find((item) => item.value === valueToFind)
    return object?.text
  }
  return (
    <div className='relative z-10'>
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        <div className='relative'>
          <Listbox.Button className='relative w-full cursor-default bg-white py-2 pl-3 pr-10 text-right rounded-md  shadow focus:outline-none  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2  sm:text-sm'>
            <span className='block truncate'>{getSelectedText(selectedOption)}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <SelectorIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-xl text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {optionsList.map((subject, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-[#303030ac] text-white' : 'text-gray-900'
                    }`
                  }
                  value={subject.value}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                      >
                        {subject.text}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-red-300'>
                          <CheckIcon className='h-5 w-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export { SelectOption }
