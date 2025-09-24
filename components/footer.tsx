import Link from "next/link";
export function Footer() {
  return (
    <footer className="bg-card py-16">
      <div className="container px-4 md:px-6 flex flex-col items-center">
        <div className="md:ml-90 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12 max-w-5xl mx-auto justify-items-center text-center">
          {/* Logo */}
          <div className="flex items-center justify-center w-full text-center">
            <img src="/MainLogo.png" alt="Main Logo" className="w-32 h-auto" />
          </div>
          {/* About Ober */}
          <div className="text-center w-full">
            <h3 className="font-semibold mb-4">About Ober</h3>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto">
              Ober Construction is a top developer of A-grade commercial,
              industrial, and residential projects in Albania, with a proven
              track record of doubling its turnover since its foundation.
            </p>
          </div>
          {/* Services */}
          <div className="text-center w-full">
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>Architecture &amp; Building</li>
              <li>Construction Consultants</li>
              <li>Building Management</li>
              <li>Construction Management</li>
            </ul>
          </div>
          {/* Company */}
          <div className="text-center w-full">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-accent transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-accent transition-colors">
                  News &amp; Media
                </a>
              </li>
              <li>
                {/* Use Next.js Link for projects */}
                <Link
                  href="/projects"
                  className="hover:text-accent transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <a
                  href="#contacts"
                  className="hover:text-accent transition-colors"
                >
                  Contacts
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="hover:text-accent transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          {/* Quick Contact */}
          <div className="text-center w-full">
            <h3 className="font-semibold mb-4">Quick Contact</h3>
            <p className="text-sm text-muted-foreground mb-4">
              If you have any questions or need help, feel free to contact with
              our team.
            </p>
            <div className="flex flex-col items-center space-y-2 mb-2">
              <div className="flex items-center space-x-2">
                {/* <span className="material-icons text-accent">call</span> */}
                <span className="font-bold text-lg text-black-800">
                  +355 69 224 0077
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-icons text-gray-300">email</span>
                <span className="font-bold text-black-800">info@ober.al</span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground mb-4">
              Street Petronini Luarasi, Tirana, Albania
            </div>
            <div className="flex space-x-4 mt-2 justify-center">
              <a
                href="#"
                className="text-accent hover:text-accent/80 transition-colors"
                aria-label="Instagram"
              >
                {/* <span className="material-icons">instagram</span> */}
              </a>
              <a
                href="#"
                className="text-accent hover:text-accent/80 transition-colors"
                aria-label="Facebook"
              >
                {/* <span className="material-icons">facebook</span> */}
              </a>
              <a
                href="#"
                className="text-accent hover:text-accent/80 transition-colors"
                aria-label="LinkedIn"
              >
                {/* <span className="material-icons">linkedin</span> */}
              </a>
            </div>
          </div>
        </div>
        <div className="md:ml-90 mt-8 pt-8 border-t border-border flex justify-center">
          <p className="text-sm text-gray-500 text-center">
            © 2025 Ober Construction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
