import './App.css';
import { useState, useEffect } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL ,deleteObject} from 'firebase/storage';
// list all the files in a specific path
import { v4 } from "uuid";
// where our image is going to upload ref is that ref

function App() {

  const [imageUpload, setimageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);


  const uploadImage = () => {
    console.log("hello");
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("image uploaded");
      console.log("hellouy");
    })
    // this function return a promise means when ever we upload is finished the following funcion runs

  };

  const imageListRef = ref(storage, "images/");
  


  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev)=>[...prev,url]); 
          // we are now setting the image list to be list of two items which are both the url which we can access each of these pictures so why we would need url 

          // get the current value of list and set it equal to the same list but add the url at the end 

        });
      });
    });
    // list all the content inside the path listAll
  }, []);

  // delete images
  const deleteImage=()=>{
    const deleteRef=ref(storage,"images/");

    deleteObject(deleteRef).then(()=>{
      alert("all files deleted successfully");
    }).catch(()=>{
      alert("error occured");
    })
  }


  return (
    <div className="App">
      <input type="file" onChange={(event) => { setimageUpload(event.target.files[0]) }}></input>

      <button onClick={uploadImage}>Upload Image</button>
      {imageList.map((url)=>{
        return <img  src={url}/>
      })}

      <button onClick={deleteImage}>Delete All</button>
    </div>
  );
}

export default App;
