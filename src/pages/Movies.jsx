import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("/api/movies")
            .then((resp) => {
                setMovies(resp.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <main className="container py-4">
            <h1>Movies</h1>
            {loading && <p>Caricamento...</p>}
            {!loading && movies.length === 0 && <p>Nessun film trovato.</p>}
            {!loading && movies.length > 0 && (
                <div className="row g-3">
                    {movies.map((movie) => (
                        <div className="col-12 col-md-6 col-lg-4" key={movie.id}>
                            <div className="card h-100">
                                <img
                                    src={`/movies_cover/${movie.image}`}
                                    className="card-img-top"
                                    alt={movie.title}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>

                                    <Link to={`/movies/${movie.id}`} className="btn btn-primary">
                                        Dettagli
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

        </main>
    );
}
