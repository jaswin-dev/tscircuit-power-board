import type { FC } from "react";

const PowerBoard: FC = () => (
  <board
    width="38mm"
    height="24mm"
    layers={2}
    thickness="1.6mm"
    material="fr4"
    minTraceWidth="0.3mm"
    minViaHoleDiameter="0.3mm"
    minViaPadDiameter="0.65mm"
    minTraceToPadEdgeClearance="0.2mm"
    defaultViaTenting="both_sides"
    autorouter="auto-local"
  >
    <pinheader
      manufacturerPartNumber="61300211121"
      name="J1"
      pinCount={2}
      pinLabels={["5V_IN", "GND"]}
      pitch="2.54mm"
      pcbX={-14}
      pcbRotation={-90}
      schX={-7}
      schY={1}
      schFacingDirection="right"
    />
    <pinheader
      manufacturerPartNumber="61300211121"
      name="J2"
      pinCount={2}
      pinLabels={["3V3_OUT", "GND"]}
      pitch="2.54mm"
      pcbX={14}
      pcbRotation={-90}
      schX={7}
      schY={1}
      schFacingDirection="left"
    />
    <chip
      name="U1"
      manufacturerPartNumber="MCP1700-3302E/TT"
      footprint="sot23"
      pinLabels={{ pin1: "GND", pin2: "VOUT", pin3: "VIN" }}
      pinAttributes={{
        VIN: { requiresPower: true },
        VOUT: { providesPower: true },
        GND: { requiresGround: true },
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["VIN"] },
        rightSide: { direction: "top-to-bottom", pins: ["VOUT"] },
        bottomSide: { direction: "left-to-right", pins: ["GND"] },
      }}
      schWidth={2.8}
      pcbRotation={180}
    />
    <capacitor
      name="C1"
      capacitance="2.2uF"
      footprint="0805"
      manufacturerPartNumber="GRM21BR71C225KA12L"
      pcbX={-4.2}
      pcbY={0.3}
      pcbRotation={-90}
      schX={-4.1}
      schY={-0.65}
      schRotation={270}
    />
    <capacitor
      name="C2"
      capacitance="2.2uF"
      footprint="0805"
      manufacturerPartNumber="GRM21BR71C225KA12L"
      pcbX={4.2}
      pcbY={0.8}
      pcbRotation={-90}
      schX={4.1}
      schY={-0.65}
      schRotation={270}
    />
    <resistor
      name="R1"
      resistance="1k"
      footprint="0805"
      manufacturerPartNumber="RC0805FR-071KL"
      pcbX={4.2}
      pcbY={-3.3}
      schX={-1.5}
      schY={-4.1}
    />
    <led
      name="D1"
      color="green"
      footprint="0805"
      manufacturerPartNumber="LTST-C170KGKT"
      pcbX={8.2}
      pcbY={-3.3}
      schX={1.5}
      schY={-4.1}
    />
    <testpoint
      name="TP1"
      footprintVariant="through_hole"
      holeDiameter="0.9mm"
      doNotPlace
      pcbX={-6}
      pcbY={5.2}
      schX={-3}
      schY={3.5}
    />
    <testpoint
      name="TP2"
      footprintVariant="through_hole"
      holeDiameter="0.9mm"
      doNotPlace
      pcbX={0}
      pcbY={5.2}
      schX={0}
      schY={3.5}
    />
    <testpoint
      name="TP3"
      footprintVariant="through_hole"
      holeDiameter="0.9mm"
      doNotPlace
      pcbX={6}
      pcbY={5.2}
      schX={3}
      schY={3.5}
    />

    <net name="VIN_5V" />
    <net name="VOUT_3V3" />
    <net name="GND" />

    <trace from="J1.pin1" to="net.VIN_5V" />
    <trace from="U1.VIN" to="net.VIN_5V" />
    <trace from="C1.pin1" to="net.VIN_5V" />
    <trace from="TP1.pin1" to="net.VIN_5V" />

    <trace from="U1.VOUT" to="net.VOUT_3V3" />
    <trace from="C2.pin1" to="net.VOUT_3V3" />
    <trace from="J2.pin1" to="net.VOUT_3V3" />
    <trace from="R1.pin1" to="net.VOUT_3V3" />
    <trace from="TP2.pin1" to="net.VOUT_3V3" />

    <trace from="J1.pin2" to="net.GND" />
    <trace from="J2.pin2" to="net.GND" />
    <trace from="U1.GND" to="net.GND" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="C2.pin2" to="net.GND" />
    <trace from="D1.cathode" to="net.GND" />
    <trace from="TP3.pin1" to="net.GND" />

    <trace name="LED_A" from="R1.pin2" to="D1.anode" />

    <hole diameter="3.2mm" pcbX={-15} pcbY={8} />
    <hole diameter="3.2mm" pcbX={15} pcbY={8} />
    <hole diameter="3.2mm" pcbX={-15} pcbY={-8} />
    <hole diameter="3.2mm" pcbX={15} pcbY={-8} />

    <silkscreentext text="3V3 POWER" pcbX={0} pcbY={9.1} fontSize={1.6} anchorAlignment="center" />
    <silkscreentext text="5V" pcbX={-6} pcbY={3.5} fontSize={0.85} anchorAlignment="center" />
    <silkscreentext text="3V3" pcbX={0} pcbY={3.5} fontSize={0.85} anchorAlignment="center" />
    <silkscreentext text="GND" pcbX={6} pcbY={3.5} fontSize={0.85} anchorAlignment="center" />
    <silkscreentext text="K" pcbX={10.3} pcbY={-3.3} fontSize={0.9} anchorAlignment="center" />
    <silkscreentext text="REV A" pcbX={0} pcbY={-9.3} fontSize={0.95} anchorAlignment="center" />
    <silkscreentext text="5V IN" pcbX={-13.8} pcbY={4.2} fontSize={1} anchorAlignment="center" />
    <silkscreentext text="3V3 OUT" pcbX={13.8} pcbY={4.2} fontSize={1} anchorAlignment="center" />
    <silkscreentext text="GND" pcbX={-13.8} pcbY={-4.2} fontSize={0.85} anchorAlignment="center" />
    <silkscreentext text="GND" pcbX={13.8} pcbY={-4.2} fontSize={0.85} anchorAlignment="center" />
  </board>
);

export default PowerBoard;
