import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoRex from '@/images/logos/rex.jpg'
import logoTexas from '@/images/logos/texas.jpg'
import logoIllinois from '@/images/logos/illinois.jpg'
import logoRightpoint from '@/images/logos/rightpoint.jpg'
import logoOwnProp from '@/images/logos/ownprop.jpg'
import logoNada from '@/images/logos/nada.jpg'
import logoFullstack from '@/images/logos/fullstack.jpg'

const work = [
  {
    name: 'Nada',
    description:
      'Nada is unlocking the $27 trillion home equity market for retail investors via CityFunds and homeowners via HomeShares.',
    link: { href: 'https://www.nada.co', label: 'nada.co' },
    logo: logoNada,
  },
  {
    name: 'OwnProp',
    description:
      'OwnProp is democratizing access to commercial real estate investing, enabling new economic opportunities for all to a once inaccessible market.',
    link: { href: 'https://www.ownprop.com', label: 'ownprop.com' },
    logo: logoOwnProp,
  },
  {
    name: 'Rex',
    description:
      'Rex is a technology, investment and real estate company whose mission is to empower the billions of people who use real estate to work, play, and call home.',
    link: { href: 'https://www.rex.com/', label: 'rex.com' },
    logo: logoRex,
  },
  {
    name: 'Rightpoint',
    description:
      'Rightpoint is a global experience leader. Over 700 employees across 12 offices work with clients end-to-end, from defining and enabling vision, to ensuring ongoing market relevance.',
    link: { href: 'https://www.rightpoint.com/', label: 'rightpoint.com' },
    logo: logoRightpoint,
  },
  {
    name: 'University of Texas',
    description: 'MS, Computer Science',
    link: { href: 'https://www.cs.utexas.edu/', label: 'texas.edu' },
    logo: logoTexas,
  },
  {
    name: 'University of Illinois',
    description: 'BA, Economics',
    link: { href: 'https://economics.illinois.edu/', label: 'illinois.edu' },
    logo: logoIllinois,
  },
  {
    name: 'Fullstack Academy',
    description: 'Cert, Software Engineering',
    link: { href: 'https://www.fullstackacademy.com/', label: 'fullstackacademy.com' },
    logo: logoFullstack,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Work() {
  return (
    <>
      <Head>
        <title>Work - Ethan Blumenthal</title>
        <meta
          name="description"
          content="Experience and Education"
        />
      </Head>
      <SimpleLayout
        title="Contributions and Education"
        intro="My experience with technology, business, and product development."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {work.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href} target="blank">{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
