import '@/app/ui/ideas/header.css';

export default function Header() {
    return (
        <header>
            <nav className="header-nav container flex-container">
                <h1 className="logo">
                <a
                    className="logo-link"
                    href="/"
                >
                    <img src="/logoB-web.png" />
                </a>
                </h1>
                <ul className="header-menu flex-container">
                <li>
                    <a
                    className="header-menu-link"
                    href="/philosophy"
                    >
                    Philo
                    </a>
                </li>
                <li>
                    <a
                    className="header-menu-link"
                    href="/core_value"
                    >
                    Value
                    </a>
                </li>
                <li>
                    <a
                    className="header-menu-link"
                    href="/roots"
                    >
                    Roots
                    </a>
                </li>
                <li>
                    <a
                    className="header-menu-link"
                    href="/vision"
                    >
                    Vision
                    </a>
                </li>
                <li>
                    <a
                    className="header-menu-link"
                    href="/blog"
                    >
                    Blog
                    </a>
                </li>
                </ul>
                {/* <button className="ghost-button">
                Subscribe
                </button> */}
            </nav>

            </header>
)};