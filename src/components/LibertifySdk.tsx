import React, { useEffect } from "react";
import { createStyles } from "../helpers/createStyles";
import "../styles/font.css";
import "../styles/main.css";
import AssetTable from "./AssetTable";
import { BiTransfer } from "react-icons/bi";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import Toggle from "react-toggle";
import { useOptimizePortfolioPortfolioOptimizePostMutation } from "../store/rtkquery/libertifyApi";
import Button from "./Button";
import Text from "./Text";

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
  const [optimizePortfolio, { data }] =
    useOptimizePortfolioPortfolioOptimizePostMutation();

  useEffect(() => {
    optimizePortfolio({
      optimizationRequest: {
        asset_class: "Equity",
        currency: "EUR",
        user_id: "123",
        portfolio: {
          composition: [
            {
              ticker: "GLE.PA",
              quantity: 25,
            },
            {
              ticker: "TTE.PA",
              quantity: 18,
            },
            {
              ticker: "FDJ.PA",
              quantity: 50,
            },
            {
              ticker: "AI.PA",
              quantity: 10,
            },
          ],
        },
      },
    });
  }, []);

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
      <Text style={{ display: "inline", padding: 10 }}>
        Nous venons d'auditer votre portefeuille actuel et à ce jour celui-ci
        comporte un risque de perte pouvant dépasser{" "}
        <Text style={{ display: "inline", color: "red" }}>€3,567</Text> en
        seulement 1 mois soit{" "}
        <Text style={{ display: "inline", color: 'red' }}>
          7% de l'ensemble de la valeur de votre portefeuille
        </Text>{" "}
        <Text style={{ display: "inline", color: 'green' }}>
          Vous pouvez dès maintenant passer ce risque à 2% en sélectionnant son
          optimisation statistique générée par Al.
        </Text>
      </Text>
      <div style={styles.wrapTable}>
        <AssetTable
          title="MON PORTEFEUILLE"
          style={styles.table}
          data={assets}
          renderItem={renderItem}
          percent={(data?.current_risk_level || 0) * -100}
        />
        <BiTransfer color="green" size={40} />
        <AssetTable
          title="OPTIMISATION STATISTIQUE"
          style={styles.table}
          data={assets}
          renderItem={renderItem}
          color="green"
          percent={(data?.optimized_risk_level || 0) * -100}
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
      <Button
        style={{ marginTop: 10, alignSelf: "center" }}
        title="VALIDER CETTE OPTIMISATION"
      />
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
