import React, { useState, useEffect } from "react";

import { Wrapper, Container } from "./App.styles";
import AppHeader from "../AppHeader/AppHeader";
import AppContainer from "../AppContainer/AppContainer";
import Checkbox from "../../shared/Checkbox/Checkbox";
import LineChart from "../LineChart/LineChart";

export default function App() {
  const [lettuce, setLettuce] = useState(true);

  const colors = ["#62CBC6", "#00ABAD", "#00858C", "#006073", "#004D61"];

  return (
    <Wrapper>
      <Container>
        <AppHeader />

        <AppContainer
          left={
            <div>
              <h4>produtos disponiveis:</h4>
              <Checkbox
                value={lettuce}
                title="Arroz"
                onClick={() => setLettuce(!lettuce)}
              />
            </div>
          }
          middle={
            <div>
              <h4>sua lista de compras:</h4>
              <Checkbox
                value={lettuce}
                title="Arroz"
                onClick={() => setLettuce(!lettuce)}
              />
            </div>
          }
          right={
            <div>
              <h4>estatisticas:</h4>
              <LineChart color={colors[0]} title="Saudavel" percentage={30} />
              <LineChart
                color={colors[1]}
                title="Não tão saudavel"
                percentage={53}
              />
              <LineChart color={colors[2]} title="Limpeza" percentage={6} />
              <LineChart color={colors[3]} title="Outros" percentage={12} />
            </div>
          }
        />
      </Container>
    </Wrapper>
  );
}
