import { useQuery } from "react-query";
import Spinner from '../spinner'
import Grid from "@mui/material/Grid2";
import { getActorImages } from "../../api/tmdb-api";
import ActorHeader from "../headerActor";
import FilterActorCard from "../filterActorsCard";


const TemplateActorPage = ({ actor, children, filter, setFilter }) => {
  const { data , error, isLoading, isError } = useQuery(
    ["image", { id: actor.id }],
    getActorImages
  );
  

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const firstImage = data.profiles?.[0]?.file_path;

  return (
    <>
      <ActorHeader actor={actor} />
      <FilterActorCard filter={filter} setFilter={setFilter} />


      <Grid container spacing={5} style={{ padding: "15px" }}>
        {/* Display the first image */}
        <Grid size={{ xs: 3 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            {firstImage ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${firstImage}`}
                alt={`${actor.name}'s profile`}
                style={{
                  maxWidth: "100%",
                  borderRadius: "8px",
                }}
              />
            ) : (
              <p>No image available.</p>
            )}
          </div>
        </Grid>
         <Grid size={{ xs: 9 }}>{children}</Grid>
      </Grid>
      </>
  );
};

export default TemplateActorPage;