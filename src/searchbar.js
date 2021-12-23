import React, {useState} from 'react';
import axios from 'axios';
function SearchBar(){
  const[searchTerm, setSearchterm] = useState('');
  const[books, setBooks] = useState({items: []});
  const onInputChange = (e) =>{
    setSearchterm(e.target.value);
  }

  let API_URL = 'https://www.googleapis.com/books/v1/volumes';
  const fetchBook = async()=>{
    const result = await axios.get(`${API_URL}?q=${searchTerm}`);
    setBooks(result.data);
    console.log(result);
  }

  const onSubmitHandler = (e) =>{
    e.preventDefault();
    fetchBook();
  }
  return(
    <div class="min-h-screen bg-gray-100 flex justify-center items-center">
	   <div class="container mx-auto bg-indigo-500 rounded-lg p-14">
		   <form onSubmit={onSubmitHandler}>
			<h1 class="text-center font-bold text-white text-4xl">Azog Book Directory</h1>
				<p class="mx-auto text-center text-white font-normal text-sm my-6 max-w-lg">Find Your Perfect Book To Read</p>
				<div class="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
					<input class="text-base text-gray-400 flex-grow outline-none px-2 " type="search" value={searchTerm} onChange={onInputChange} placeholder="Search Your Book Here" />
					<div class="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
						
						<button type="submit" class="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">Search</button>
					</div>
				</div>
		</form>
    <br />
    <ul className="text-black">
    {
      books.items.map((book, values)=>{
        return(
          <div>
          <li key={values}>

          <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />

            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.link}</p>

          <hr />
          </li>
          </div>
        );
      })
    }
    </ul>
	</div>
</div>
  );
}

export default SearchBar;
