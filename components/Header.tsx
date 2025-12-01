import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropdown"; 
const Header = () => {
  return (
   <header className="sticky top-0 header">
    <div className="conatiner header-wrapper">
        <Link href="href">
          <Image src="./assets/icons/logo.svg" alt="logo" width={140} height={32} className="w-8-auto cursor-pointer"/>
        </Link>
        <nav className="hidden sm:block">
          {/* NAV Items  */}
          <NavItems /> 
        </nav>
        {/* User dropdown Mesnu  */}
        <UserDropdown />
    </div>
   </header>
  )  
}

export default Header