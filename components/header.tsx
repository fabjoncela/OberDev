"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/MainLogo2.png"
              alt="Konstruktion Logo"
              className="h-8 w-auto md:h-13 transition-all"
              style={{ maxWidth: "160px" }}
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              HOME
            </Link>
            <a
              href="#about"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              ABOUT US
            </a>
            <a
              href="#services"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              SERVICES
            </a>
            <Link
              href="/projects"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              PROJECTS
            </Link>
            <a
              href="#news"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              NEWS
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            {/* <Button variant="ghost" size="sm" className="hidden md:flex">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Button> */}
            <div
              className="hidden md:flex bg-transparent  text-black btext-sm font-medium px-0 cursor-pointer select-none "
              style={{ borderRadius: 0 }}
            >
              GET IN TOUCH
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="flex h-full flex-col">
            {/* Mobile menu header */}
            <div className="flex h-16 items-center justify-between px-4 border-b">
              {/* here mobile logo from public folder called MobileLogo.png */}
              <Link href="/">
                <img
                  src="/MainLogo.png"
                  alt="Konstruktion Logo"
                  className="h-11 w-auto cursor-pointer"
                  style={{ maxWidth: "160px" }}
                />
              </Link>

              {/* Close button with orange X */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="p-2 bg-accent-foreground hover:bg-accent-foreground/90"
              >
                <svg
                  className="h-6 w-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Button>
            </div>

            {/* Mobile menu navigation */}
            <nav className="flex-1 px-4 py-8">
              <div className="space-y-8">
                <Link
                  href="/"
                  className="flex items-center justify-between px-0 py-2 text-2xl font-bold text-foreground hover:text-accent transition-colors rounded"
                  onClick={toggleMobileMenu}
                >
                  <span>HOME</span>
                  <svg
                    className="h-4 w-4 text-foreground"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </Link>
                

                <a
                  href="#about"
                  className="flex items-center justify-between px-0 py-2 text-2xl font-bold text-foreground hover:text-accent transition-colors rounded"
                  onClick={toggleMobileMenu}
                >
                  <span>ABOUT US</span>
                  <svg
                    className="h-4 w-4 text-foreground"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </a>

                <a
                  href="#services"
                  className="flex items-center justify-between px-0 py-2 text-2xl font-bold text-foreground hover:text-accent transition-colors rounded"
                  onClick={toggleMobileMenu}
                >
                  <span>SERVICES</span>
                  <svg
                    className="h-4 w-4 text-foreground"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </a>

                <a
                  href="#work"
                  className="flex items-center justify-between px-0 py-2 text-2xl font-bold text-foreground hover:text-accent transition-colors rounded"
                  onClick={toggleMobileMenu}
                >
                  <span>WORK</span>
                  <svg
                    className="h-4 w-4 text-foreground"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </a>
                <Link
                  href="/projects"
                  className="flex items-center justify-between px-0 py-2 text-2xl font-bold text-foreground hover:text-accent transition-colors rounded"
                  onClick={toggleMobileMenu}
                >
                  <span>PROJECTS</span>
                  <svg
                    className="h-4 w-4 text-foreground"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </Link>

                <a
                  href="#news"
                  className="flex items-center justify-between px-0 py-2 text-2xl font-bold text-foreground hover:text-accent transition-colors rounded"
                  onClick={toggleMobileMenu}
                >
                  <span>NEWS</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
