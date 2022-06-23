
export default function iframeRenderer (props) {
  const width = props.width;
  const height = props.height;
  const source = props.src;
  const allow = props.allow ? props.allow : ""

  return (
    <figure className="">
      <iframe src={source} width={width} height={height} allow={allow} sandbox=''/>
      <figcaption style={{ textAlign: "center" }}>iFrame</figcaption>
    </figure>
  );
}