export default function Colours() {
    const list = ["Червоний", "Синій", "Зелений"];
    const result = list.map(colour => <li>{colour}</li>);
    return <ul>{result}</ul>
}