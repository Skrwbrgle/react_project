import { IconBrandFacebook, IconBrandGithub, IconBrandTwitter } from "@tabler/icons-react";
import clsx from "clsx";

/* eslint-disable react/prop-types */
export default function App() {
  return (
    <div className={"bg-slate-900 grid place-content-center min-h-screen"}>
      <div className={'flex gap-x-2'}>
        <Button onClick={() => console.log('Login')} type='submit'>
          <IconBrandFacebook/>
          Login
        </Button>
        <Button className='bg-sky-600' onClick={() => console.log('Login')} type='button'>
          <IconBrandTwitter className="w-5 h-5"/>
          Login
        </Button>
        <Button className='bg-gray-600' onClick={() => console.log('Login')} type='button'>
          <IconBrandGithub className="w-5 h-5"/>
          Login
        </Button>
      </div>
    </div>
  );

  function Button (props) {
    const {className = 'bg-blue-600', children, text, type='submit'} = props;
    return (
      <button {...props} type={type} className={clsx(
        className,
        '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-2 rounded'
      )}>
          {text || children}
      </button>
    );
  }
}