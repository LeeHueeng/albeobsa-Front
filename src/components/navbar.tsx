/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Logo from "@/styles/icon/logo";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Mainpage from "@/styles/icon/mainpage";
import Community from "@/styles/icon/community";
import Revew from "@/styles/icon/revew";
import Rank from "@/styles/icon/rank";
import Hotdeal from "@/styles/icon/hotdeil";
import Setting from "@/styles/icon/setting";

interface User {
  img: string;
  email: string;
  name: string;
}
const categories = [
  { id: 1, name: "메인 페이지", path: "/", icon: <Mainpage /> },
  { id: 2, name: "커뮤니티", path: "/community", icon: <Community /> },
  { id: 3, name: "후기", path: "/reviews", icon: <Revew /> },
  { id: 4, name: "랭킹", path: "/ranking", icon: <Rank /> },
  { id: 5, name: "핫딜", path: "/hotdeals", icon: <Hotdeal /> },
  { id: 6, name: "설정", path: "/settings", icon: <Setting /> },
  { id: 7, name: "로그인", path: "/login" },
];

export default function Navbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [user, setUser] = useState<User[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleClicks = (path: string) => {
    router.push(path);
  };

  const toggleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
    console.log(menu);
  };

  const handleClick = () => {
    router.push("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/api/crawling")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("로그인 실패 ", error);
      });
  }, []);

  return (
    <div css={container}>
      <div className="logo" onClick={() => handleClick()}>
        <svg
          width="80"
          height="39"
          viewBox="0 0 80 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.7612 37.9776H25.5522C27.0149 37.9776 29.5 36 29.5 33.3454C29.5 29.5 27 28.7132 25 28.7132C24.4776 28.7132 25.0224 28.5 24.5 28.5C17.5 14.5 16.5 7.99995 13 8.4999C13 9.4999 10 21.4999 6.22388 28.7132H5.1791C2.8806 28.7132 1 30.8087 1 33.3454C1 35.8821 2.8806 37.9776 5.1791 37.9776H10.403H18.7612Z"
            stroke="#A775FF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.75 30.7633H13.25L12.4211 33H11L14.7303 23H16.2845L20 33H18.5789L17.75 30.7633ZM17.3651 29.6955L15.5 24.6162L13.6349 29.6955H17.3651Z"
            fill="#A775FF"
          />
          <path
            d="M13.5 0L14.5623 3.05573H18L15.2188 4.94427L16.2812 8L13.5 6.11146L10.7188 8L11.7812 4.94427L9 3.05573H12.4377L13.5 0Z"
            fill="#A775FF"
          />
          <path
            d="M46.4178 21H48.5408V28.4838H46.4178V21ZM47.6788 23.8672H50.4882V25.6328H47.6788V23.8672ZM38.7718 29.0832H48.5408V33.1976H40.9108V34.9795H38.8037V31.6425H46.4497V30.7354H38.7718V29.0832ZM38.8037 34.1533H48.9717V35.838H38.8037V34.1533ZM40.9427 21.4374C43.2093 21.4374 44.8854 22.8467 44.8854 24.8391C44.8854 26.8153 43.2093 28.2408 40.9427 28.2408C38.692 28.2408 37 26.8153 37 24.8391C37 22.8467 38.692 21.4374 40.9427 21.4374ZM40.9427 23.1706C39.8573 23.1706 39.0591 23.7862 39.0591 24.8391C39.0591 25.892 39.8573 26.5238 40.9427 26.5238C42.0441 26.5238 42.8422 25.892 42.8422 24.8391C42.8422 23.7862 42.0441 23.1706 40.9427 23.1706Z"
            fill="#575868"
          />
          <path
            d="M52.2108 21.7613H54.3179V23.6566H57.1272V21.7613H59.2023V28.7754H52.2108V21.7613ZM54.3179 25.2927V27.0583H57.1272V25.2927H54.3179ZM58.7235 24.4179H62.315V26.1512H58.7235V24.4179ZM61.8361 21H63.9591V29.2127H61.8361V21ZM54.1423 29.8445H56.2493V31.189H61.8521V29.8445H63.9591V35.8218H54.1423V29.8445ZM56.2493 32.8413V34.1048H61.8521V32.8413H56.2493Z"
            fill="#575868"
          />
          <path
            d="M69.5926 22.1501H71.3165V24.3369C71.3165 28.0464 70.0395 31.5292 67.2461 32.9222L65.9691 31.189C68.4592 30.0065 69.5926 27.1231 69.5926 24.3369V22.1501ZM70.0235 22.1501H71.7156V24.3369C71.7156 27.0259 72.7691 29.7635 75.1315 30.9298L73.8545 32.6469C71.1888 31.27 70.0235 27.933 70.0235 24.3369V22.1501ZM75.7221 21H77.861V36H75.7221V21ZM77.3822 26.7667H80V28.5648H77.3822V26.7667Z"
            fill="#575868"
          />
          <path
            d="M76.5 15L77.3262 17.2918H80L77.8369 18.7082L78.6631 21L76.5 19.5836L74.3369 21L75.1631 18.7082L73 17.2918H75.6738L76.5 15Z"
            fill="#A775FF"
          />
        </svg>
      </div>

      <div className="nav-right">
        <div className="input">
          <input
            type="text"
            placeholder="검색"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        {isLoggedIn && (
          <div className="user-box">
            <div className="img-box">
              <Image
                src={user[0].img}
                width={36}
                height={36}
                alt="user profile"
              />
            </div>
            {user[0].name}
          </div>
        )}

        {!isLoggedIn && (
          <button className="loginbutton">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect width="30" height="30" fill="url(#pattern0_142_96)" />
              <defs>
                <pattern
                  id="pattern0_142_96"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1">
                  <use xlinkHref="#image0_142_96" transform="scale(0.00625)" />
                </pattern>
                <image
                  id="image0_142_96"
                  width="160"
                  height="160"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABqnSURBVHgB7Z0PdFNVnsd/N02hoS20zIC2uBCpA7uWY1HAUdpCPAv4X1BX0KNLYefo+m8UhEKds0qZdZwKVcuZUVFnj9QZdwCPgoJ7RmDXVNrKILhlDmUdtBBd26J4aLH/2yR37u+2r7z38pImzUty3+v7nBOS3LyUQL79/bu/ey8Bi0FKS0szOnp7ncTrdfrB77QR2xQf0AwC4GS3DACSgddRoM4gP6KVAGllV7TSgcfsfR4/9X9lA5uH2u2ezc8+WwcWgxAYoaDYOjs7XX4bzCQU8tjQzBDC0hX2n85ESDyUwDEAmzstJaWOfZ5WGIGMGAFy69bdvYRQfx6zTkviJbZw6Rcl1BFK3rPZbHVlZWUeGAGYWoBrS0pc4PfPB0Jd7KkLjIUbKH2P2Ee5zey2TSfAVSUlTrvfX0QIrBiOlcvMzITsrGxwOBzsPgtS2P34zPHgSEnhY9I1WrS0tPD7c4P35/hYd3c3NDY1QldXFzQ3N0OkYBzJ4sndLCbdYjbLaAoBontt72xfAYQshggsXRYT2GU5l/H7SUx048ePhxQmtFjT1NQETc14a+bCPHXqVCRvd7NfrsrNZZu3gQkwtABLmLXzMmvHXOwq4FlqaKZOnQqTsidB7uW57D47LmILh34L2QT1J+rhy4Yvw7KSaBXZnTuJJG00slU0pAB5bEd9G2AIa4cCy2ZCm8EEN2f2HGEENxTothtONcDx+nouyqFgX+I2owrRUAIMV3ho6YwmumCgdTxefxw+PXpkSFdtRCEaQoDc1VLfGxBCeCi0woJCmMduRhddMNAy7juwn1tHKeHRwkhCFFqAPLno6mQWj8d4mqC1mzNrNszInWFa4WlxhFlEFKPRhSisAIvXFz/OCsalECS5QOEtWrAIctj9SKaBueV9B/YFdc88WSGwUdSsWTgBFhcXz6Q2eBGCuFtLeNqgEHe8vSOoRUQhMmt4nWjWUCgBrl23bgMrqZRqvYbF32V3LbOENwRDumZKSss3bdoIgiCEADHJ8FHfLuZyZ6pfk5KLRQsWgkX4oAirqw9CF8ui1YhkDZMgwWCs5we6nT10ql/DgvHK5StYgpELFpGRMzUHZubN5ALEWRcVGez/fMXc/IKe2pqaQ5BAEmYBQ2W4aPXuXrqMC9AiekK5ZRuQijGOMRsT1Q6WEAGGcrkoOhTfSCqpxAOphohiVJNIlxx3F4yzGX7q+whULhcFd9MNN8HiW28Du90OFvqCnTwYyuD9119/BV6vV/5yBgW6JH9+flXtwdozEEfiagHXrFtXRAjdph7HDPehBx4M2uZkoS9oDV95bat2pkzJapYlV0CciJsFxBILE1/AP2z2rFk80UhPTweL+IBWcPbs2dDW1h6YoBC4gSUnwJKTKogDcRFgsPoellZus1xuQki2Jw9WFwJmUQi44iXCmAtw7fp1LzLxlcjHMN678/Y7eH3PIrFguWY8C30C2r7iJMKYCrB4/fo3WFDxoHwMxYfx3vTp08FCDKSeyb+e/Ctv/xqEiTC/IN9ZW1P7HsSImAlwwO0qanyYZDz2yM9h4sSJYCEWGINjR9FxZgm7lbMnMwsKCjJqamo+hBgQEwFqxXxWpis+/aWaQBGyeu01sXLHugvQEp+xCSbCWMWEugoQ53XZBy2Tj1niMx6hRHjtvALPJ9U1x0AndBMg7+MjsFs+ZonPuEgixKk7+awJobBkbuHcqtrqWg/ogA10AOd22U/apR5f8c9FlvgMDH53DzID4lDPy1Oyi3/nOhC1ALGrxcfmdqlqbnfZXUt5em9hbPA7xMkCFfid78LvHqIkagFiS5VafDjDMXvWbLAwB/hdLlQ1BGMnUydvp4uOqGJAnnT0LxwaBD+sxm+MhcHBGZOWlnN8OxGJgfLM+WiaWodtATEGoCrxYcyw2BKfaUHDEhDTE7ohmnhw2AL09ff0DcYA0hSb1UhqXhwpDv4dq5ISHg/CMBmWC+4vNsMS+Rg2k1rzu+YHyzP25GQ+byzj4rmFBaS2usYNERKxANHc+sGvqPdh3HfTjTeCxchgyuTJfIu5s2fPyodd+fPz34u0ozpiFzzgegfBmMBaMjnyWLZ0aUB9kPr4hgIREZEAi0uKV2iVXKxi88gD48GlTIQqXCw8WwURELYAeaZDQVH3Qddr1ftGLjMunxG4dJZlxZEUqMPuhWeuV1FwxmzX7K7X394GfXWfge/bZvA1nATfmWZ+Q3zfKtdS2NLSgaSmQ9LFWUDYY3vOT9htGn9uv2wamBUsu5061SDfgSFjoEC9Opz3h7UqbmB/vtPyMRTfQpMJUBJc31+OQk/1xwEiGy5chDnTYXT+PEjOu4o9N9cUJa433s9ucuwk6dJw1hmHZQF9/buSDoIxn5nE18tE1/nm6+BlVg5FqDeS5ewZqFKMypsFKdffzG63gBlAY4RdM/JlngMbil431HuHtIBa1g8bDYwe+6HQut7ZDl3vbo+J6MIBLWPKolu4GI1uFXF7uK2vbVUOEnpdeVm5O9T7hrSAWtbPyOITQXgSaBU7mOXt3reXC9Fx5908ljQiuG0e7t2oWOJJCWrHHep9IQvR/UVn5U4GK5av4Mv4jEj3h3vhh189xVxhFdDeXhAF2t4Ofcc+gx73fi5AoyYteKCPau8Z51DNqyHLMGrrhyo34gaRaGlan3gIftj0S/ZYn8QiFuDnxM8o+ucMhmQFFfRbwaAEtYBa1g93KDWa9etk7rbtV/8G3v/3gFHAZKi3tsqQ1lDLCs4rnFdZXV2tuf1bUAuoFfsZyfphfNf+0gvQ/vILCY/1hoNkDTsqXwcjoWUFveBfEez6UC7YJX9ipKIzd7lrHoLOd7eD0cEkpfXpdYb6JZqjTlIpfTzY7IimANVzvkbKfCXxeb88CWahl9UPMXM3Crm4D6GqZ7C9s3OF1rWaAqQUiuTPsR3bCEjiM2IAHwosWKcW3Q9GARsVCtQbTxG6WOvaAAEOtFe75GNGcL9mFt/YdU+D0SgsKFAPuVZptO4HCLCP+hTtNBhUit5uZYlPPNAKqpMRu0YyYtMYUJhKI8R+5zcUW+ITkBmqVi1CaZH6GoUA+fYaqobTXMHP6MBSS6ISjqSLsvlNb8wgPgS3AZYnI6ittSVrXfJrFHPBlFCXvD8BGw7RlIoKTq3Fo9SCIhtdMA+ScqbBqJmzgKSmac7Zehu+4Ja479hR3mGDBeVIMYv4ENROVna2agtgmwtk88PKZgRCFO43N/dyEBWM+9pfjngJQthgU+mYO++G5LxZMCrvqrDe09+E+hMYnT8fpM+IjQZdH34A/jBCBDOJTwLdsLJBgc6Xvz5o7rTarn6x/klhE5DzrDjbE/kqwCGRhOe4Q9/OFLTW7W/+LqgQzSg+pKu7C54uVU4HpzlSM6WTmQZjwD5/n+LUouysbGHFh19mLMSHwvvRW7shdfn9urdFocAyn39FswnVrOJDtLLhju6OwTXlgwK0EZvC/ebkiDvv28EsiZ6g1ct4YSukPfxETPvxsAEVhZb+8OrBv8fM4pMI2CWNXjiizXZhTHluWy5LQEQEJ+f1LLnYmCjGv/r7sOM8PXDceQ8T/Cvc4ppdfMiMQC0NGjsuwFWrVuFEsdIFZ2eBcHhbwT72N2DL0KeZFFud0C0moh0eV8yhxR0JqLWE5RipOYEL0J6SohAfzn6IWH7xn30fksb+H4y99wtWGumCaEDLl5Eg8Y00eDkmSynCzp5OF94PuGC/S/6iqDub+k/9O7+3jeuFcT/7HByFzTAcUHxo+Yy6/sKI5OQoG1r8A3EgFyCbIsmTv4gZsGjQliqW/noUY47CM5B6y1dAUnwQCRkbN1uWL84EaIrSCwJUT78JKcDmNzXHR19xjlvDcONCbGsy804FojJJ5VVZAZobPSkLViUg4gnQH0SACHfJ//I5F2Mo0PVijc8i/qhrylIiYsMGBPkLQlq/s0OflYduGN1xqLgwzRJfwsBERC3Cjt5ep81P/E7FhQ7xttilLPsNF4wLtVwyWj+zbIVhVNSelVCv00aAOENdJAK0LbKTobBEg6Ua+5T2wTHL+iUedWnP7wOnjRLilA+miFb/Y8Vn2h750WQYF6II0SVb1k8MslW1QEKo086ykClUNijawvNIrZ8adMmjfuqEWFH3dWQloHiQNprAZRfpcgqbrqQ4VBaQwDg7lR21gGRmjgeR4PW/KBl1zR0QK9b8oRtEA8X36s/Em8kar9IWK8U48dck6vO+Ykr3VxAtJD0PRhJnzlMQEXWCSyjJYEmIUoDCueBoBYjis4v9O6Y37d2UidAPohHYX0AzbFR0C9jXCtFAUpwwEmnvAUMQ4IJF64KmPdFZQJJ2BYxEOrrFc8NasyHipUpqorSAMEIt4JlWMeNANeIL0MLUWAK0SCiWAC0SivACjDqLVTWxWogF1gE98gH5YSNmgOpQyDYiaQKeG66hrVbxXbBjCkTDcBoZzEBaSlinsCUUggJkybqiztHVFd1qM70hKdEJELCZwRtlKceApAoowHMBFpBwC6gUYLdgk+s6zONG21FjRC4eK74FpIQyARKiCJJaWs6BSERtARmN3x6AkQS6XxFd8Dm1tiict1NKW+UftatLLAtIMudDNFR0zID/OvE1/M/fQ0x44T79o/13DvdBzcnh9xlePE5M66dOQjABthNKPcwKDg42NQu21a09g5diaITllGbfGHim/Ur4rO/H7FkHuL/5FFyXzAG9yZucBHpT+XEfRMNF48TMLXGrNjmUEg9LQpgAZXQLZgERMuHWiK7/wjsOHvkhf0B8/Wz/Yi8YAZzDPRZll3XeFDEF2NSkOmU+CTw2G7V55IONzY0gGmTC4rCv3dGVA8tbXdwCyjn6XT2/ic4xHVr8RWzHR9QVFkrsHltfX59HPoh+Wm0qEw3vaE4O3bbYRpPhmbYrecwXjI2HX4K2vk4QmTcPRrfzFyYfsQgL9KC5Wblme/Ozz9bZKioqWgNmQ84JNhvC4kDbj28L+jJauyJm9T7omQyhaO74Dl4/vgNE5cO/eKNupxdVfOrcggCpw3vJVteFulgESNZyzXEUXZGGyw3GH09+IKwrjtb6IfnTBBWgKv5juQcv//VvTkSIolIrpACxHKNyw+hu0e2i+40EdMVNzBqKROXBPl0WE4magDSqNUVkFpD6fQoL2NBwCkTEdsnP+T1au0fO5/OEYzigK37wo1Jh4sGak16drJ+d1QCNkQED+N34J/+0vl6fW3ExU6toiQhim/wYfEYvCyixDId+EW5IuCX88ls/bNqrz5bD118hpvtFLSkPq8FkKe2CBdRKRJqahrf7aExhyUjdxRvDjveG4mTLaW4JEyVCFN+at7r5MspowdkPtIAiotYSJiAB54T4ARR7oNWfOA4ics/0myE7dSLoheSO9552Qzx557AX/vU/unQRH7K8cBSIynG1lggdDPlk54SoMuEmMU+fTE9Ohftzl4KeoAg3Hv4tv8XaGuLf9fC+38BLbv0K/mj9rr9CTOuHNDQ0KJ4TQgaN3YWTkrr7divexHy2iHEgcsulLpg1Uf9TPNEKojXczko1etPW1wGv1++Eez8shk9bqqBj0q/BP/pr0AORrR92wKgL0Gz2bdDYDUathw4d6p5bkO8C2X7R6WljYcrkySAiKEAUTK8/uol7Ne1MKJ+cqYO9HjecbD3N3f2PUoa/eQTWHLH2+Ms/v8R/rvR5qa0Tesd+xB/bu/8Bhgtav3W3jgZRqT9Rz2+DEHBvKtu0RXqqPi2zCige2Sq9+bjW0etCkMWEcf+MpfDC/74BsQBd5d7T33GR4981a+LlMH/S1VyQWakTeCigBt33yVYPNLefhZPnT0PVN59yyxeKnvG7gSZ/D6O/vxeIP/Lk6vn7BFz8IeP4CVXR308UuYYqcMDaDBk82rCJmU50w6KeGXzPtJv5lx4LlylHLkY5UjLU1tsxpNBC0ZteDV7H55Da+CQQb/jlpaLCZGHrfghqp75eKUBit7vlzxWfvrys3C0vx2D3wpEjR0FkHmBWcFqmExIBih9v0YhPwm//Htr/7inoSz8Y1vXoekWO/ZAA8QHxYAOCfCzg14dNy1Uqfoig5RgJdIXl+et0Lc0kCowLuyb+Dnoyd4W8DsUnuutFPj16RDVCA447CBCgHWzb5M9FzoYlMEbbel2pKUSIYFzYcclTQJlVVIPtVhv/KUVo14tg9que/UgiSRXq6wL+FWVlZR5255aPVVdXg+iYTYQ+VqLRKtU8smCUsA2ncvYfUC0EY9nvgLYUaP9LqNJUHqypFt4KImYTIY8LmSWUXPL6W0bDIoELznIaTqmKzwCVWtdpCtDb690GsvXCmIyoA0pRkUSYqMQkFoy6aD+svfNbw4jvCIv95CvgePJRtnmb1rWaAsTmBFYT3KL+oUYBRfjWonK4m5VpjE7/L9RGuHH6VDAK+w7sVw4Q6g52bdBgQisZaTglZp9gMNZcuRI2XP2oZtHYCMyakGs4a44aUa//TYKkjcGuD9pAxhKPVvXUHO6aMHvWbDAS+OUtmpzP63VftYnZYKEGf2EezbsPnpz9AKSPMtYvz463dyjdL4FtbOqtMtj1odMpQhXKNaIVRNCNlRes59ZQ9AQFrd4frt/MZ3mMBmojoPQSwvr1vx6C2upajxmsoARaQ+mLPdN5VpcZDL1A4W346aN8ZsdoVk9i62tboVu2udVQ1g8ZOq1CK0iJS3oqWcGcqcYJitXgl3zrpS44+t0J3iKVyLZ8FB42VcSivSyeqDNfZCjrh4S1i83a9cXYN+SSnuN5D79Y/ySYBXfjYaj65jBvwYoHGOPdzH4BXJOuNrzwJJ597tcBsR8rvawc6n1hFZbsJGmll/pOS8/xL9rPUu2FCxaCGUAh4O2Jq1by/j0U42dnT+hmGVFw0zKccBUT26yBm5nAsstwrB8S9j5ea9avqSBge1x67nA4YNVjjwecgGgmmnm3y1kuSnzc3NEfN0r3clBkGLulJY/hYktjj6dnXMofZ6VNMGwpaChwzvfFLRUBsV841g8Ju7Tu6/GV2kfbimDgaC+cHdmzZw8ULS8Cs5LFm08nms5i6QnO+SrEx2Y9ksAWlvVDwl5Iylv28+f2MHnfII19d/YsZGdnw8QJ5ph7tYgMTDz2q2Y9mPVbzTJfd5g/IrJzQso3lWM7jVs+tvPtnYZoVLDQF3S96im3UHO+wYi4r4f4YbX8ObrinTt3gsXIAl1vQOJBbNdBhES8l0Ntbe2ZuYUFmLy4pDF0xWNSHDBZ0BV0FvpysPogfFTlVg6yejFzvbshQobV2VhetqkUVFu67fvv/YG7oFuYjmCut7ysvBSGwbBba1lt8HZQ9Qxufe1VKx40Mfjd4nfcrTxLpnU4rldi2Nsp8W4ZVVaMH6ytrQ1m5M4AC/Px7q5dAc0GQOmTm57b9CcYJlHt51VbU3vo2oJrM5kJvkYaw7XEGCDmTB3e3n0WYoJut7pGuTaIfc9bWGWkFKIg6tUtWKAGdTzIPqyROqgtQqNZ72NxX6ojtRSiJGoBYvu+Oh5E3t+7R9gdtizCp7GpEXa8rSyz8dkOFvdJe/xFgy7r+/hyO0Jvl4/xpOT1V63M2MDgd1f5+zcDX/DT27WWWA4H3fZ0xebV/MJ83Pl8iTTm9Xr5zki5ubm8ecHCOKD4MOMNOGSa0tXlm8sjrvcFQ9dNhZkI6+YWzmWx6YUGVsyMLREai6DiY8Xm8ufKy0BHdN/VmonQbYnQuIQUX1l0Ga8WMdlWHUWoLs9YIhSfeIsPidm+/p/UfPInVqi+lBWqZ0pjkgixRpieng4W4oDZ7m9ffgna29uVLxBaycS3CmJETA+WYIXq3Vru+NCfD8H4zEzeS2iReLDO99Yf/1M9xdZfaH6u/EGIITE/2UQrJkTQElozJokHJw2wZosVCwX9CUcJxJi4HK0TTITSNg45OVMh2R7ZeW8W0YGNBe/uejdgeo0Tw5hPTdzOduIizJ97Xt68gOCxYHXHjlnJSRzBZAPjvVMau1z4iW/l82XPV0CcCHtVnF4UFxfPBBvZRYE65eMovkX/uBAKBN2V3yxgMym6XXW8BziVymazcJ9wiCNxFyBSUlLi9FH/R2oRIrjtx8IFC0y93DMRoMvdsXOn8syOAZgI6pLYfL5e02uRkJDjFbGX8Oo5cyqJnTjktUIEXTL+J6FFtLJkfcD/z1de3RpwYhGCmW6qI3XlM888cwYSQEIsoJy169auYnEhnk0ScByRZQ2jA2O99/fs0bR6gC6XsmSjf6Vjwki4AJFQLhktYWF+gWm2AYkX2L/3MYv3NGK9hLpcjc8iDmtL1pYCvXBSkxzcEGkRE6FRt4aLF1jaUm8SqSCOJZZwEEqASChriKAQl921zNDbw8UCFN7+A/uCbyBKwE18sHrz5s11IBDCCVCiuKR4BVrDYEJEAS5csGjEC3FI4QkS6wVDWAEiaA294EW3HHQHpJHomqVDAHEON9SWyQMZbqkerfOxQmgBSoQrRJxXNnPWjMLDU6uCJReDMHdrh6SVIiQZQ2EIAUqEI0QE3TJaRD69J+hRs+GCojty5AgvpQy5QTzBjaN4kuEGg2AoAUqEK0RkxuW5XIhTmSiNYhnlomtsagpt7RADCk/CkAKUkIRIqG1+sGRFDs6soJvOZaLMzs4Sxjqi4Jqamrngmpoawz0KA+dut9jBvs0IrjYYhhagHMyaKUAR0Au7dg0Fuurs7EmQnZXFbtlxmfpDsbWca4FGNuWIU2N4qF9E66fR2vnpe2lj0raJnFyEi2kEKNFfR/StYv+0xeFYRTUoQkdKChdmCrvH5EZy3djFjWQO3KuRir+4JrqLuU2cCutmj3G7ErxH0QUtEIeAEOKh4K9k1n5bRVmFB0yE6QQoB1u/KKEusJHFkVhGIeiP66rYI7cRY7twMbUA5aBl7PP3zSQ2soQlL3lsaCYIBFo5fk4zgbrUlNTdZnCv4TBiBKiGfcEZ7d3tTIQ2F6E0j/YfRxYXUQ6IrY4Scoz6fXXpY9LdI0VwakasAIOBbttP/E4CxMmE4mRDUyiBDObCM9jzDEopto1laL2XCwtw9wrKMlRoZaL22CicZ89ZDEfZY5snNTXVM1LFpsXfABFByiahoXcGAAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
            구글 계정으로 로그인
          </button>
        )}
      </div>
      <div className="nav-rightnext" onClick={toggleMenu}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 8H21"
            stroke="#BCEB00"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 16H21"
            stroke="#BCEB00"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className={`slide-menu ${menu ? "open" : ""}`}>
          <ul>
            {categories.map((category) => (
              <li
                key={category.id}
                css={
                  router.pathname === category.path
                    ? activeCategoryStyle
                    : undefined
                }
                onClick={() => handleClicks(category.path)}>
                <div className="icon">{category.icon}</div>
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const container = css`
  display: flex;
  padding: 10px 62px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  

  .slide-menu {
    display: flex;
    padding: 10px 0px;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    position: fixed;
    width: 250px; 
    background-color: white;
    top: 52px;
    right: -250px;
    transition: right 0.3s; 
    z-index: 1000; 
  }
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    width: 100%;
    height: 54px;
    padding-left: 50px;
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    align-items: center;
    border-radius: 0 100px 100px 0;
    cursor: pointer;
  }
  .icon {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }


  .slide-menu.open {
    right: 0;
  }
  
  .nav-rightnext {
    display: none;
    cursor: pointer;
  }

  @media (max-width: 550px) {
    .nav-right {
      display: none;
    }
    .nav-rightnext {
      display: block;
    }
  }

  .logo {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    p {
      width: 43px;
      height: 15px;
    }
  }
  .input {
    width: 100%;
    max-width: 1000px;
    height: 40px;
  }
  input {
    width: 100%;
    height: 40px;
    border-radius: 100px;
    border: 1px solid #995DFF;
  }
  .nav-right {
    display: flex;
    gap: 50px;
    align-items: center;
    width: 70%;
  }
  .img-box {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: black;
    overflow: hidden;
  }
  .user-box {
    display: flex;
    gap: 10px;
    align-items: center;
    white-space: nowrap;
  }
  .loginbutton {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    background-color: #995DFF;
    color: white;
    width: 400px;
    height: 42px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    outline: none;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 400;
    line-height: 17.58px;
    text-align: center;
  }
  .nav-rightnext {
    display: none;
    cursor: pointer;
  } 
  @media (max-width: 550px) {
    .nav-right{
      display: none;
    }
    .nav-rightnext {
    display: block;
    }
`;

const activeCategoryStyle = css`
  background-color: #e7ff85;
`;
