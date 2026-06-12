import "./styles/style.scss";
import { useEffect, useState } from "react";

import Context from "@/context/Context";
import CartModal from "@/components/modals/CartModal";
import QuickView from "@/components/modals/QuickView";
import QuickAdd from "@/components/modals/QuickAdd";
import Compare from "@/components/modals/Compare";
import MobileMenu from "@/components/modals/MobileMenu";
import NewsLetterModal from "@/components/modals/NewsLetterModal";
import SearchModal from "@/components/modals/SearchModal";
import Wishlist from "@/components/modals/Wishlist";
import Categories from "@/components/modals/Categories";
import AccountSidebar from "./components/modals/AccountSidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import WOW from "@/utlis/wow";

import HomePage from "./pages";
import ShopPage from "./pages/products/shop";
import ProductDetailPage from "./pages/productDetails/product-detail";
import ShopingCartPage from "./pages/products/shopping-cart";
import CheckoutPage from "./pages/products/checkout";
import CompareProductsPage from "./pages/other-pages/compare-products";
import AboutUsPage from "./pages/other-pages/about-us";
import ContactPage from "./pages/other-pages/contact";
import FAQSPage from "./pages/other-pages/FAQs";
import TermsOfUsePage from "./pages/other-pages/term-of-use";
import LoginPage from "./pages/other-pages/login";
import RegisterPage from "./pages/other-pages/register";
import ForgotPasswordPage from "./pages/other-pages/forget-password";
import MyAccountPage from "./pages/my-account/my-account";
import MyAccountOrdersPage from "./pages/my-account/my-account-orders";
import MyAccountOrdersDetailsPage from "./pages/my-account/my-account-orders-details";
import MyAccountAddressPage from "./pages/my-account/my-account-address";
import PageNotFoundPage from "./pages/not-found";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 100) {
        header.classList.add("header-bg");
      } else {
        header.classList.remove("header-bg");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    setScrollDirection("up");
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 250) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setScrollDirection("down");
        } else {
          // Scrolling up
          setScrollDirection("up");
        }
      } else {
        // Below 250px
        setScrollDirection("down");
      }

      lastScrollY.current = currentScrollY;
    };

    const lastScrollY = { current: window.scrollY };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);
  useEffect(() => {
    // Dynamically import Bootstrap
    import("bootstrap")
      .then((bootstrap) => {
        // Close any open modal
        const modalElements = document.querySelectorAll(".modal.show");
        modalElements.forEach((modal) => {
          const modalInstance = bootstrap.Modal.getInstance(modal);
          if (modalInstance) {
            modalInstance.hide();
          }
        });

        // Close any open offcanvas
        const offcanvasElements = document.querySelectorAll(".offcanvas.show");
        offcanvasElements.forEach((offcanvas) => {
          const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
          if (offcanvasInstance) {
            offcanvasInstance.hide();
          }
        });
      })
      .catch((error) => {
        console.error("Error loading Bootstrap:", error);
      });
  }, [pathname]); // Runs every time the route changes

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      if (scrollDirection == "up") {
        header.style.top = "0px";
      } else {
        header.style.top = "-185px";
      }
    }
  }, [scrollDirection]);
  useEffect(() => {
    const wow = new WOW({
      mobile: false,
      live: false,
    });
    wow.init();
  }, [pathname]);
  return (
    <>
      <Context>
        <div id="wrapper">
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="shop" element={<ShopPage />} />
              <Route
                path="product-detail/:id"
                element={<ProductDetailPage />}
              />
              <Route path="shopping-cart" element={<ShopingCartPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route
                path="compare-products"
                element={<CompareProductsPage />}
              />
              <Route path="about-us" element={<AboutUsPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="FAQs" element={<FAQSPage />} />
              <Route path="term-of-use" element={<TermsOfUsePage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route
                path="forget-password"
                element={<ForgotPasswordPage />}
              />
              <Route path="my-account" element={<MyAccountPage />} />
              <Route
                path="my-account-orders"
                element={<MyAccountOrdersPage />}
              />
              <Route
                path="my-account-orders-details"
                element={<MyAccountOrdersDetailsPage />}
              />
              <Route
                path="my-account-address"
                element={<MyAccountAddressPage />}
              />
              <Route path="404" element={<PageNotFoundPage />} />
              <Route path="*" element={<PageNotFoundPage />} />
            </Route>
          </Routes>
        </div>
        <CartModal />
        <QuickView />
        <QuickAdd />
        <Compare />
        <MobileMenu />
        <NewsLetterModal />
        <SearchModal />
        <Wishlist />
        <Categories />
        <AccountSidebar />
      </Context>
    </>
  );
}

export default App;
