"use client";
import {motion, useScroll, useViewportScroll} from "framer-motion";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Navigation = () => {

  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const closeMenu = () => {
    setOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // get the scrollYProgress from the useViewportScroll hook
  const { scrollYProgress } = useScroll();

  console.log(scrollY);


  return (
			<header
				className={cn(
					"fixed left-0 right-0 z-50 top-5 bg-transparent ",
					scrollY > 100
						? " backdrop-invert-0 shadow-md backdrop-filter backdrop-blur-lg bg-zinc-700/20"
						: "",
				)}
			>
				<div className={cn("container relative")}>
					<div className="flex items-center justify-between">
						<Link className="px-3 py-2 rounded-full " href="/">
							<Image
								src="/images/logo.png"
								alt="LR Projects"
								className="w-32"
								width={222}
								height={108}
							/>
						</Link>
						<Sheet open={open} onOpenChange={setOpen}>
							<SheetTrigger asChild>
								<Button
									type="button"
									variant="default"
									className="flex items-center p-6 space-x-3 bg-white rounded-full text-zinc-700"
								>
									<HamburgerMenuIcon className="w-8 h-8 text-yellow-600" />
									<span className="text-lg text-black uppercase">Menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent>
								<motion.nav
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.3 }}
								>
									<ul className="flex flex-col items-start gap-y-4">
										<li>
											<Link
												href="/"
												className="text-2xl font-semibold text-zinc-800"
												onClick={closeMenu}
											>
												Home
											</Link>
										</li>
										<li>
											<Link
												href="/project"
												className="text-2xl font-semibold text-zinc-800"
												onClick={closeMenu}
											>
												Projects
											</Link>
										</li>
										<li>
											<Link
												href="/about"
												className="text-2xl font-semibold text-zinc-800"
												onClick={closeMenu}
											>
												About
											</Link>
										</li>
										<li>
											<Link
												href="/health"
												className="text-2xl font-semibold text-zinc-800"
												onClick={closeMenu}
											>
												Health & Safety
											</Link>
										</li>
										<li>
											<Link
												href="/contact"
												className="text-2xl font-semibold text-zinc-800"
												onClick={closeMenu}
											>
												Contact
											</Link>
										</li>
									</ul>
								</motion.nav>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</header>
		);
};
export default Navigation;
