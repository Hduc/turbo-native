"use client";

import { Button } from "uipm";

export default function Web() {
  return (
    <div >
      <Button onPress={() => console.log("Pressed!")} title="Boop" />

      <div className="grid grid-flow-col grid-rows-3 gap-4">
        <div className="row-span-3 ...">01</div>
        <div className="col-span-2 ...">02</div>
        <div className="col-span-2 row-span-2 ...">03</div>
      </div>
    </div>
  );
}
