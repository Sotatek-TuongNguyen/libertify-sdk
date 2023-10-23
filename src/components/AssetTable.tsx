import React, { CSSProperties } from "react";
import { createStyles } from "../helpers/createStyles";

interface AssetTableProps {
  style?: CSSProperties;
  color?: string;
  data?: any[];
  renderItem?: (any) => React.ReactNode;
  title?: string;
}

export default function AssetTable({
  style = {},
  color = "red",
  data = [],
  renderItem = () => null,
  title = "",
}: AssetTableProps) {
  return (
    <div style={{ ...style, ...styles.container, borderColor: color }}>
      <div style={{ ...styles.header, backgroundColor: color }}>{title}</div>
      <div>
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
    padding: 15,
    fontSize: 22,
    color: "white",
  },
  flex1: {
    flex: 1,
  },
  title: {
    flex: 3,
  },
});
