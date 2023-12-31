import React, { CSSProperties } from "react";
import { createStyles } from "../helpers/createStyles";

interface AssetTableProps {
  style?: CSSProperties;
  color?: string;
  data?: any[];
  renderItem?: (any) => React.ReactNode;
  title?: string;
  percent: number;
}

export default function AssetTable({
  style = {},
  color = "red",
  data = [],
  renderItem = () => null,
  title = "",
  percent = 0,
}: AssetTableProps) {
  return (
    <div style={{ ...style, ...styles.container, borderColor: color }}>
      <div style={{ ...styles.header, backgroundColor: color }}>
        <div style={styles.textHeader}>{title}</div>
        <div style={styles.percentHeader}>{percent.toFixed(1)}%</div>
      </div>
      <div style={styles.listHeader}>
        <div style={styles.flex1}></div>
        <div style={styles.title}>Titres</div>
        <div style={styles.flex1}>Valeur</div>
        <div style={styles.flex1}>%</div>
      </div>
      {data.map((e, i) => (
        <React.Fragment key={i}>{renderItem(e)}</React.Fragment>
      ))}
    </div>
  );
}

const styles = createStyles({
  container: {
    flex: 1,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "column",
  },
  header: {
    padding: '0 15px',
    height: 80,
    alignItems: 'center'
  },
  textHeader: {
    color: "white",
    flex: 1,
    fontSize: 22,
  },
  percentHeader: {
    color: "white",
    fontSize: 30,
    fontFamily: "GTWalsheim-Bd",
  },
  flex1: {
    flex: 1,
  },
  title: {
    flex: 3,
  },
  listHeader: {
    padding: "10px 0",
  },
});
