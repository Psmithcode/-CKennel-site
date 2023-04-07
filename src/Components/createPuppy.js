// import React, { useState } from "react";
// import axios from "axios";

// export default function CreatePuppy() {
//   const [name, setName] = useState("");
//   const [image, setImage] = useState("");
//   const [text1, setText1] = useState("");
//   const [text2, setText2] = useState("");
//   const [text3, setText3] = useState("");
//   const [text4, setText4] = useState("");
//   let secureUrl = "";

//   const uploadImage = async (event) => {
//     event.preventDefault();
//     const imageFormData = new FormData();
//     imageFormData.append("file", image);
//     imageFormData.append("upload_preset", "nskblihj");
//     //make this an env variable
//     await axios
//       .post(
//         "https://api.cloudinary.com/v1_1/didcw4ntc/image/upload",
//         imageFormData
//       )
//       .then((response) => {
//         secureUrl = response.data.secure_url;
//         console.log(secureUrl);
//         handleSubmit(event);
//       });
//     return;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();

//     formData.append("name", name);
//     formData.append("text1", text1);
//     formData.append("text2", text2);
//     formData.append("text3", text3);
//     formData.append("text4", text4);
//     formData.append("image", secureUrl);
//     console.log(secureUrl);

//     try {
//       await axios.post("http://localhost:8080/puppies", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log("Form submitted successfully!");
//     } catch (err) {
//       console.log("Error submitting form.", err);
//     }
//   };

//   return (
//     <form onSubmit={uploadImage}>
//       <label>
//         Name:
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Text 1:
//         <input
//           type="text"
//           value={text1}
//           onChange={(e) => setText1(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Text 2:
//         <input
//           type="text"
//           value={text2}
//           onChange={(e) => setText2(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Text 3:
//         <input
//           type="text"
//           value={text3}
//           onChange={(e) => setText3(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Text 4:
//         <input
//           type="text"
//           value={text4}
//           onChange={(e) => setText4(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Image:
//         <input
//           type="file"
//           accept="image/*"
//           name="image"
//           onChange={(e) => setImage(e.target.files[0])}
//         />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

import React, { useState } from "react";
import axios from "axios";

export default function CreatePuppy() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "nskblihj");
      
      const cloudinaryRes = await axios.post(
        "https://api.cloudinary.com/v1_1/didcw4ntc/image/upload",
        formData
      );
      
      const secureUrl = cloudinaryRes.data.secure_url;

      const puppyData = {
        name,
        text1,
        text2,
        text3,
        text4,
        image: secureUrl,
      };

      await axios.post("https://barclabs.vercel.app/puppies", puppyData);

      setLoading(false);
      console.log("Form submitted successfully!");
    } catch (err) {
      setLoading(false);
      console.log("Error submitting form.", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Text 1:
        <input
          type="text"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
        />
      </label>
      <br />
      <label>
        Text 2:
        <input
          type="text"
          value={text2}
          onChange={(e) => setText2(e.target.value)}
        />
      </label>
      <br />
      <label>
        Text 3:
        <input
          type="text"
          value={text3}
          onChange={(e) => setText3(e.target.value)}
        />
      </label>
      <br />
      <label>
        Text 4:
        <input
          type="text"
          value={text4}
          onChange={(e) => setText4(e.target.value)}
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="file"
          accept="image/*"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </label>
      <br />
      {loading ? (
        <p>Submitting form...</p>
      ) : (
        <button type="submit">Submit</button>
      )}
    </form>
  );
}
