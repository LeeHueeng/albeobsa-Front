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
  /*
  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/api/member/login")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("로그인 실패 ", error);
      });
  }, []);*/
  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <div css={container}>
      <div className="logo" onClick={() => handleClick()}>
        <Logo />
        <svg
          width="43"
          height="15"
          viewBox="0 0 43 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.41777 0H11.5408V7.4838H9.41777V0ZM10.6788 2.86717H13.4882V4.63283H10.6788V2.86717ZM1.77182 8.08315H11.5408V12.1976H3.91077V13.9795H1.80374V10.6425H9.44969V9.73542H1.77182V8.08315ZM1.80374 13.1533H11.9717V14.838H1.80374V13.1533ZM3.94269 0.437364C6.20934 0.437364 7.88539 1.84665 7.88539 3.83909C7.88539 5.81533 6.20934 7.24082 3.94269 7.24082C1.69201 7.24082 0 5.81533 0 3.83909C0 1.84665 1.69201 0.437364 3.94269 0.437364ZM3.94269 2.17063C2.85726 2.17063 2.05914 2.78618 2.05914 3.83909C2.05914 4.89201 2.85726 5.52376 3.94269 5.52376C5.04409 5.52376 5.84221 4.89201 5.84221 3.83909C5.84221 2.78618 5.04409 2.17063 3.94269 2.17063Z"
            fill="#575868"
          />
          <path
            d="M15.2108 0.761339H17.3179V2.65659H20.1272V0.761339H22.2023V7.77538H15.2108V0.761339ZM17.3179 4.29266V6.05831H20.1272V4.29266H17.3179ZM21.7235 3.41793H25.315V5.15119H21.7235V3.41793ZM24.8361 0H26.9591V8.21274H24.8361V0ZM17.1423 8.84449H19.2493V10.189H24.8521V8.84449H26.9591V14.8218H17.1423V8.84449ZM19.2493 11.8413V13.1048H24.8521V11.8413H19.2493Z"
            fill="#575868"
          />
          <path
            d="M32.5926 1.15011H34.3165V3.33693C34.3165 7.04644 33.0395 10.5292 30.2461 11.9222L28.9691 10.189C31.4592 9.00648 32.5926 6.12311 32.5926 3.33693V1.15011ZM33.0235 1.15011H34.7156V3.33693C34.7156 6.02592 35.7691 8.7635 38.1315 9.92981L36.8545 11.6469C34.1888 10.27 33.0235 6.93305 33.0235 3.33693V1.15011ZM38.7221 0H40.861V15H38.7221V0ZM40.3822 5.76674H43V7.5648H40.3822V5.76674Z"
            fill="#575868"
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

        <div>
          <svg
            width="14"
            height="22"
            viewBox="0 0 14 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.15385 3.5564C9.76923 3.5564 11.9231 5.71021 11.9231 8.32559C11.9231 9.17174 11.6923 10.0179 11.2308 10.7871L11 11.2487L11.4615 12.7102C11.6154 13.2486 12 13.6333 12.5385 13.941C13 14.1718 13.3077 14.6334 13.3077 15.1719V15.4795C13.3077 16.0949 12.7692 16.6333 12.1538 16.6333H2.15385C1.53846 16.6333 1 16.0949 1 15.4795V15.1719C1 14.6334 1.30769 14.1718 1.76923 13.941C2.23077 13.7102 2.61539 13.2486 2.84616 12.7102L3.30769 11.2487L3.07692 10.7871C1.69231 8.55632 2.46154 5.55632 4.69231 4.24863C5.46154 3.78709 6.30769 3.5564 7.15385 3.5564Z"
              stroke="#858585"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.15379 21.2487C8.00346 21.2487 8.69225 20.5599 8.69225 19.7103C8.69225 18.8606 8.00346 18.1718 7.15379 18.1718C6.30412 18.1718 5.61533 18.8606 5.61533 19.7103C5.61533 20.5599 6.30412 21.2487 7.15379 21.2487Z"
              stroke="#858585"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.61533 3.5572V2.78797C5.61533 1.94182 6.30763 1.24951 7.15379 1.24951C7.99994 1.24951 8.69225 1.94182 8.69225 2.78797V3.5572"
              stroke="#858585"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
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
  padding: 10px 0px;
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
    border: 1px solid #bceb00;
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
    background-color: #bceb00;
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
