import Button from "../Components/Button";
import { MdCloudDownload } from "react-icons/md";
import "./index.css";

export default function ButtonPage() {
  const handleClick = () => {
    console.log("clicked!");
  };
  return (
    <>
      <Button outline success onClick={handleClick} className="mb-5">
        <MdCloudDownload />
        Download
      </Button>
      <Button danger>Delete</Button>
      <Button primary>Buy Now</Button>
      <Button secondary>Add to cart</Button>
      <Button success>View Files</Button>
      <Button outline rounded primary>
        Click Me
      </Button>
    </>
  );
}
