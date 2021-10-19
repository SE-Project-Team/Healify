import React, { useContext } from "react";
import {
  Chart,
  ChartAxis,
  ChartBar,
  ChartGroup,
  ChartVoronoiContainer,
} from "@patternfly/react-charts";

import logo from "../Assets/mentalhealth_icon_round.png";
import styles from "./Statistics.module.css";
import styles2 from "./Home.module.css";

export const Statistics = () => {
  return (
    <>
      <header className={styles2.header}>
        <div className={styles2.threeLineBtn}>
          <ul className={styles2.menuBtnCustom}>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <img className={styles2.logo} src={logo} />
        <div>
          <h1 className={styles2.heading}>Healify</h1>
        </div>
        <ul className={"nav " + styles2.settingsList}>
          <li className={"nav-link"}>About</li>
          <li className={"nav-link"}>Contact Us</li>
          <li className={"nav-link"}>Profile</li>
          <li className={styles2.navLoginBtn} id={styles2.idLoginBtn}>
            Login
          </li>
          <li className={styles2.navLoginBtn} id={styles2.navSignUp}>
            Sign Up
          </li>
        </ul>
      </header>
      <div className={styles.mainDiv}>
        <Chart
          ariaDesc="Quiz scores"
          ariaTitle="Quiz Statistics"
          containerComponent={
            <ChartVoronoiContainer
              labels={({ datum }) => `${datum.name}: ${datum.y}`}
              constrainToVisibleArea
            />
          }
          domain={{ y: [0, 25] }}
          domainPadding={{ x: [30, 25] }}
          legendData={[
            { name: "Ill Being and Well Being" },
            { name: "Control and Coping" },
            { name: "Relationships and Belonging" },
            { name: "Self Perception" },
          ]}
          legendOrientation="vertical"
          legendPosition="right"
          height={250}
          padding={{
            bottom: 50,
            left: 50,
            right: 200, // Adjusted to accommodate legend
            top: 50,
          }}
          width={600}
        >
          <ChartAxis />
          <ChartAxis dependentAxis showGrid />
          <ChartGroup offset={11}>
            <ChartBar
              data={[
                { name: "Ill Being and Well Being", x: "10-10-2021", y: 20 },
                { name: "Ill Being and Well Being", x: "13-10-2021", y: 15 },
                { name: "Ill Being and Well Being", x: "15-10-2021", y: 21 },
                { name: "Ill Being and Well Being", x: "18-10-2021", y: 18 },
                // { name: "Ill Being and Well Being", x: "19-10-2021", y: 20 },
                // { name: "Ill Being and Well Being", x: "20-10-2021", y: 15 },
                // { name: "Ill Being and Well Being", x: "22-10-2021", y: 21 },
                // { name: "Ill Being and Well Being", x: "23-10-2021", y: 18 },
              ]}
            />
            <ChartBar
              data={[
                { name: "Control and Coping", x: "10-10-2021", y: 15 },
                { name: "Control and Coping", x: "13-10-2021", y: 18 },
                { name: "Control and Coping", x: "15-10-2021", y: 16 },
                { name: "Control and Coping", x: "18-10-2021", y: 14 },
                // { name: "Control and Coping", x: "19-10-2021", y: 15 },
                // { name: "Control and Coping", x: "20-10-2021", y: 18 },
                // { name: "Control and Coping", x: "22-10-2021", y: 16 },
                // { name: "Control and Coping", x: "23-10-2021", y: 14 },
              ]}
            />
            <ChartBar
              data={[
                { name: "Relationships and Belonging", x: "10-10-2021", y: 14 },
                { name: "Relationships and Belonging", x: "13-10-2021", y: 17 },
                { name: "Relationships and Belonging", x: "15-10-2021", y: 12 },
                { name: "Relationships and Belonging", x: "18-10-2021", y: 10 },
                // { name: "Relationships and Belonging", x: "19-10-2021", y: 14 },
                // { name: "Relationships and Belonging", x: "20-10-2021", y: 17 },
                // { name: "Relationships and Belonging", x: "22-10-2021", y: 12 },
                // { name: "Relationships and Belonging", x: "23-10-2021", y: 10 },
              ]}
            />
            <ChartBar
              data={[
                { name: "Self Perception", x: "10-10-2021", y: 13 },
                { name: "Self Perception", x: "13-10-2021", y: 18 },
                { name: "Self Perception", x: "15-10-2021", y: 10 },
                { name: "Self Perception", x: "18-10-2021", y: 12 },
                // { name: "Self Perception", x: "19-10-2021", y: 13 },
                // { name: "Self Perception", x: "20-10-2021", y: 18 },
                // { name: "Self Perception", x: "22-10-2021", y: 10 },
                // { name: "Self Perception", x: "23-10-2021", y: 12 },
              ]}
            />
          </ChartGroup>
        </Chart>
      </div>
    </>
  );
};
