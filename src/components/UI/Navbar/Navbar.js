import React,{Component} from "react";
import { Transition } from "@headlessui/react";
import {faAlignJustify,faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {Link} from 'gatsby';

class Navbar extends Component{
  state={
    isOpen:false
  }
  render(){
    return (
      <div className="sticky top-0 z-50">
        <nav className="bg-gray-800">
          <div className="max-w-7xl mr-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="-mr-2 flex">
                <button onClick={() => this.setState((prevState)=>({isOpen:!prevState.isOpen}))} type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="menu"
                  aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  {!this.state.isOpen ? (
                    <FontAwesomeIcon className="text-2xl" icon={faAlignJustify}/>
                  ) : (<FontAwesomeIcon className="text-2xl" icon={faTimes}/>
                  )}
                </button>
              </div>
            </div>
          </div>
          <Transition show={this.state.isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            {(ref) => (
              <div id="menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <Link to="/" className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                  <Link to="/gallery" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Gallery</Link>
                  <Link to="/team" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team Spec</Link>
                  <Link to="/workshop" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Workshop</Link>
                  <Link to="/alumni" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Alumni</Link>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
    );
  }
}

export default Navbar;
