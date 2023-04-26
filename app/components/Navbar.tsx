import Image from 'next/image';
import unnamed from 'public/unnamed.png'
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='flex justify-between px-10 items-center'>
      <Link href='#'> <Image
      alt='Logo'
      src={unnamed}
      /></Link>
     
      <div className='flex p-10'>
        <ul className='flex justify-between gap-12'>
          <Link href='/oferta'>Oferta</Link>
          <Link href='/galeria'>Galeria</Link>
          <Link href='/kontakt'>Kontakt</Link>
        </ul>
      </div>
    </div>
  );
}