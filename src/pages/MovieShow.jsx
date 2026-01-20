import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieShow() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`/api/movies/${id}`)
            .then((resp) => {
                setMovie(resp.data);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <main className="container py-4">Caricamento...</main>;

    if (!movie)
        return <main className="container py-4">Film non trovato.</main>;

    return (
        <main className="container py-4">
            <h1>{movie.title}</h1>
            {movie.image && (
                <img
                    src={`/movies_cover/${movie.image}`}
                    alt={movie.title}
                    className="img-fluid rounded mb-3"
                />
            )}
            {movie.director && <p><strong>Regista:</strong> {movie.director}</p>}
            {movie.genre && <p><strong>Genere:</strong> {movie.genre}</p>}
            {movie.release_year && <p><strong>Anno:</strong> {movie.release_year}</p>}

            {movie.description && (
                <>
                    <h2 className="mt-4">Descrizione</h2>
                    <p>{movie.description}</p>
                </>
            )}
            {movie.reviews && (
                <>
                    <h2 className="mt-4">Recensioni</h2>
                    {movie.reviews.length === 0 ? (
                        <p>Nessuna recensione.</p>
                    ) : (
                        <ul className="list-group">
                            {movie.reviews.map((rev) => (
                                <li key={rev.id} className="list-group-item">
                                    <strong>{rev.name}</strong> — voto: {rev.vote}
                                    <div>{rev.text}</div>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </main>
    );
}
