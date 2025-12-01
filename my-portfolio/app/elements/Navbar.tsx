// use react link instead of a tag for navigation
import Link from "next/link";

export default function Navbar() {
  return (
    // sticky navbar 
    // top-0 to stick to top
    // z-50 to ensure it stays above other content
    // mx-auto to center the navbar
        // flex to arrange items in a row
        // items-center to vertically center items
        // p-6 for padding
    <nav className="sticky top-0 z-50 p-5 bg-indigo-950 text-white shadow mx-auto">
            <ul className="flex items-center">
                <li className="flex p-5"><Link href="/">HOME</Link></li>
                <li className="flex p-5"><Link href="/projects">PROJECTS</Link></li>
                <li className="flex p-5"><Link href="/experience">EXPERIENCE</Link></li>
                <li className="flex p-5"><Link href="/achievements">ACHIEVEMENTS</Link></li>
                <li className="flex p-5"><Link href="/contact">CONTACT</Link></li>
            </ul>
    </nav>
  );
}