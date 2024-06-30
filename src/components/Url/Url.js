export default function Url() {
    const object = {
        name: "YouTube",
        url: "https://www.youtube.com/"
    };
    return <a href={object.url}>{object.name}</a>
}