import { useEffect, useState } from "react"
import axios from "axios"
import Spinner from "../components/Spinner"
import { Link } from "react-router-dom"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5555/books')
        .then((response) => {
            setBooks(response.data.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])


  return (
    <div className="p-4">
        <div className="flex justify-between items-center">
            <h1 className="text-3xl my-8">Top 25 Books List According to Google</h1>
            <Link to="/books/create">
                <MdOutlineAddBox className="text-sky-500 text-4xl" />
            </Link>
        </div>
        {loading ? (
            <Spinner />
        ) : (
            <table className="w-full border-separate border-spacing-2">
                <thead>
                    <tr>
                        <th className="border border-slate-600 rounded-md bg-cyan-700 hover:bg-cyan-300">No</th>
                        <th className="border border-slate-600 rounded-md bg-cyan-700 hover:bg-cyan-300">Title</th>
                        <th className="border border-slate-600 rounded-md max-md:hidden bg-cyan-700 hover:bg-cyan-300">Author</th>
                        <th className="border border-slate-600 rounded-md max-md:hidden bg-cyan-700 hover:bg-cyan-300">Publish Year</th>
                        <th className="border border-slate-600 rounded-md bg-cyan-700 hover:bg-cyan-300">Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={book._id} className="h-8">
                            <td className="border border-slate-700 rounded-md text-center bg-cyan-300 hover:bg-cyan-700">{index + 1}</td>
                            <td className="border border-slate-700 rounded-md text-center bg-cyan-300 hover:bg-cyan-700">{book.title}</td>
                            <td className="border border-slate-700 rounded-md max-md:hidden text-center bg-cyan-300 hover:bg-cyan-700">{book.author}</td>
                            <td className="border border-slate-700 rounded-md max-md:hidden text-center bg-cyan-300 hover:bg-cyan-700">{book.publishYear}</td>
                            <td className="border border-slate-700 rounded-md text-center bg-cyan-300 hover:bg-cyan-700">
                                <div className="flex justify-center gap-x-4">
                                    <Link to={`/book/details/${book._id}`}>
                                        <BsInfoCircle className="text-2xl text-green-800" />
                                    </Link>
                                    <Link to={`/book/edit/${book._id}`}>
                                        <AiOutlineEdit className="text-2xl text-yellow-600" />
                                    </Link>
                                    <Link to={`/book/delete/${book._id}`}>
                                        <AiOutlineDelete className="text-2xl text-red-600" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
  )
}

export default Home