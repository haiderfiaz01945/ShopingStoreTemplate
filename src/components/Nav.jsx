'use client'

import { useState } from 'react'
import {
  Dialog,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
const products = [
  { name: 'Product 1', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Product 2', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Product 3', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
];

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-[#86469C] via-[#BC7FCD] to-[#FFCDEA] text-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="text-lg font-bold">
            Your Company
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Product
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
  transition
  className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-[#FB9AD1] shadow-lg ring-1 ring-gray-900/5 transition-opacity"
>
  <div className="p-4 bg-gradient-to-r from-[#FFCDEA] via-[#BC7FCD] to-[#86469C]">
    {products.map((item) => (
      <div
        key={item.name}
        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#BC7FCD]"
      >
        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-[#86469C] group-hover:bg-[#FFCDEA]">
          <item.icon aria-hidden="true" className="h-6 w-6 text-white group-hover:text-[#86469C]" />
        </div>
        <div className="flex-auto">
          <a href={item.href} className="block font-semibold text-white group-hover:text-[#86469C]">
            {item.name}
            <span className="absolute inset-0" />
          </a>
          <p className="mt-1 text-[#86469C]">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-[#86469C]">
    {callsToAction.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-white hover:bg-[#BC7FCD]"
      >
        <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-[#FFCDEA]" />
        {item.name}
      </a>
    ))}
  </div>
</PopoverPanel>

          </Popover>

          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Features
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Marketplace
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Company
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Sign in
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gradient-to-r from-[#86469C] via-[#BC7FCD] to-[#FFCDEA] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="text-lg font-bold text-white">
              Your Company
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-[#BC7FCD]">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2 bg-gradient-to-r from-[#86469C] via-[#BC7FCD] to-[#FFCDEA] p-4 rounded-lg">
  {[...products, ...callsToAction].map((item) => (
    <DisclosureButton
      key={item.name}
      as="a"
      href={item.href}
      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 bg-white shadow-md hover:bg-[#BC7FCD] hover:text-white transition duration-300"
    >
      {item.name}
    </DisclosureButton>
  ))}
</DisclosurePanel>


                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-[#BC7FCD]"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-[#BC7FCD]"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-[#BC7FCD]"
                >
                  Company
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
