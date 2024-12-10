import { useSelector } from "@/store/hooks";
import Link from "next/link";
import { styled } from '@mui/material/styles';
import { AppState } from "@/store/store";
import Image from "next/image";

export default function Logo() {
  const customizer = useSelector((state: AppState) => state.customizer);
  // const LinkStyled = styled(Link)(() => ({
  //   height: customizer.TopbarHeight,
  //   width: customizer.isCollapse ? "40px" : "180px",
  //   overflow: "hidden",
  //   display: "block",
      
  // }));
  const LinkStyled = styled(Link)(() => ({
    height: customizer.TopbarHeight,
    width: customizer.isCollapse ? "40px" : "300px",
    overflow: "hidden",
    display: "block",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center", 
    
  }));
  

  if (customizer.activeDir === "ltr") {
    return (
      <LinkStyled href="/">
        {customizer.activeMode === "dark" ? (
          <Image
            src="https://ums.lpu.in/lpuums/assets/login/img/logos/ums_logo1.svg"              //Logo Required 04-12-2024
            alt="logo"
            height={400}
            width={275}
            priority
          />
        ) : (
          <Image
           src="https://ums.lpu.in/lpuums/assets/login/img/logos/ums_logo1.svg"
            alt="logo"
            height={customizer.TopbarHeight}
            width={275}
            priority
          />
        )}
      </LinkStyled>
    );
  }

  return (
    <LinkStyled href="/">
      {customizer.activeMode === "dark" ? (
        <Image
          src="https://ums.lpu.in/lpuums/assets/login/img/logos/ums_logo1.svg"         //Logo Required 04-12-2024
          alt="logo"
          height={customizer.TopbarHeight}
          width={175}
          priority
        />
      ) : (
        <Image
          src="https://ums.lpu.in/lpuums/assets/login/img/logos/ums_logo1.svg"          //Logo Required 04-12-2024
          alt="logo"
          height={customizer.TopbarHeight}
          width={175}
          priority
        />
      )}
    </LinkStyled>
  );
}
// /logo/lpuums-logo.svg
