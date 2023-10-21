"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

function EditMenu({ id, title, imageUrl, menuPdf }) {
  const CLOUD_NAME = "dzendqev2";
  const UPLOAD_PRESET = "roterstein";
  const CLOUD_KEY = "456821689281721";
  const [newTitle, setNewTitle] = useState(title);
  const [mnpdf, setmnpdf] = useState("");
  const [photo, setPhoto] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [buttonText, setButtonText] = useState("Update Menu");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const router = useRouter;
  const { data: session, status } = useSession();

  if (status === "loading...") {
    return <p>loading...</p>;
  }
  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Loading...");
    try {
      let menuPdf = null;
      let imageUrl = null;
      if (photo) {
        imageUrl = await uploadImage();
      }
      if (mnpdf) {
        menuPdf = await uploadPdf();
      }
      const body = {
        newTitle,
      };
      if (imageUrl != null) {
        body.imageUrl = imageUrl;
      }
      if (menuPdf != null) {
        body.menuPdf = menuPdf;
      }
      const apiUrl = process.env.NEXTAUTH_URL || 'https://roterstein.vercel.app';
      const res = await fetch(`${apiUrl}/api/menu/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error("failed to update menu");
      }
    
      setShowSuccessAlert(true);
    

     
        setButtonText("Update Menu");
   

      router.reload();
      router.push("/dashboard/menu");
    } catch (error) {}
  };
  const uploadImage = async () => {
    if (!photo) return;
    const formData = new FormData();
    formData.append("file", photo);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("api_key", CLOUD_KEY);
    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();

      const imageUrl = data["secure_url"];
      return imageUrl;
    } catch (error) {
      console.log(error);
    }
  };
  const uploadPdf = async () => {
    if (!mnpdf) return;
    const formData = new FormData();
    formData.append("file", mnpdf);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("api_key", CLOUD_KEY);
    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();

      const menuPdf = data["secure_url"];
      return menuPdf;
    } catch (error) {
      console.log(error);
    }

    const { msg, success } = await res.json();
    if (success) {
      setButtonText("Success"); // successful submission
      setIsFlying(true);
      setTimeout(() => {
        setButtonText("Update Menu"); // change text back after 2 seconds
        setIsFlying(false);
      }, 2000);
    } else {
      setButtonText("Error"); // failed submission
      setTimeout(() => {
        setButtonText("Update Menu"); // change text back after 2 seconds
      }, 2000);
    }
    setError(msg);
    setSuccess(success);
  };

  return (
    <div>
      <div>
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        ></link>

        <>
          <div className="">
            <main>
              <div className="page-header">
                <h1>Dashboard / Edit Menu</h1>
              </div>

              <div className="page-content">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
                  <input
                    onChange={(e) => setNewTitle(e?.target?.value)}
                    value={newTitle}
                    type="text"
                    className="border border-slate-500 px-8 py-2 "
                  />

                  <label htmlFor="newimg">Upload image</label>
                  <input
                    className="border border-slate-500 px-8 py-2 "
                    type="file"
                    id="newimg"
                    onChange={(e) => setPhoto(e.target.files[0])}
                  />
                  <label htmlFor="newimg">Upload PDF</label>
                  <input
                    className="border border-slate-500 px-8 py-2 "
                    type="file"
                    id="newimg"
                    onChange={(e) => setmnpdf(e.target.files[0])}
                  />

                  <center>
                    {" "}
                    <button
                      type="submit"
                      className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
                    >
                      {buttonText}
                    </button>
                  </center>
                  {showSuccessAlert && (
                    <div className="bg-green-200 border border-green-600 text-green-900 px-4 py-2 rounded mt-4">
                      Edit successful! {/* You can customize this message */}
                    </div>
                  )}
                </form>
              </div>
            </main>
          </div>
        </>
      </div>
    </div>
  );
}

export default EditMenu;
