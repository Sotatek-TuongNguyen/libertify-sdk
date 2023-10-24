import React from "react";
import { createStyles } from "../helpers/createStyles";
import "../styles/font.css";
import "../styles/main.css";
import AssetTable from "./AssetTable";
import { BiTransfer } from "react-icons/bi";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import Toggle from "react-toggle";

interface SDKConfig {
  styles: {
    textColor: "#fff";
    backgroundColor: "#fff";
  };
}

export interface LibertifySdkProps {
  config: SDKConfig;
  apiKey: string;
}

const assets = [
  { name: "AIR LIQUIDE", value: 4240, percent: 35.75 },
  { name: "ABC ARBITRA...", value: 6020, percent: 9.3 },
  { name: "ACCOR", value: 32630, percent: 55.32 },
  { name: "ACTIA GROUP", value: 4240, percent: 14.87 },
  { name: "ATOCIA", value: 6020, percent: 9.86 },
];

export default function LibertifySdk({ config, apiKey }: LibertifySdkProps) {
  const renderItem = (asset) => {
    const isUp = asset.percent > 10;
    const color = isUp ? "green" : "red";

    return (
      <div style={styles.item}>
        <div style={styles.status}>
          {isUp ? (
            <IoMdArrowDropup color={color} size={20} />
          ) : (
            <IoMdArrowDropdown color={color} size={20} />
          )}
        </div>
        <div style={{ flex: 3 }}>{asset.name}</div>
        <div style={styles.flex1}>{asset.value}</div>
        <div style={{ ...styles.flex1, color }}>{asset.percent}%</div>
      </div>
    );
  };

  return (
    <div id="libertify" style={styles.container}>
      <div style={styles.wrapTable}>
        <AssetTable
          title="MON PORTEFEUILLE"
          style={styles.table}
          data={assets}
          renderItem={renderItem}
        />
        <BiTransfer color="green" size={40} />
        <AssetTable
          title="OPTIMISATION STATISTIQUE"
          style={styles.table}
          data={assets}
          renderItem={renderItem}
          color="green"
        />
      </div>

      <div style={{ paddingTop: 10 }}>
        <div style={{ flex: 1 }}></div>
        <div style={{ flex: 1, justifyContent: "center" }}>
          <Toggle icons={false} defaultChecked={true} />
          <span style={{ paddingLeft: 10 }}>
            REVENIR À L'OPTIMISATION PRECEDENTE
          </span>
        </div>
      </div>
    </div>
  );
}

const styles = createStyles({
  container: {
    flex: 1,
    padding: "10px 5px",
    flexDirection: "column",
  },
  wrapTable: {
    flex: 1,
    alignItems: "center",
  },
  table: {
    marginRight: 5,
    marginLeft: 5,
  },
  flex1: {
    flex: 1,
  },
  item: {
    padding: "10px 0",
  },
  status: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
