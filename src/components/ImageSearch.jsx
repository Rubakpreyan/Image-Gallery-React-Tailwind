import React ,{useState} from 'react';

const ImageSearch = ({searchText}) => {
    const [text,setText] = useState('');
    const onSubmit = (e) =>{
        e.preventDefault();
        searchText(text);
    }
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
                <form className="w-full max-w-sm" action="" onSubmit={onSubmit}>
                    <div className="flex items-center border-b-2 py-2">
                        <input onChange={e => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 px-2 py-1 leading-tight focus:outline-none" type="text" name="" id="" placeholder="Search Items" />
                        <button className="flex-shrink-0 bg-blue-600 text-sm border-2 text-white py-1 px-3 rounded" type="submit">
                            Search
                        </button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default ImageSearch;
