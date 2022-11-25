import * as React from "react"
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg"

const SvgTop = () => (
    <Svg
        width={390}
        height={530}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Circle cx={76.763} cy={86.237} r={408.237} fill="#D4E3FF" />
        <Circle cx={76.763} cy={86.237} r={408.237} fill="url(#a)" />
        <Circle cx={-76.763} cy={121.129} r={408.237} fill="#528DFF" />
        <Circle cx={-76.763} cy={121.129} r={408.237} fill="url(#b)" />
        <Defs>
            <LinearGradient
                id="a"
                x1={-594.328}
                y1={-916.329}
                x2={354.736}
                y2={625.902}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#528DFF" />
                <Stop offset={1} stopColor="#fff" stopOpacity={0} />
            </LinearGradient>
            <LinearGradient
                id="b"
                x1={-467.554}
                y1={-287.108}
                x2={196.559}
                y2={708.48}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#D4E3FF" />
                <Stop offset={1} stopColor="#fff" stopOpacity={0} />
            </LinearGradient>
        </Defs>
    </Svg>
)

export default SvgTop

