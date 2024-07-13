import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "../../components/Button.tsx";
import {BsCart4} from "react-icons/bs";
import {useContext} from "react";
import {CartContext} from "../../contexts/CartContext.tsx";
import {toast} from "react-toastify";

const navigation = [
    {name: "Home", href: "/", current: true},
    {name: "About", href: "#", current: false},
    {name: "Contact", href: "#", current: false},

];


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Header() {
    const navigate = useNavigate();
    const cartState = useContext(CartContext);
    const countItem = cartState.cart.length
    const logoutHandler = () => {
        localStorage.removeItem('token')
        navigate('/login')
        toast.success('User logout successfully!');
    }

    return (
        <Disclosure as="nav" className="dark:bg-gray-800 bg-gray-200">
            {({open}) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <DisclosureButton
                                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5"/>
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </DisclosureButton>
                            </div>
                            <div
                                className="flex flex-1 items-center gap-10 justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center mt-[-50px]">
                                    <Link to={'/'}>
                                        <img
                                            className="h-12 w-auto absolute z-50"
                                            src="https://printondemand.co.id/wp-content/uploads/2023/06/gofood-logo.png"
                                            alt="go-food"
                                        />
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {
                                            localStorage.getItem('token') ?
                                                <Link to={'/my-order'}>My Orders</Link>
                                                :
                                                <div>
                                                    {navigation.map((item) => {
                                                        return (
                                                            <Link
                                                                key={item.name}
                                                                to={item.href}
                                                                className={classNames(
                                                                    item.current ? "bg-gray-900 text-white" : "dark:text-gray-300 hover:bg-gray-700 hover:text-white",
                                                                    "rounded-md px-3 py-2 text-sm font-medium"
                                                                )}
                                                                aria-current={item.current ? "page" : undefined}
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <Link to={"/cart"}
                                      className="relative inline-flex items-center mr-4 p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <BsCart4 className="h-6 w-6"/>

                                    <span className="sr-only">Notifications</span>
                                    <div
                                        className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{countItem}
                                    </div>
                                </Link>
                                {
                                    localStorage.getItem('token') ?

                                        <Menu as="div" className="relative ml-3">
                                            <div>
                                                <MenuButton
                                                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="absolute -inset-1.5"/>
                                                    <span className="sr-only">Open user menu</span>
                                                    <img
                                                        className="h-8 w-8 rounded-full"
                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                        alt=""
                                                    />
                                                </MenuButton>
                                            </div>
                                            <MenuItems
                                                transition
                                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-[#121212]  py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                            >
                                                <MenuItem>
                                                    {({focus}) => (
                                                        <Link
                                                            to={"#"}
                                                            className={classNames(
                                                                focus
                                                                    ? "bg-gray-100 dark:hover:bg-gray-700 rounded"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200"
                                                            )}
                                                        >
                                                            Your Profile
                                                        </Link>
                                                    )}
                                                </MenuItem>
                                                <MenuItem>
                                                    {({focus}) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                focus
                                                                    ? "bg-gray-100 dark:hover:bg-gray-700 rounded"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-gray-700 dark:text-gray-400"
                                                            )}
                                                        >
                                                            Settings
                                                        </a>
                                                    )}
                                                </MenuItem>
                                                <MenuItem>
                                                    {({focus}) => (
                                                        <a
                                                            onClick={logoutHandler}
                                                            className={classNames(
                                                                focus
                                                                    ? "bg-gray-100 dark:hover:bg-gray-700 rounded"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-gray-700 dark:text-gray-400 cursor-pointer"
                                                            )}
                                                        >
                                                            Sign out
                                                        </a>
                                                    )}
                                                </MenuItem>
                                            </MenuItems>
                                        </Menu>

                                        :
                                        <Link to={'login'}>
                                            <Button content={'Login'}/>
                                        </Link>
                                }
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "block rounded-md px-3 py-2 text-base font-medium"
                                    )}
                                    aria-current={item.current ? "page" : undefined}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}
