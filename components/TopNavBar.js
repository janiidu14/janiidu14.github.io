import Link from 'next/link';

function TopNavBar() {
    return (
        <div className=" bg-[#201A26] p-5 md:px-20 lg:px-60">
            <nav className="py-10 mb-12 flex justify-between ">
                <h1 className="text-xl hidden md:block select-none text-bold">janiidu</h1>
                <ul className="flex items-center mx-auto gap-10 md:gap-15 lg:gap-18 md:mx-0 font-poppins">
                    <li className="text-sm md:text-xl text-white">
                        <Link href={"#about-me"}> About Me </Link>
                    </li>
                    <li className="text-sm md:text-xl text-white">
                        <Link href={"#technologies"}> Technologies </Link>
                    </li>
                    <li className="text-sm md:text-xl text-white">
                        <Link href={"#projects"}> Projects </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default TopNavBar;