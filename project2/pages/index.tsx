import React from "reactjs";
import Head from "next/head";
import Prism from "prismjs";
require("prismjs/components/prism-yaml");
import "prismjs/themes/prism-tomorrow.css";

import { useEffect } from "react";

type BatchSpec = {
  name: string;
  display: boolean;
  spec: string;
};

// eslint-disable-next-line no-var
var batchSpecs = [
  {
    display: true,
    name: "horse-was-here",
    spec: `name: horse-was-here
description: the horse was here

on:
  - repository: github.com/sourcegraph/automation-testing

steps:
  - run: |
      echo '                                 |\    /|' >> horse.txt
      echo '                              ___| \,,/_/' >> horse.txt
      echo '                           ---__/ \/    \' >> horse.txt
      echo '                          __--/     (D)  \' >> horse.txt
      echo '                          _ -/    (_      \' >> horse.txt
      echo '                         // /       \_ /  -\' >> horse.txt
      echo '   __-------_____--___--/           / \_ O o)' >> horse.txt
      echo '  /                                 /   \__/' >> horse.txt
      echo ' /                                 /' >> horse.txt
      echo '||          )                   \_/\' >> horse.txt
      echo '||         /              _      /  |' >> horse.txt
      echo '| |      /--______      ___\    /\  :' >> horse.txt
      echo '| /   __-  - _/   ------    |  |   \ \' >> horse.txt
      echo ' |   -  -   /                | |     \ )' >> horse.txt
      echo ' |  |   -  |                 | )     | |' >> horse.txt
      echo '  | |    | |                 | |    | |' >> horse.txt
      echo '  | |    < |                 | |   |_/' >> horse.txt
      echo '  < |    /__\                <  \' >> horse.txt
      echo '  /__\                       /___\' >> horse.txt
    container: alpine:3

changesetTemplate:
  title: the horse was here
  body: the horse was here.
  branch: batch-changes/horse
  commit:
    message: the horse was here
  published: false`,
  },
];

const BatchSpecDetails: React.FunctionComponent<{ spec: BatchSpec }> = ({
  spec,
}) => {
  if (!!!spec.display) {
    return <></>;
  }
  return (
    <div key={spec.name}>
      <h4>{spec.name}</h4>
      <pre>
        <code className="language-yaml">{spec.spec}</code>
      </pre>
    </div>
  );
};

const Home: React.FunctionComponent<{}> = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Batch Changes - Example Batch Specs</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/style.css" />
      </Head>

      <main>
        <h1 className="title">Batch Spec Examples</h1>

        {batchSpecs.map((spec: BatchSpec) => (
          <BatchSpecDetails spec={spec} />
        ))}
      </main>
    </div>
  );
};

export default Home;
