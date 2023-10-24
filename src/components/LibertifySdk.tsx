import React from "react";
import { createStyles } from "../helpers/createStyles";
import "../styles/font.css";
import "../styles/main.css";
import AssetTable from "./AssetTable";
import { BiTransfer } from 'react-icons/bi';
import { IoMdArrowDropup } from 'react-icons/io';

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

export default function LibertifySdk({ config, apiKey }: LibertifySdkProps) {
  const renderItem = (a) => {
    return (
      <div style={styles.item}>
        <div style={styles.status}><IoMdArrowDropup color="green" size={20}/></div>
        <div style={{ flex: 3 }}>AIR LIQUIDE</div>
        <div style={styles.flex1}>4240</div>
        <div style={styles.flex1}>35.75%</div>
      </div>
    );
  };

  return (
    <div id="libertify" style={styles.container}>
      <AssetTable
        title="MON PORTEFEUILLE"
        style={styles.table}
        data={[1, 2, 3, 4]}
        renderItem={renderItem}
      />
      <BiTransfer color="green" size={40}/>
      <AssetTable
        title="OPTIMISATION STATISTIQUE"
        style={styles.table}
        data={[1, 2, 3, 4]}
        renderItem={renderItem}
        color="green"
      />
    </div>
  );
}

const styles = createStyles({
  container: {
    flex: 1,
    padding: "10px 5px",
  },
  table: {
    marginRight: 5,
    marginLeft: 5,
  },
  flex1: {
    flex: 1,
  },
  item: {
    padding: '10px 0'
  },
  status: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});
