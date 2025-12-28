import type { Book, Genre } from '@/entities/book/model/type';
import { uploadBook } from '@/shared/api/bookApi';
import React, { useState } from 'react'
import { FaTrash, FaUpload } from 'react-icons/fa'

type Props = {}

export const AddBook = (props: Props) => {
    const genres: Genre[] = [
        "Fantasy",
        "Classic",
        "Drama",
        "Dystopian",
        "Romance",
        "Thriller",
        "Philosophical Fiction",
        "Horror",
        "Post-apocalyptic",
        "Psychological Thriller",
        "Science Fiction",
        "Historical Drama",
        "Adventure",
        "Mystery",
        "Self-help",
      ];
      
    const [uploadedImg , setUploadedImage] = useState<string | null >();
    const [isUploading , setIsUploading] = useState<Boolean>(false);
    const [file , setFile] = useState<File>();

    const [title , setTitle] = useState<string | null>();
    const [author , setAuthor] = useState<string | null>();
    const [genre , setGenre] = useState<string | null>();
    const [year , setYear] = useState<number | null>();
    const [timeForReading , setTimeForReading] = useState<string | null>();
    const [description , setDescription] = useState<string | null>();

    const handleClickOfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (!selectedFile) return;
      
        setFile(selectedFile);
        const imageUrl = URL.createObjectURL(selectedFile);
        setUploadedImage(imageUrl);
      
        uploadImage(selectedFile);
      };
      

      const handleSubmit = async () => {
        // Проверяем обязательные поля
        if (!title || !author || !genre || !year || !timeForReading) {
          alert("Пожалуйста, заполните все обязательные поля");
          return;
        }
      
        // Формируем новый объект книги без id
        const newBook: Omit<Book, 'id'> = {
          title: title.trim(),
          author: author.trim(),
          genre: genre as Genre,
          year: Number(year),
          timeForReading: Number(timeForReading),
          description: description?.trim() || '',
          image: uploadedImg ?? '', 
        };
      
        try {
          const savedBook = await uploadBook(newBook);
          console.log("✅ Книга сохранена:", savedBook);
          alert("Книга успешно добавлена!");
      
          // Очистим форму
          setTitle(null);
          setAuthor(null);
          setGenre(null);
          setYear(null);
          setTimeForReading(null);
          setDescription(null);
          setUploadedImage(null);
          setFile(undefined);
        } catch (error) {
          console.error("❌ Ошибка при сохранении:", error);
          alert("Ошибка при сохранении книги!");
        }
      };
      

    const uploadImage = async (file: File) => {
        setIsUploading(true);
      
        await new Promise((r) => setTimeout(r, 2000));
      
        setIsUploading(false);
      };


  return (
    <div className='container mx-auto bg-white my-10 p-3 flex flex-col rounded-xl'>
        <h1>Add Book</h1>
        {/* IMAGE ADD CONTAINER */}
        <div className='md:flex md:gap-4 p-3'>
            <div className='flex flex-col gap-2 md:w-1/2 md:border-1 md:border-gray-300 rounded-md py-3 px-6'>
                <h3 className='text-sm'>Add Image</h3>
                {/* IMAGE INPUT */}
                <div className="flex flex-col items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <FaUpload className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'/>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input 
                        id="dropzone-file" 
                        type="file" 
                        className="hidden" 
                        onChange={(e) => handleClickOfUpload(e)}
                        />
                    </label>
                    {/* PANEL OF UPLOAD  */}
                    {isUploading &&  (
                        <div>
                            <div className="mt-4 flex items-center gap-3 bg-gray-100 p-3 rounded-lg w-full justify-center">
                            <div className="w-5 h-5 border-2 border-gray-400 border-t-blue-500 rounded-full animate-spin"></div>
                            <p className="text-sm text-gray-600">Uploading...</p>
                            </div>
                        </div>
                    )}

                    { uploadedImg && !isUploading && (
                            <div className="mt-4 flex items-center gap-3 rounded-lg w-full justify-between border-gray-300 border-1 p-2">
                                <div className='flex justify-center items-center gap-3'>
                                    <img
                                        src={uploadedImg}
                                        alt="Preview"
                                        className="max-h-15  rounded-lg shadow-md object-cover"
                                    />
                                    <div>
                                        <p className='font-light'>{file?.name}</p>
                                        <p>{Math.floor(file?.size! / 1024)} KB</p>
                                    </div>
                                </div>
                                <div className=''>
                                   <FaTrash className='w-5 h-5 text-gray-500 dark:text-gray-400 cursor-pointer'/>
                                </div>
                            </div>
                        )}
                </div> 
            </div>
            {/* IMAGE ADD CONTAINER */}
            <div className='md:w-1/2 md:border-1 md:border-gray-300 rounded-md py-3 px-6 flex flex-col gap-3'>
                <h1>Product</h1>
                <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-900">Title</label>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Text here!" required
                    value={title ?? ""} 
                    onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">Author</label>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Text here!" required 
                    value={author ?? ""} 
                    onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Genre</label>
                    <form >
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={genre ?? ""} 
                        onChange={(e) => setGenre(e.target.value)}>
                        {genres.map((genre)=>(
                            <option value={genre} key={genre}>{genre}</option>
                        ))}
                        </select>
                    </form>

                </div>
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Year</label>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Text here!" required 
                    value={year ?? ""} 
                    onChange={(e) => setYear(Number(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">Time for reading(minute)</label>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Text here!" required 
                    value={timeForReading ?? ""} 
                    onChange={(e) => setTimeForReading(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">Description (Optional*)</label>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Text here!"
                    value={description ?? ""} 
                    onChange={(e) => setDescription(e.target.value)}/>
                </div>
            </div>
        </div>
        <div className='flex justify-end'>
            <button type="button" className="border font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-40 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700"
            onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}