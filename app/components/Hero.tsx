import Image from 'next/image';
import background from 'public/background.jpg';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className='relative'>
      <Image
      className='relative'
      src={background}
      alt='Background photo'
      />
      <div>
        <h1 className='absolute z-10 top-1/3 text-3xl text-white px-8 lg'>Auto Mechanik <br /> Piotr Staworko</h1>
        <h2 className='absolute z-10 top-1/2 text-2xl text-white p-8'>Wykonujemy naprawy aut osobowych</h2>
        <Link className='absolute top-1/2 text-white' href='/oferta'>Oferta</Link>
        <Link className='' href='/kontakt'>Kontakt</Link>
      </div>
    </div>
  )
}