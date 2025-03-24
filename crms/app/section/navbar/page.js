import Head from "next/head";
import Image from "next/image";
import Seal from "@/app/asset/seal.svg";

export default function Navbar() {
    return(
        <header className="bg-gray-900 text-white p-4">
        <div className="flex justify-between items-center">
          <Image src={Seal} alt="canine" width={50} height={50} />
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/pages" className="text-lg hover:text-gray-300">
                  LOG IN
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

    )
}