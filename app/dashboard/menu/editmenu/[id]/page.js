
import EditMenufrm from "@/dashcomponent/EditMenufrm"



const getMenuById = async(id) =>{
  try {
    const res = await fetch(`https://roterstein.vercel.app/api/menu/${id}`, {
      cache: "no-store",
    });
    if (!res.ok){
      throw new Error("Could not find menu");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditMenu({ params }) {

  const {id} = params;
  const {menu} = await getMenuById(id);
  const {title  , imageUrl} = menu;

  return (
    <div>
        <EditMenufrm id={id} title={title}  imageUrl={imageUrl} />
    </div>
  )
}

