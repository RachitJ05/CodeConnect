import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react';
import { toast } from 'react-hot-toast';

const HomePage = () => {
  return (
      <>
          <button className='btn btn-primary' onClick={() => toast.success("This is a success toast")}>Click Me</button>

          <SignedOut>
              <SignInButton mode='modal'>
                  <button className='btn btn-secondary'>Login</button>
              </SignInButton>
          </SignedOut>

          <SignedIn>
              <SignOutButton />
          </SignedIn>

          <UserButton />
      </>
  )
}

export default HomePage