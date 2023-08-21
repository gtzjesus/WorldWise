import { useParams, useSearchParams } from 'react-router-dom';

function City() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  // TEMP DATA

  return (
    <>
      <h4>City {id}</h4>
      <p>
        Position: {lat}, {lng}
      </p>
    </>
  );

  //   return (
  //     <div className={styles.city}>
  //       <div className={styles.row}>
  //         <h6>City name</h6>
  //         <h3>
  //           <span>{emoji}</span> {cityName}
  //         </h3>
  //       </div>

  //       <div className={styles.row}>
  //         <h6>You went to {cityName} on</h6>
  //         <p>{formatDate(date || null)}</p>
  //       </div>

  //       {notes && (
  //         <div className={styles.row}>
  //           <h6>Your notes</h6>
  //           <p>{notes}</p>
  //         </div>
  //       )}

  //       <div className={styles.row}>
  //         <h6>Learn more</h6>
  //         <a
  //           href={`https://en.wikipedia.org/wiki/${cityName}`}
  //           target="_blank"
  //           rel="noreferrer"
  //         >
  //           Check out {cityName} on Wikipedia &rarr;
  //         </a>
  //       </div>

  //       <div>
  //         <ButtonBack />
  //       </div>
  //     </div>
  // );
}

export default City;
