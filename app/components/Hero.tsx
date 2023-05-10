import Image from 'next/image';
import background from 'public/background.jpg';
import Link from 'next/link';
import ac from 'public/ac.png'
import tires from 'public/tires.png'
import laptop from 'public/laptop.png'

export default function Hero() {
  return (
    <>
      <div className='relative'>
        <Image
        src={background}
        alt='Background photo'
        />
        <div className='flex absolute flex-col top-1/3 text-white lg:px-8'>
          <h1 className='lg:text-6xl'>Auto Mechanik <br /> Piotr Staworko</h1>
          <h2 className='lg:text-3xl'>Wykonujemy naprawy aut osobowych</h2>
          <div className=' flex gap-8'>
            <Link href='/oferta'>Oferta</Link>
            <Link href='/kontakt'>Kontakt</Link>
          </div>
        </div>
      </div>
      <div className=' my-40 '>
        <div className=' text-black flex justify-around '>
            <Link href='/oferta'>
              <div className=' h-28 w-56 flex top-1/2 left-1/2 flex-col p-4 border-2 border-green-600'>
                <h1 className=' self-center'>Klimatyzacja</h1>
                <Image
                alt='AC'
                src={ac}
                width={50}
                height={50}
                className=' self-end '
                />
              </div>
            </Link>
            <Link href='/oferta'>
              <div className=' h-28 w-56 flex top-1/2 left-1/2 flex-col p-4 border-2 border-green-600'>
                <h1 className=' self-center'>Wulkanizacja</h1>
                  <Image
                  alt='Tires'
                  src={tires}
                  width={50}
                  height={50}
                  className=' self-end '
                  />
              </div>
            </Link>
            <Link href='/oferta'>
              <div className=' h-28 w-56 flex top-1/2 left-1/2 flex-col p-4 border-2 border-green-600'>
                <h1 className=' self-center'>Diagnostyka</h1>
                  <Image
                  alt='Laptop'
                  src={laptop}
                  width={50}
                  height={50}
                  className=' self-end '
                  />
              </div>
            </Link>
        </div>
      </div>
    </>
    
  )
}