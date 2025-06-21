import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

export default function Home() {
  return (
    <div className="
    bg-neutral-800
      rounded-lg
      h-full
      w-full
      overflow-hidden
      overflow-y-auto
    ">
      <Header>
        <div className="mb-2">
          <h1 
            className="
              text-ehite
              text-3xl
              font-semibold
            ">
            Welcome back
          </h1>
          <div className="
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols=3
              2xl:grid-cols-4
              gap-3
              mt-4
            ">
            <ListItem 
              image="/images/images.jpg"
              name="Liked Songs"
              />
          </div>
        </div>
      </Header>
      
    </div>
  );
}
